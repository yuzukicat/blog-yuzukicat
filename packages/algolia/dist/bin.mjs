#!/usr/bin/env node
import {
  indexToAlgolia
} from "./chunk-S6DFH672.mjs";

// src/bin.ts
import { resolve } from "path";
import { Command } from "commander";
var CWD = process.cwd();
var program = new Command();
program.option("--docsBaseDir [rootdir]", "relative path to nextra pages rootDir", "./src/pages/").option("-o, --output [lockfilepath]", "relative path to lock file", "./algolia-lockfile.json").option("-p, --publish").requiredOption("-s, --source <source>").requiredOption("-d, --domain <domain>");
program.parse(process.argv);
var options = program.opts();
indexToAlgolia({
  domain: options.domain,
  lockfilePath: resolve(CWD, options.output),
  source: options.source,
  nextra: {
    docsBaseDir: resolve(CWD, options.docsBaseDir)
  },
  dryMode: !options.publish
});
