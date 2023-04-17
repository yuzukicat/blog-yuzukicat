var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
import { createHash } from "crypto";
import { existsSync } from "fs";
import path from "path";
import { writeFile, readFile } from "fs/promises";
import algoliaSearch from "algoliasearch";
import GitHubSlugger from "github-slugger";
import fg from "fast-glob";
import matter from "gray-matter";
import sortBy from "lodash.sortby";
import removeMarkdown from "remove-markdown";
var MARKDOWN_EXTENSION = /\.mdx?$/;
function extractToC(content) {
  const slugger = new GitHubSlugger();
  let isCodeBlock = false;
  let currentDepth = 0;
  let currentParent;
  return content.split("\n").reduce((acc, value) => {
    var _a, _b;
    if (value.match(/^```(.*)/)) {
      if (isCodeBlock) {
        isCodeBlock = false;
      } else {
        isCodeBlock = true;
        return acc;
      }
    } else if (isCodeBlock) {
      return acc;
    }
    const result = value.match(/(##+ )(.+)/);
    if (!result)
      return acc;
    const depth = ((_a = result[1]) == null ? void 0 : _a.length) - 3;
    if (depth > 1) {
      return acc;
    }
    const heading = (_b = result[2]) == null ? void 0 : _b.trim();
    const record = {
      children: [],
      title: heading,
      anchor: slugger.slug(heading)
    };
    if (depth > 0) {
      currentParent == null ? void 0 : currentParent.children.push(record);
      if (depth > currentDepth) {
        currentParent = record;
      }
    } else {
      currentParent = record;
      acc.push(record);
    }
    currentDepth = depth;
    return acc;
  }, []);
}
var withTrailingSlash = (str) => str.endsWith("/") ? str : `${str}/`;
var withLeadingSlash = (str) => str.startsWith("/") ? str : `/${str}`;
var withoutTrailingSlashes = (str) => str.replace(/\/+$/, "");
var contentForRecord = (content) => {
  let isCodeBlock = false;
  let isMeta = false;
  return removeMarkdown(
    content.split("\n").map((line) => {
      if (line.match(/^```(.*)/)) {
        isCodeBlock = !isCodeBlock;
        return null;
      }
      if (isCodeBlock) {
        return null;
      }
      if (line.startsWith("---")) {
        isMeta = !isMeta;
        return null;
      }
      if (isMeta) {
        return null;
      }
      if (line.startsWith("#")) {
        return null;
      }
      if (!isCodeBlock && (line.match(/^export(.*)/) || line.match(/^import(.*)/))) {
        return null;
      }
      return line;
    }).filter((line) => line !== null).join(" ")
  ).trim();
};
function pluginsToAlgoliaRecords(_0, _1, _2) {
  return __async(this, arguments, function* (plugins, source, domain, objectsPrefix = new GitHubSlugger().slug(source)) {
    const slugger = new GitHubSlugger();
    return plugins.map((plugin) => {
      const toc = extractToC(plugin.readme || "");
      return {
        objectID: slugger.slug(`${objectsPrefix}-${plugin.title}`),
        headings: toc.map((t) => t.title),
        toc,
        content: contentForRecord(plugin.readme || ""),
        url: `${withTrailingSlash(domain)}plugins/${plugin.identifier}`,
        domain: withoutTrailingSlashes(domain),
        hierarchy: [source, "Plugins"],
        source,
        title: plugin.title,
        type: "Plugin"
      };
    });
  });
}
function getMetaFromFile(path2) {
  return __async(this, null, function* () {
    try {
      return JSON.parse(yield readFile(path2, "utf8"));
    } catch (e) {
    }
  });
}
function nextraToAlgoliaRecords(_0) {
  return __async(this, arguments, function* ({
    docsBaseDir,
    source,
    domain,
    objectsPrefix = new GitHubSlugger().slug(source)
  }) {
    const objects = [];
    const slugger = new GitHubSlugger();
    const metadataCache = {};
    const getMetadataForFile = (filePath) => __async(this, null, function* () {
      const hierarchy = [];
      const fileDir = filePath.split("/").slice(0, -1).join("/");
      const fileName = filePath.split("/").pop();
      const folders = filePath.replace(docsBaseDir, "").replace(fileName, "").split("/").filter(Boolean);
      while (folders.length) {
        const folderPath = folders.join("/");
        const folder = folders.pop();
        metadataCache[folderPath] || (metadataCache[folderPath] = yield getMetaFromFile(
          path.join(docsBaseDir, folderPath, "_meta.json")
        ));
        const folderName = metadataCache[folderPath][folder];
        const resolvedFolderName = typeof folderName === "string" ? folderName : (folderName == null ? void 0 : folderName.title) || folder;
        if (resolvedFolderName) {
          hierarchy.unshift(resolvedFolderName);
        }
      }
      metadataCache[fileDir] || (metadataCache[fileDir] = yield getMetaFromFile(path.join(fileDir, "_meta.json")));
      if (!metadataCache[fileDir]) {
        return;
      }
      const title = metadataCache[fileDir][fileName.replace(MARKDOWN_EXTENSION, "")];
      const resolvedTitle = typeof title === "string" ? title : title == null ? void 0 : title.title;
      const urlPath = filePath.replace(docsBaseDir, "").replace(fileName, "");
      return [resolvedTitle || fileName.replace(MARKDOWN_EXTENSION, ""), hierarchy, urlPath];
    });
    const files = fg.sync(path.join(docsBaseDir, "**", "*.{md,mdx}"));
    for (const file of files) {
      const filename = file.split("/").pop().replace(/\.\w+$/, "").replace(/^index$/, "");
      const fileContent = yield readFile(file);
      const { data: meta, content } = matter(fileContent.toString());
      const toc = extractToC(content);
      const metaData = yield getMetadataForFile(file);
      if (!metaData) {
        continue;
      }
      const [title, hierarchy, urlPath] = metaData;
      objects.push({
        objectID: slugger.slug(
          `${objectsPrefix}-${[...hierarchy, filename.replace(".", "_")].join("-")}`
        ),
        headings: toc.map((t) => t.title),
        toc,
        content: contentForRecord(content),
        url: `${withoutTrailingSlashes(domain)}${withLeadingSlash(urlPath)}${filename}`,
        domain: withoutTrailingSlashes(domain),
        hierarchy,
        source,
        title,
        type: meta.type || "Documentation"
      });
    }
    return objects;
  });
}
function indexToAlgolia(_0) {
  return __async(this, arguments, function* ({
    plugins = [],
    source,
    domain,
    nextra,
    postProcessor = (value) => value,
    // TODO: add `force` flag
    dryMode = true,
    lockfilePath
  }) {
    const objects = postProcessor([
      ...yield pluginsToAlgoliaRecords(plugins, source, domain),
      ...nextra ? yield nextraToAlgoliaRecords({
        docsBaseDir: nextra.docsBaseDir,
        source,
        domain
      }) : []
    ]);
    const recordsAsString = JSON.stringify(
      sortBy(objects, "objectID"),
      (key, value) => key === "content" ? createHash("md5").update(value).digest("hex") : value,
      2
    );
    const lockFileExists = existsSync(lockfilePath);
    const lockfileContent = JSON.stringify(
      // save space but still keep track of content changes
      sortBy(lockFileExists ? JSON.parse(yield readFile(lockfilePath, "utf8")) : [], "objectID"),
      null,
      2
    );
    if (dryMode) {
      console.log(`${lockfilePath} updated!`);
      yield writeFile(lockfilePath, recordsAsString);
      return;
    }
    if (!lockFileExists || recordsAsString !== lockfileContent) {
      if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_ADMIN_API_KEY || !process.env.ALGOLIA_INDEX_NAME) {
        console.error("Some Algolia environment variables are missing!");
        return;
      }
      if (lockFileExists) {
        console.log("changes detected, updating Algolia index!");
      } else {
        console.log("no lockfile detected, push all records");
      }
      const client = algoliaSearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY);
      const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);
      index.deleteBy({ filters: `source: "${source}"` }).then(() => index.saveObjects(objects)).then(console.log).catch(console.error);
      yield writeFile(lockfilePath, recordsAsString);
    }
  });
}

export {
  nextraToAlgoliaRecords,
  indexToAlgolia
};
