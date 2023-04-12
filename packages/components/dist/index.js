import {
  PRODUCTS
} from "./chunk-UZ5WXZB2.js";
import "./chunk-UFCH35GL.js";

// src/components/anchor.tsx
import { forwardRef } from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { Fragment, jsx } from "react/jsx-runtime";
var Anchor = forwardRef(function Anchor2({ href = "", children, newWindow, sameSite, className, ...props }, forwardedRef) {
  if (sameSite) {
    const url = new URL(href);
    href = url.pathname + url.search + url.hash;
  }
  const classes = clsx(className, "outline-none focus-visible:ring transition");
  if (newWindow && /^https?:\/\//.test(href)) {
    return /* @__PURE__ */ jsx(
      "a",
      {
        ref: forwardedRef,
        href,
        target: "_blank",
        rel: "noreferrer",
        className: classes,
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(NextLink, { ref: forwardedRef, href, ...props, className: classes, legacyBehavior: false, children: /* @__PURE__ */ jsx(Fragment, { children }) });
});

// src/components/banner.tsx
import clsx2 from "clsx";
import { jsx as jsx2 } from "react/jsx-runtime";
var Banner = ({
  children,
  animation,
  color = "#e7e7e7",
  bgColor = "linear-gradient(-45deg, #5f6184, #a7a8d7, #5f6184, #a7a8d7)"
}) => {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: clsx2(
        "sticky top-0 w-full py-4 px-6 text-center [background:var(--bgColor)] [color:var(--color)]",
        animation || "animate-gradient"
      ),
      style: {
        "--color": color,
        "--bgColor": bgColor,
        // couldn't set with tailwindcss
        backgroundSize: "400% 200%"
      },
      children
    }
  );
};

// src/components/button.tsx
import clsx3 from "clsx";
import { jsx as jsx3 } from "react/jsx-runtime";
var Button = ({
  children,
  className,
  variant = "primary",
  ...props
}) => {
  return /* @__PURE__ */ jsx3(
    Anchor,
    {
      className: clsx3(
        `
        flex-none
        rounded-md
        p-3
        text-center
        text-xs
        font-medium
        hover:shadow-lg
        md:px-5
      `,
        variant === "primary" ? "bg-cyan-400 text-white hover:shadow-cyan-400/40" : "bg-white text-black hover:shadow-white/40",
        className
      ),
      ...props,
      children
    }
  );
};

// src/components/cards-colorful.tsx
import clsx4 from "clsx";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var CardsColorful = ({ cards, className }) => /* @__PURE__ */ jsx4("section", { className: clsx4("bg-white py-8 dark:bg-[#111]", className), children: /* @__PURE__ */ jsx4(
  "div",
  {
    className: "\n        container\n        flex\n        flex-wrap\n        space-y-6\n        md:flex-nowrap\n        md:space-x-8\n        md:space-y-0\n    ",
    children: cards.map((card) => /* @__PURE__ */ jsx4(
      Anchor,
      {
        className: "\n            relative\n            min-h-[200px]\n            w-full\n            rounded-3xl\n            p-8\n            text-white\n            [background:var(--color)]\n            after:absolute\n            after:top-0\n            after:right-0\n            after:h-full\n            after:w-[calc(30%-1rem)]\n            after:rounded-3xl\n            after:bg-white/10\n            after:content-['']\n            md:h-72\n            md:w-1/2\n            md:hover:scale-105\n            md:hover:shadow-xl\n            lg:after:w-[calc(50%-1rem)]\n          ",
        style: { "--color": card.color },
        ...card.link,
        children: /* @__PURE__ */ jsxs("div", { className: "w-3/4 lg:w-1/2", children: [
          /* @__PURE__ */ jsx4("h2", { className: "pb-1.5 text-xs font-semibold uppercase opacity-60", children: card.category }),
          /* @__PURE__ */ jsx4("h3", { className: "pb-2.5 text-2xl font-bold md:text-3xl", children: card.title }),
          /* @__PURE__ */ jsx4("p", { className: "text-xs font-medium opacity-60", children: card.description })
        ] })
      },
      card.title
    ))
  }
) });

// src/components/feature-list.tsx
import clsx5 from "clsx";

// src/components/image.tsx
import NextImage from "next/image";
import { jsx as jsx5 } from "react/jsx-runtime";
function Image(props) {
  return /* @__PURE__ */ jsx5(NextImage, { placeholder: "blur", ...props });
}

// src/components/feature-list.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var FeatureList = ({
  title,
  description,
  items,
  link,
  className
}) => /* @__PURE__ */ jsx6("section", { className: clsx5("bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs2("div", { className: "container py-14", children: [
  title && /* @__PURE__ */ jsxs2("div", { className: "mb-6 flex flex-col items-center", children: [
    /* @__PURE__ */ jsx6("h2", { className: "mt-0 mb-1.5 text-center text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
    description && /* @__PURE__ */ jsx6("div", { className: "mt-1 mb-1.5 text-center text-base text-gray-500 dark:text-gray-400", children: description }),
    link && /* @__PURE__ */ jsx6(
      Anchor,
      {
        ...link,
        className: clsx5("w-max text-sm text-cyan-400 hover:text-cyan-300", link.className)
      }
    )
  ] }),
  /* @__PURE__ */ jsx6("div", { className: "flex flex-wrap justify-center gap-12", children: items.map((item) => /* @__PURE__ */ jsxs2("div", { className: "flex w-56 flex-col items-center", children: [
    /* @__PURE__ */ jsx6(Image, { ...item.image, className: clsx5("w-28", item.image.className) }),
    /* @__PURE__ */ jsx6("h3", { className: "m-0 text-lg font-bold text-black dark:text-gray-50", children: item.title }),
    /* @__PURE__ */ jsx6("div", { className: "text-center text-sm text-gray-500 dark:text-gray-400", children: item.description }),
    item.link && /* @__PURE__ */ jsx6(
      Anchor,
      {
        ...item.link,
        className: clsx5(
          "mt-2 w-max text-sm text-cyan-400 hover:text-cyan-300",
          item.link.className
        )
      }
    )
  ] }, item.title)) })
] }) });

// src/components/footer-extended.tsx
import clsx6 from "clsx";
import { jsx as jsx7 } from "react/jsx-runtime";
var FooterExtended = ({
  className
}) => {
  return /* @__PURE__ */ jsx7("footer", { className: clsx6("bg-white text-xs dark:bg-[#111]", className), children: /* @__PURE__ */ jsx7("div", { className: "container max-w-[90rem] border-t border-gray-300 dark:border-gray-800", children: /* @__PURE__ */ jsx7("div", { className: "my-8 flex flex-col gap-6 pt-2 pb-4 lg:flex-row", children: /* @__PURE__ */ jsx7("div", { className: "flex w-full flex-row gap-6", children: /* @__PURE__ */ jsx7("p", { className: "text-pink-500 dark:text-gray-200", children: "@2023 Yuzuki.Cat" }) }) }) }) });
};

// src/components/header.tsx
import { useCallback as useCallback2, useMemo, useState as useState3 } from "react";
import {
  Content,
  Indicator,
  Item,
  Link,
  List,
  Root as Root2,
  Trigger,
  Viewport
} from "@radix-ui/react-navigation-menu";
import clsx10 from "clsx";
import { useTheme } from "nextra-theme-docs";

// src/helpers/hooks.ts
import { useEffect, useState } from "react";
var useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);
  useEffect(() => {
    const keyHandler = (event) => {
      if (event.key === targetKey) {
        setKeyPressed(event.type === "keydown");
      }
    };
    window.addEventListener("keydown", keyHandler);
    window.addEventListener("keyup", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener("keyup", keyHandler);
    };
  }, [targetKey]);
  return keyPressed;
};
var useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({});
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

// src/helpers/utils.ts
var DEFAULT_PATH_PROPS = {
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// src/components/icons/arrow-up-right.tsx
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var ArrowUpRightIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs3(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx8("path", { d: "M7 17L17 7", ...DEFAULT_PATH_PROPS }),
        /* @__PURE__ */ jsx8("path", { d: "M7 7H17V17", ...DEFAULT_PATH_PROPS })
      ]
    }
  );
};

// src/components/icons/caret.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var CaretIcon = ({ className }) => {
  return /* @__PURE__ */ jsx9(
    "svg",
    {
      width: "10",
      height: "6",
      viewBox: "0 0 10 6",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: /* @__PURE__ */ jsx9("path", { d: "M1.5 1L5 4.5L8.5 1", ...DEFAULT_PATH_PROPS })
    }
  );
};

// src/components/icons/caret-slim.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var CaretSlimIcon = ({ className }) => {
  return /* @__PURE__ */ jsx10(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: /* @__PURE__ */ jsx10("path", { d: "M4 8L12 16L20 8", ...DEFAULT_PATH_PROPS })
    }
  );
};

// src/components/icons/check.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function CheckIcon({ className }) {
  return /* @__PURE__ */ jsx11("svg", { viewBox: "0 0 20 20", width: "1em", height: "1em", fill: "currentColor", className, children: /* @__PURE__ */ jsx11(
    "path",
    {
      fillRule: "evenodd",
      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
      clipRule: "evenodd"
    }
  ) });
}

// src/components/icons/close.tsx
import { jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
var CloseIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs4(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx12("path", { d: "M5.63607 5.35355L18.364 18.0815", ...DEFAULT_PATH_PROPS }),
        /* @__PURE__ */ jsx12("path", { d: "M18.0815 5.35354L5.35358 18.0815", ...DEFAULT_PATH_PROPS })
      ]
    }
  );
};

// src/components/icons/external-link.tsx
import { jsx as jsx13, jsxs as jsxs5 } from "react/jsx-runtime";
var ExternalLinkIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs5(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx13(
          "path",
          {
            d: "M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11",
            ...DEFAULT_PATH_PROPS
          }
        ),
        /* @__PURE__ */ jsx13("path", { d: "M15 3H21V9", ...DEFAULT_PATH_PROPS }),
        /* @__PURE__ */ jsx13("path", { d: "M10 14L21 3", ...DEFAULT_PATH_PROPS })
      ]
    }
  );
};

// src/components/icons/hamburger.tsx
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
var HamburgerIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs6(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx14("path", { d: "M3 12H21", ...DEFAULT_PATH_PROPS }),
        /* @__PURE__ */ jsx14("path", { d: "M3 6H21", ...DEFAULT_PATH_PROPS }),
        /* @__PURE__ */ jsx14("path", { d: "M3 18H21", ...DEFAULT_PATH_PROPS })
      ]
    }
  );
};

// src/components/icons/hash-tag.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var HashTagIcon = ({ className }) => {
  return /* @__PURE__ */ jsx15(
    "svg",
    {
      width: "22",
      height: "22",
      viewBox: "0 0 22 22",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: /* @__PURE__ */ jsx15(
        "path",
        {
          d: "M15.2857 15.2857H21H15.2857ZM15.2857 15.2857V8.14286H6.71429V15.2857H15.2857ZM15.2857 15.2857V21V15.2857ZM15.2857 15.2857H6.71429V8.14286H1H6.71429V1V8.14286H15.2857V1V8.14286H21H15.2857V15.2857ZM6.71429 15.2857V21V15.2857ZM6.71429 15.2857H1H6.71429Z",
          ...DEFAULT_PATH_PROPS
        }
      )
    }
  );
};

// src/components/icons/mail.tsx
import { jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
var MailIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs7(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "currentColor",
      className,
      children: [
        /* @__PURE__ */ jsx16(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z",
            ...DEFAULT_PATH_PROPS
          }
        ),
        /* @__PURE__ */ jsx16("path", { d: "M22 6L12 13L2 6", ...DEFAULT_PATH_PROPS })
      ]
    }
  );
};

// src/components/icons/moon.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var MoonIcon = ({ className }) => {
  return /* @__PURE__ */ jsx17(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: /* @__PURE__ */ jsx17(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.75 8.3425C14.4217 11.8944 11.3866 14.5777 7.82131 14.4682C4.256 14.3586 1.39135 11.494 1.2818 7.92867C1.17225 4.36336 3.85562 1.32824 7.40748 1C5.86275 3.08984 6.07942 5.99534 7.91703 7.83295C9.75464 9.67056 12.6601 9.88723 14.75 8.3425Z",
          ...DEFAULT_PATH_PROPS
        }
      )
    }
  );
};

// src/components/icons/more.tsx
import { jsx as jsx18, jsxs as jsxs8 } from "react/jsx-runtime";
var MoreIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs8(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx18(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z",
            ...DEFAULT_PATH_PROPS
          }
        ),
        /* @__PURE__ */ jsx18(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5Z",
            ...DEFAULT_PATH_PROPS
          }
        ),
        /* @__PURE__ */ jsx18(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25C8.25 14.6642 8.58579 15 9 15Z",
            ...DEFAULT_PATH_PROPS
          }
        )
      ]
    }
  );
};

// src/components/icons/page.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var PageIcon = ({ className }) => {
  return /* @__PURE__ */ jsx19(
    "svg",
    {
      width: "18",
      height: "22",
      viewBox: "0 0 18 22",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: /* @__PURE__ */ jsx19(
        "path",
        {
          d: "M13.5714 8.77778H9.99429C9.41143 8.77778 9 8.4 9 7.81111V4.33333M17 6.55556V19.8889C17 20.4667 16.7714 21 15.8571 21H2.14286C1.34286 21 1 20.6333 1 19.8889V2.11111C1 1.5 1.48 1 2.14286 1H11.2857L17 6.55556Z",
          ...DEFAULT_PATH_PROPS
        }
      )
    }
  );
};

// src/components/icons/search.tsx
import { jsx as jsx20, jsxs as jsxs9 } from "react/jsx-runtime";
var SearchIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs9(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx20(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",
            ...DEFAULT_PATH_PROPS
          }
        ),
        /* @__PURE__ */ jsx20("path", { d: "M21 21L16.65 16.65", ...DEFAULT_PATH_PROPS })
      ]
    }
  );
};

// src/components/icons/share.tsx
import { jsx as jsx21, jsxs as jsxs10 } from "react/jsx-runtime";
var ShareIcon = ({ className }) => {
  return /* @__PURE__ */ jsxs10(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx21(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.5 6C14.7426 6 15.75 4.99264 15.75 3.75C15.75 2.50736 14.7426 1.5 13.5 1.5C12.2574 1.5 11.25 2.50736 11.25 3.75C11.25 4.99264 12.2574 6 13.5 6Z",
            ...DEFAULT_PATH_PROPS
          }
        ),
        /* @__PURE__ */ jsx21(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.5 11.25C5.74264 11.25 6.75 10.2426 6.75 9C6.75 7.75736 5.74264 6.75 4.5 6.75C3.25736 6.75 2.25 7.75736 2.25 9C2.25 10.2426 3.25736 11.25 4.5 11.25Z",
            ...DEFAULT_PATH_PROPS
          }
        ),
        /* @__PURE__ */ jsx21(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.5 16.5C14.7426 16.5 15.75 15.4926 15.75 14.25C15.75 13.0074 14.7426 12 13.5 12C12.2574 12 11.25 13.0074 11.25 14.25C11.25 15.4926 12.2574 16.5 13.5 16.5Z",
            ...DEFAULT_PATH_PROPS
          }
        ),
        /* @__PURE__ */ jsx21("path", { d: "M6.44336 10.1325L11.5659 13.1175", ...DEFAULT_PATH_PROPS }),
        /* @__PURE__ */ jsx21("path", { d: "M11.5584 4.88251L6.44336 7.86751", ...DEFAULT_PATH_PROPS })
      ]
    }
  );
};

// src/components/icons/index.ts
import { InformationCircleIcon } from "nextra/icons";

// src/components/nav.tsx
import { useEffect as useEffect2 } from "react";
import clsx7 from "clsx";

// src/helpers/modals.ts
var toggleLockBodyScroll = (state) => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = state ? "hidden" : "visible";
  }
};

// src/components/nav.tsx
import { jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
var Nav = ({
  isOpen,
  setOpen,
  children,
  className
}) => {
  useEffect2(() => {
    toggleLockBodyScroll(isOpen);
  }, [isOpen]);
  return /* @__PURE__ */ jsxs11(
    "nav",
    {
      className: clsx7(
        ` 
        fixed
        inset-0
        z-[49]
        flex
        flex-col
        justify-center
        bg-white
        transition-all
        duration-300
        dark:bg-[#111]
        md:static
        md:flex-row
        md:items-center
        md:justify-end
        md:transition-none`,
        !isOpen && "-top-full bottom-full",
        className
      ),
      children: [
        /* @__PURE__ */ jsx22(
          "button",
          {
            onClick: () => setOpen(false),
            className: "\n          absolute\n          top-6\n          right-6\n          rounded-lg\n          bg-gray-200\n          p-1.5\n          text-gray-500\n          outline-none\n          transition\n          hover:opacity-70\n          dark:bg-gray-700\n          dark:text-white\n          md:hidden\n        ",
            children: /* @__PURE__ */ jsx22(CloseIcon, {})
          }
        ),
        children
      ]
    }
  );
};

// src/components/search-bar.tsx
import {
  createElement as createElement2,
  useCallback,
  useEffect as useEffect5,
  useRef as useRef2,
  useState as useState2
} from "react";
import algoliaSearch2 from "algoliasearch";
import clsx9 from "clsx";
import {
  connectHits,
  connectSearchBox,
  connectStateResults,
  InstantSearch
} from "react-instantsearch-dom";
import { useDebouncedCallback } from "use-debounce";

// src/configs.ts
var algoliaConfig = {
  appID: "ANRJKXZTRW",
  apiKey: "811d453fc7f80306044dd5cc4b87e064",
  searchIndex: "theguild",
  hosts: [{ url: "www.the-guild.dev/api/algolia" }]
};

// src/components/modal.tsx
import { useEffect as useEffect3 } from "react";
import clsx8 from "clsx";
import FocusTrap from "focus-trap-react";
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
var Modal = ({
  image,
  title,
  description,
  children,
  visible,
  placement,
  onCancel,
  className
}) => {
  const escapePress = useKeyPress("Escape");
  const renderDescription = () => {
    if (!description) {
      return;
    }
    return typeof description === "object" ? /* @__PURE__ */ jsxs12(Anchor, { className: "inline-flex gap-x-1.5 hover:opacity-60", ...description, children: [
      /* @__PURE__ */ jsx23("p", { className: "line-clamp-1", children: description.children }),
      /* @__PURE__ */ jsx23(ExternalLinkIcon, { className: "h-4 w-4 shrink-0" })
    ] }) : /* @__PURE__ */ jsx23("p", { className: "line-clamp-1", children: description });
  };
  useEffect3(() => {
    if (visible && escapePress) {
      onCancel();
    }
  }, [visible, escapePress, onCancel]);
  return /* @__PURE__ */ jsxs12("div", { className: clsx8("fixed inset-0 z-[50] backdrop-blur-sm", !visible && "hidden", className), children: [
    /* @__PURE__ */ jsx23(
      "div",
      {
        className: "h-full w-full bg-gray-900 opacity-40 dark:bg-gray-500",
        onClick: () => onCancel()
      }
    ),
    /* @__PURE__ */ jsx23(
      FocusTrap,
      {
        active: visible,
        focusTrapOptions: {
          fallbackFocus: "#tgc-modal",
          clickOutsideDeactivates: true
        },
        children: /* @__PURE__ */ jsxs12(
          "div",
          {
            className: clsx8(
              `
            absolute
            inset-0
            flex
            h-full
            w-full
            max-w-none
            flex-col
            bg-white
            dark:bg-[#111]
            md:max-h-[80%]
            md:-translate-x-1/2
            md:rounded-md
          `,
              (placement === "top" || placement === "center") && "md:left-1/2 md:right-auto md:bottom-auto md:h-auto md:max-w-3xl",
              {
                top: "md:top-10 md:-translate-y-0",
                center: "md:top-1/2 md:-translate-y-1/2",
                bottom: "md:top-1/2 md:left-1/2 md:bottom-0 md:h-5/6 md:max-w-3xl md:-translate-y-1/2"
              }[placement]
            ),
            id: "tgc-modal",
            children: [
              /* @__PURE__ */ jsxs12(
                "div",
                {
                  className: "\n              flex\n              items-center\n              gap-x-2\n              border-b\n              border-gray-200\n              p-6\n              dark:border-gray-700\n              md:gap-x-4\n            ",
                  children: [
                    image && /* @__PURE__ */ jsx23(Image, { ...image, className: clsx8("w-10 md:w-16", image.className) }),
                    /* @__PURE__ */ jsxs12("div", { children: [
                      /* @__PURE__ */ jsx23("h2", { className: "m-0 text-lg font-semibold text-black dark:text-gray-100 md:text-xl", children: title }),
                      /* @__PURE__ */ jsx23("p", { className: "m-0 text-xs text-gray-500 dark:text-gray-100", children: renderDescription() })
                    ] }),
                    /* @__PURE__ */ jsx23(
                      "button",
                      {
                        onClick: () => onCancel(),
                        className: "\n                ml-auto\n                self-start\n                rounded-lg\n                border-2\n                border-transparent\n                bg-gray-200\n                p-1.5\n                text-gray-500\n                outline-none\n                transition\n                hover:border-gray-500\n                focus:ring\n                dark:bg-gray-700\n                dark:text-gray-200\n              ",
                        children: /* @__PURE__ */ jsx23(CloseIcon, {})
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx23("div", { className: "overflow-y-scroll p-6 text-black dark:text-gray-300", children })
            ]
          }
        )
      }
    )
  ] });
};

// src/components/search-bar-v2/index.tsx
import { createElement, Fragment as Fragment3, useEffect as useEffect4, useRef } from "react";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import { createAlgoliaInsightsPlugin } from "@algolia/autocomplete-plugin-algolia-insights";
import algoliaSearch from "algoliasearch";
import { createRoot } from "react-dom/client";
import insightsClient from "search-insights";

// src/components/search-bar-v2/side-preview.tsx
import { Fragment as Fragment2, jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
var products = Object.values(PRODUCTS);
var SidePreview = ({
  item,
  components: { Highlight, Snippet: Snippet2 },
  accentColor
}) => {
  if (!item) {
    return null;
  }
  const project = products.find((p) => p.name === item.source);
  return /* @__PURE__ */ jsxs13(
    "div",
    {
      className: "flex h-[600px] select-text flex-col overflow-y-auto p-10",
      style: { "--accentColor": accentColor },
      children: [
        project && /* @__PURE__ */ jsxs13("div", { className: "my-1 mb-4 box-border flex w-full select-none items-center justify-center", children: [
          /* @__PURE__ */ jsx24(project.logo, { className: "mr-3 h-9 w-9" }),
          /* @__PURE__ */ jsx24("span", { className: "flex flex-col justify-center", children: /* @__PURE__ */ jsx24("h4", { className: "m-0 text-sm font-semibold text-black dark:text-gray-400", children: project.name }) })
        ] }),
        /* @__PURE__ */ jsx24(
          "h3",
          {
            className: "\n          mt-0\n          mb-3\n          w-full\n          text-center\n          text-2xl\n          font-light\n          text-black\n          dark:text-gray-400\n          [&>mark]:bg-transparent\n          [&>mark]:font-semibold\n          [&>mark]:[color:var(--accentColor)]\n        ",
            children: /* @__PURE__ */ jsx24(Highlight, { hit: item, attribute: "title" })
          }
        ),
        /* @__PURE__ */ jsx24("p", { className: "mt-0 mb-6 w-full text-center text-base font-light text-gray-600 dark:text-gray-400", children: item.hierarchy.slice(1).join(" > ") }),
        /* @__PURE__ */ jsx24("p", { className: "text-center text-center text-sm font-light text-black dark:text-gray-400", children: /* @__PURE__ */ jsx24(Snippet2, { hit: item, attribute: "content" }) }),
        item.toc.length > 1 && /* @__PURE__ */ jsxs13(Fragment2, { children: [
          /* @__PURE__ */ jsx24("h4", { className: "mt-10 mb-1 w-full text-lg font-light text-gray-600 dark:text-gray-400", children: "Table of content:" }),
          /* @__PURE__ */ jsx24("ol", { className: "text-left text-base font-light text-gray-600 dark:text-gray-400", children: item.toc.map((tocItem) => /* @__PURE__ */ jsx24("li", { children: tocItem.title }, tocItem.title)) })
        ] }),
        /* @__PURE__ */ jsxs13("button", { className: "mb-5 mt-8 text-center text-center text-lg font-light text-black dark:text-gray-400", children: [
          'Press "Enter" to open ',
          item.type,
          " \u2192"
        ] })
      ]
    }
  );
};

// src/components/search-bar-v2/templates.tsx
import { jsx as jsx25, jsxs as jsxs14 } from "react/jsx-runtime";
var templates = {
  item: ({ item: hit, components }) => /* @__PURE__ */ jsx25(Anchor, { href: hit.url, className: "aa-ItemLink", children: /* @__PURE__ */ jsx25("div", { className: "aa-ItemContent", children: /* @__PURE__ */ jsxs14("div", { className: "aa-ItemContentBody", children: [
    /* @__PURE__ */ jsx25("div", { className: "aa-ItemContentTitle", children: /* @__PURE__ */ jsx25(components.Highlight, { hit, attribute: "title" }) }),
    /* @__PURE__ */ jsx25("div", { className: "aa-ItemContentSubtitle", children: /* @__PURE__ */ jsx25("em", { children: hit.type }) })
  ] }) }) }),
  header: ({ source }) => /* @__PURE__ */ jsx25("div", { className: "aa-SourceHeader", children: /* @__PURE__ */ jsx25("div", { className: "aa-SourceHeaderTitle", children: source.sourceId }) })
};

// src/components/search-bar-v2/utils.ts
function debouncePromise(fn, time) {
  let timerId;
  return function debounced2(args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    return new Promise((resolve) => {
      timerId = setTimeout(() => resolve(fn(args)), time);
    });
  };
}
var debounced = debouncePromise(
  // @ts-expect-error todo: fix Type 'AlgoliaSearchItem' does not satisfy the constraint 'BaseItem'.
  (items) => items,
  300
);

// src/components/search-bar-v2/index.tsx
import { jsx as jsx26, jsxs as jsxs15 } from "react/jsx-runtime";
var SearchBarV2 = ({
  accentColor,
  placeholder = "Search our documentations",
  className,
  algolia
}) => {
  const containerRef = useRef(null);
  const search = useRef();
  const panelRootRef = useRef(null);
  const rootRef = useRef(null);
  useEffect4(() => {
    if (!containerRef.current) {
      return;
    }
    const appId = algolia?.appId || process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
    const searchApiKey = algolia?.searchApiKey || process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
    const indexName = algolia?.indexName || process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;
    if (!appId || !searchApiKey || !indexName) {
      console.error("Algolia environments variables missing");
      return;
    }
    insightsClient("init", { appId, apiKey: searchApiKey });
    const searchClient2 = algoliaSearch(appId, searchApiKey);
    const algoliaInsightsPlugin = createAlgoliaInsightsPlugin({
      insightsClient
    });
    const getRender = (root) => {
      if (!panelRootRef.current || rootRef.current !== root) {
        rootRef.current = root;
        panelRootRef.current?.unmount();
        panelRootRef.current = createRoot(root);
      }
      return panelRootRef.current.render.bind(panelRootRef.current);
    };
    const s = autocomplete({
      container: containerRef.current,
      detachedMediaQuery: "",
      defaultActiveItemId: 0,
      placeholder,
      plugins: [algoliaInsightsPlugin],
      renderer: {
        createElement,
        Fragment: Fragment3,
        render: () => null
      },
      renderNoResults({ Fragment: Fragment9, state: { query, status } }, root) {
        const render = getRender(root);
        render(
          !query || status === "loading" ? (
            // eslint-disable-next-line react/jsx-no-useless-fragment -- false positive
            /* @__PURE__ */ jsx26(Fragment9, {})
          ) : /* @__PURE__ */ jsxs15("div", { className: "my-20 w-full text-center text-xl font-light text-gray-600 dark:text-gray-400", children: [
            'No results for "',
            query,
            '"'
          ] })
        );
      },
      render({ children, state, Fragment: Fragment9, components }, root) {
        const render = getRender(root);
        render(
          /* @__PURE__ */ jsxs15(Fragment9, { children: [
            /* @__PURE__ */ jsxs15("div", { className: "flex h-[600px] flex-row", children: [
              /* @__PURE__ */ jsx26("div", { className: "min-w-[400px]", children }),
              /* @__PURE__ */ jsx26(
                SidePreview,
                {
                  accentColor,
                  item: state.context.preview,
                  components
                }
              )
            ] }),
            /* @__PURE__ */ jsxs15(
              Anchor,
              {
                href: "https://algolia.com",
                newWindow: true,
                className: "mt-5 flex w-full flex-row items-center justify-end p-2 text-xs font-light text-black dark:text-white",
                children: [
                  "Search by\xA0",
                  /* @__PURE__ */ jsx26("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", children: /* @__PURE__ */ jsx26(
                    "path",
                    {
                      d: "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",
                      fill: "currentColor",
                      fillRule: "evenodd"
                    }
                  ) })
                ]
              }
            )
          ] })
        );
      },
      openOnFocus: true,
      getSources({ query }) {
        if (!query) {
          return [];
        }
        return debounced([
          {
            sourceId: "algoliaIndex",
            getItems: () => getAlgoliaResults({
              searchClient: searchClient2,
              queries: [
                {
                  indexName,
                  query,
                  params: {
                    hitsPerPage: 20
                  }
                }
              ]
            }),
            onActive({ item, setContext }) {
              setContext({ preview: item });
            },
            getItemUrl: ({ item }) => item.url,
            templates
          }
        ]);
      },
      reshape({ sourcesBySourceId, sources }) {
        if (sources.length === 0) {
          return sources;
        }
        const { algoliaIndex, ...restSources } = sourcesBySourceId;
        const items = algoliaIndex.getItems();
        const itemsSources = items.slice().sort(
          (a) => a.domain.startsWith(`${window.location.origin}${window.location.pathname}`) ? -1 : 0
        ).map((item) => item.source);
        const sourcesPerSite = itemsSources.reduce((acc, sourceId) => {
          acc[sourceId] || (acc[sourceId] = {
            ...algoliaIndex,
            sourceId,
            getItems: () => items.filter((item) => item.source === sourceId),
            templates
          });
          return acc;
        }, {});
        return Object.values({ ...sourcesPerSite, ...restSources });
      }
    });
    search.current = s;
    return () => {
      s.destroy();
    };
  }, [accentColor, placeholder, algolia]);
  useEffect4(() => {
    const down = (e) => {
      if (!search.current) {
        return;
      }
      if (e.key === "/" || e.key === "k" && e.metaKey) {
        e.preventDefault();
        const isOpen = !document.querySelector(".aa-DetachedOverlay");
        search.current.setIsOpen(isOpen);
      } else if (e.key === "Escape") {
        search.current.setIsOpen(false);
      }
    };
    window.addEventListener("keydown", down);
    return () => {
      window.removeEventListener("keydown", down);
    };
  }, []);
  return /* @__PURE__ */ jsx26("div", { ref: containerRef, className });
};

// src/components/search-bar.tsx
import { Fragment as Fragment4, jsx as jsx27, jsxs as jsxs16 } from "react/jsx-runtime";
var algoliaClient = algoliaSearch2(algoliaConfig.appID, algoliaConfig.apiKey, {
  hosts: algoliaConfig.hosts
});
var searchClient = {
  search(requests) {
    if (!requests.length || requests.every((req) => req.params?.query?.length === 0)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          exhaustiveNbHits: true,
          hitsPerPage: 20,
          nbHits: 0,
          nbPages: 0,
          page: 0,
          params: "query=&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&facets=%5B%5D",
          processingTimeMS: 0,
          query: ""
        }))
      });
    }
    return algoliaClient.search(requests);
  }
};
function getPropertyByPath(obj, path) {
  const parts = path.split(".");
  return parts.reduce((current, key) => current?.[key], obj);
}
var Snippet = ({
  hit,
  attribute,
  tagName = "span"
}) => {
  let html = getPropertyByPath(hit, `_snippetResult.${attribute}.value`) || getPropertyByPath(hit, attribute);
  html && (html = html.replace(/\s+\.css-.*/, ""));
  return createElement2(tagName, {
    dangerouslySetInnerHTML: { __html: html },
    className: tagName === "span" ? "dark:text-gray-300 text-gray-700" : "text-xs text-gray-400"
  });
};
var SearchBox = ({
  currentRefinement,
  refine,
  accentColor,
  placeholder,
  isModalOpen
}) => {
  const searchRef = useRef2(null);
  const [query, setQuery] = useState2(currentRefinement);
  const debouncedRefine = useDebouncedCallback((value) => {
    refine(value);
  }, 500);
  const onChange = useCallback(
    (event) => {
      const { value } = event.currentTarget;
      setQuery(value);
      debouncedRefine(value);
    },
    [setQuery, debouncedRefine]
  );
  useEffect5(() => {
    if (isModalOpen) {
      searchRef.current?.focus();
    }
  }, [isModalOpen]);
  return /* @__PURE__ */ jsx27(
    "form",
    {
      noValidate: true,
      action: "",
      role: "search",
      className: "\n        sticky\n        -top-6\n        z-10\n        -m-6\n        bg-white\n        p-6\n        shadow-sm\n        dark:bg-[#111]\n      ",
      children: /* @__PURE__ */ jsxs16(
        "div",
        {
          className: "\n          flex\n          w-full\n          items-center\n          gap-x-1\n          rounded-lg\n          border-2\n          bg-gray-50\n          p-2.5\n          text-lg\n          text-gray-500\n          [border-color:var(--accentColor)]\n          dark:bg-neutral-800\n          dark:text-gray-300\n        ",
          style: { "--accentColor": accentColor },
          children: [
            /* @__PURE__ */ jsx27(SearchIcon, {}),
            /* @__PURE__ */ jsx27(
              "input",
              {
                "aria-autocomplete": "both",
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                enterKeyHint: "search",
                spellCheck: "false",
                placeholder,
                maxLength: 64,
                type: "search",
                ref: searchRef,
                value: query,
                onChange,
                className: "\n            mx-2\n            grow\n            border-0\n            bg-transparent\n            outline-none\n            placeholder:text-gray-500\n            dark:placeholder:text-gray-300\n          "
              }
            ),
            currentRefinement && /* @__PURE__ */ jsx27(
              "button",
              {
                type: "button",
                onClick: () => refine(""),
                className: "\n              rounded-sm\n              border-0\n              bg-transparent\n              p-0\n              outline-none\n              transition\n              hover:opacity-70\n              focus:ring\n            ",
                children: /* @__PURE__ */ jsx27(CloseIcon, {})
              }
            )
          ]
        }
      )
    }
  );
};
var StateResults = ({
  searchState,
  searchResults,
  children
}) => {
  const content = searchState && searchResults && !searchResults.nbHits && searchResults.query.length > 0 && /* @__PURE__ */ jsxs16("span", { children: [
    "No results for ",
    /* @__PURE__ */ jsxs16("strong", { children: [
      '"',
      searchState.query,
      '"'
    ] }),
    "."
  ] });
  return /* @__PURE__ */ jsx27("div", { className: "mt-9", children: content || children });
};
var Hits = ({ hits, accentColor }) => {
  const transformItems = (items) => {
    const groupBy = items.reduce((acc, item) => {
      const list = acc[item.hierarchy.lvl0] || [];
      return {
        ...acc,
        [item.hierarchy.lvl0]: list.concat(item)
      };
    }, {});
    return Object.keys(groupBy).map((level) => ({
      items: groupBy[level],
      level
    }));
  };
  const transformIcon = (item) => {
    if (item.anchor) {
      return /* @__PURE__ */ jsx27(HashTagIcon, { className: "text-gray-500 hover:text-white dark:text-white" });
    }
    if (item.content) {
      return /* @__PURE__ */ jsx27(HamburgerIcon, { className: "text-gray-500 hover:text-white dark:text-white" });
    }
    return /* @__PURE__ */ jsx27(PageIcon, { className: "text-gray-500 hover:text-white dark:text-white" });
  };
  const groupedHits = transformItems(hits);
  return /* @__PURE__ */ jsx27(Fragment4, { children: groupedHits.map((hit) => /* @__PURE__ */ jsxs16("section", { style: { "--color": accentColor }, children: [
    /* @__PURE__ */ jsx27("h2", { className: "mb-4 mt-8 text-base font-semibold [color:var(--color)]", children: hit.level }),
    hit.items.map((subHit) => {
      let content;
      if (subHit.hierarchy[subHit.type] && subHit.type === "lvl1") {
        content = /* @__PURE__ */ jsxs16(Fragment4, { children: [
          /* @__PURE__ */ jsx27(Snippet, { hit: subHit, attribute: "hierarchy.lvl1" }),
          subHit.content ? /* @__PURE__ */ jsx27(Snippet, { tagName: "p", hit: subHit, attribute: "content" }) : /* @__PURE__ */ jsx27(Snippet, { tagName: "p", hit: subHit, attribute: "hierarchy.lvl1" })
        ] });
      } else if (subHit.hierarchy[subHit.type] && ["lvl2", "lvl3", "lvl4", "lvl5", "lvl6"].includes(subHit.type)) {
        content = /* @__PURE__ */ jsxs16(Fragment4, { children: [
          /* @__PURE__ */ jsx27(Snippet, { hit: subHit, attribute: `hierarchy.${subHit.type}` }),
          /* @__PURE__ */ jsx27(Snippet, { tagName: "p", hit: subHit, attribute: "hierarchy.lvl1" })
        ] });
      } else if (subHit.type === "content") {
        content = /* @__PURE__ */ jsxs16(Fragment4, { children: [
          /* @__PURE__ */ jsx27(Snippet, { hit: subHit, attribute: "content" }),
          /* @__PURE__ */ jsx27(Snippet, { tagName: "p", hit: subHit, attribute: "hierarchy.lvl1" })
        ] });
      }
      return /* @__PURE__ */ jsxs16(
        Anchor,
        {
          href: subHit.url,
          sameSite: typeof window === "object" && subHit.url.startsWith(window.location.origin),
          className: "\n                  mb-2\n                  flex\n                  items-center\n                  gap-x-3\n                  break-all\n                  rounded-md\n                  bg-gray-100\n                  px-5\n                  py-3\n                  last:mb-0\n                  hover:![background:var(--color)]\n                  dark:bg-neutral-800\n                ",
          children: [
            transformIcon(subHit),
            /* @__PURE__ */ jsx27("div", { children: content })
          ]
        },
        subHit.url
      );
    })
  ] }, hit.level)) });
};
var SearchBar = ({ version = "v1", ...restProps }) => version === "v1" ? /* @__PURE__ */ jsx27(SearchBarComponent, { ...restProps }) : /* @__PURE__ */ jsx27(SearchBarV2, { ...restProps });
var SearchBarComponent = ({
  accentColor,
  title,
  placeholder,
  isFull,
  onHandleModal,
  className
}) => {
  const [modalOpen, setModalOpen] = useState2(false);
  const handleModal = useCallback(
    (state) => {
      toggleLockBodyScroll(state);
      setModalOpen(state);
      onHandleModal?.(state);
    },
    [onHandleModal]
  );
  const CustomSearchBox = connectSearchBox(SearchBox);
  const CustomStateResults = connectStateResults(StateResults);
  const CustomHits = connectHits(Hits);
  return /* @__PURE__ */ jsxs16(Fragment4, { children: [
    /* @__PURE__ */ jsxs16(
      "button",
      {
        className: clsx9(
          `
        flex
        items-center
        border-transparent
        bg-transparent
        p-0
        text-xs
        font-medium
        text-gray-500
        outline-none
        transition
        focus:ring
        md:ml-3
        md:rounded-md
        md:border-2
        md:bg-gray-100
        md:py-1
        md:pl-1
        md:pr-8
        md:hover:[border-color:var(--accentColor)]
        md:dark:bg-neutral-800
        md:dark:text-gray-300
        `,
          isFull && "!md:p-2 !m-0 w-full",
          className
        ),
        style: { "--accentColor": accentColor },
        onClick: () => handleModal(true),
        children: [
          /* @__PURE__ */ jsx27(SearchIcon, { className: "h-6 w-6 md:mr-1 md:h-[18px] md:w-[18px]" }),
          /* @__PURE__ */ jsx27("span", { className: "hidden md:block", children: placeholder })
        ]
      }
    ),
    /* @__PURE__ */ jsx27(Modal, { title, visible: modalOpen, placement: "top", onCancel: () => handleModal(false), children: /* @__PURE__ */ jsxs16(
      InstantSearch,
      {
        indexName: algoliaConfig.searchIndex,
        searchClient,
        stalledSearchDelay: 500,
        children: [
          /* @__PURE__ */ jsx27(
            CustomSearchBox,
            {
              accentColor,
              placeholder,
              isModalOpen: modalOpen
            }
          ),
          /* @__PURE__ */ jsx27(CustomStateResults, { children: /* @__PURE__ */ jsx27(CustomHits, { accentColor }) })
        ]
      }
    ) })
  ] });
};

// src/components/header.tsx
import { Fragment as Fragment5, jsx as jsx28, jsxs as jsxs17 } from "react/jsx-runtime";
var Header = ({
  accentColor,
  activeLink,
  themeSwitch = true,
  transformLinks = (links) => links,
  search = true,
  className,
  sameSite,
  searchBarProps
}) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileNavOpen, setMobileNavOpen] = useState3(false);
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  const shouldUseMenus = useMemo(
    () => windowWidth && windowHeight && windowHeight > 400 && windowWidth > 800,
    [windowHeight, windowWidth]
  );
  const toggleNav = useCallback2(() => {
    setMobileNavOpen((prev) => !prev);
  }, []);
  const links = transformLinks([
    {
      label: "Blog",
      title: "Blog, yuzukicat",
      href: "https://kamisu66.com/blog"
    },
    {
      label: "Archive",
      title: "Archives, blog, yuzukicat",
      href: "https://kamisu66.com/archive"
    },
    {
      label: "Tag",
      title: "Tags, blog, yuzukicat",
      href: "https://kamisu66.com/tag"
    },
    {
      label: "Friend",
      title: "Friends, yuzukicat",
      href: "https:///kamisu66.com/friend"
    },
    {
      label: "About Me",
      title: "A cat knows human language",
      href: "https:///kamisu66.com/about"
    }
  ]);
  return /* @__PURE__ */ jsx28(
    "header",
    {
      className: clsx10(
        "bg-white py-2.5 dark:bg-[#111] md:py-3.5",
        !sameSite && "max-md:hidden",
        className
      ),
      children: /* @__PURE__ */ jsxs17(
        "div",
        {
          className: "\n          container\n          flex\n          max-w-[90rem]\n          items-center\n          justify-between\n          pl-[max(env(safe-area-inset-left),1.5rem)]\n          pr-[max(env(safe-area-inset-right),1.5rem)]\n        ",
          children: [
            /* @__PURE__ */ jsx28(
              "button",
              {
                className: "rounded-sm text-gray-500 outline-none transition hover:text-gray-400 focus-visible:ring dark:text-gray-200 dark:hover:text-gray-400 md:hidden",
                onClick: toggleNav,
                children: /* @__PURE__ */ jsx28(HamburgerIcon, {})
              }
            ),
            /* @__PURE__ */ jsx28("div", { className: "md:absolute" }),
            /* @__PURE__ */ jsx28(Root2, { asChild: true, children: /* @__PURE__ */ jsxs17(List, { children: [
              /* @__PURE__ */ jsx28(Viewport, { className: "absolute top-10 right-0 z-50" }),
              /* @__PURE__ */ jsxs17(Nav, { isOpen: mobileNavOpen, setOpen: setMobileNavOpen, className: "gap-2", children: [
                links.map(({ label, menu, ...link }) => {
                  const linkEl = /* @__PURE__ */ jsxs17(
                    Anchor,
                    {
                      onClick: sameSite && mobileNavOpen ? toggleNav : void 0,
                      ...link,
                      className: clsx10(
                        `mx-auto
                        flex
                        w-max
                        items-center
                        gap-2
                        p-1
                        text-base
                        hover:text-pink-600
                        dark:hover:text-gray-200
                        sm:text-lg
                        md:text-left
                        md:text-sm`,
                        activeLink && link.href.includes(activeLink) ? "text-pink-800 dark:text-gray-200" : "text-pink-600 dark:text-gray-400"
                      ),
                      style: { "--accentColor": accentColor },
                      sameSite,
                      children: [
                        label,
                        menu && /* @__PURE__ */ jsx28(
                          CaretIcon,
                          {
                            className: "\n                          transition-transform\n                          duration-200\n                          [[data-state=open]_>_&]:rotate-180\n                        "
                          }
                        )
                      ]
                    }
                  );
                  return /* @__PURE__ */ jsx28(Item, { value: label, children: menu && shouldUseMenus ? /* @__PURE__ */ jsxs17(Fragment5, { children: [
                    /* @__PURE__ */ jsx28(Trigger, { asChild: true, children: linkEl }),
                    /* @__PURE__ */ jsx28(Content, { asChild: true, children: menu })
                  ] }) : /* @__PURE__ */ jsx28(Link, { asChild: true, children: linkEl }) }, label);
                }),
                search && /* @__PURE__ */ jsx28(
                  SearchBar,
                  {
                    accentColor,
                    title: "Search docs",
                    placeholder: "Search\u2026",
                    className: "hidden md:flex",
                    ...searchBarProps
                  }
                ),
                themeSwitch && /* @__PURE__ */ jsx28(
                  "button",
                  {
                    onClick: () => setTheme(resolvedTheme === "light" ? "dark" : "light"),
                    className: "mr-1 self-center rounded-sm p-2 outline-none focus-visible:ring",
                    children: /* @__PURE__ */ jsx28(MoonIcon, { className: "fill-transparent stroke-pink-500 dark:fill-gray-100 dark:stroke-gray-100" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx28(Indicator, { className: "absolute top-9 z-50 flex h-2.5 justify-center", children: /* @__PURE__ */ jsx28("div", { className: "h-3 w-3 rotate-45 rounded-t-sm bg-white dark:bg-neutral-800" }) })
            ] }) }),
            search ? /* @__PURE__ */ jsx28(
              SearchBar,
              {
                accentColor,
                title: "Search docs",
                placeholder: "Search\u2026",
                className: "md:hidden",
                ...searchBarProps
              }
            ) : /* @__PURE__ */ jsx28("span", { className: "md:absolute" })
          ]
        }
      )
    }
  );
};

// src/components/hero-gradient.tsx
import { isValidElement } from "react";
import clsx11 from "clsx";
import { jsx as jsx29, jsxs as jsxs18 } from "react/jsx-runtime";
var Shadow = ({ className }) => {
  return /* @__PURE__ */ jsx29(
    "span",
    {
      className: clsx11(
        "absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
        className
      )
    }
  );
};
var HeroGradient = ({
  title,
  description,
  link,
  version,
  colors = [],
  image,
  className
}) => {
  return /* @__PURE__ */ jsx29("section", { className: clsx11("bg-white dark:bg-[#111] md:py-14", className), children: /* @__PURE__ */ jsxs18(
    "div",
    {
      className: clsx11(
        "container relative z-0 flex max-w-[90rem] items-center gap-6 px-6 md:px-14",
        image ? "py-6" : "py-14"
      ),
      children: [
        /* @__PURE__ */ jsxs18(
          "div",
          {
            className: "absolute inset-0 z-[-1] overflow-hidden bg-black dark:bg-[#111] md:mx-6 md:rounded-3xl",
            style: { "--colorA": colors[0], "--colorB": colors[1] },
            children: [
              /* @__PURE__ */ jsx29(Shadow, { className: "-top-24 -left-10 [background:var(--colorA)]" }),
              /* @__PURE__ */ jsx29(Shadow, { className: "-top-5 hidden [background:var(--colorA)] md:right-[-28rem] md:block" }),
              /* @__PURE__ */ jsx29(Shadow, { className: "right-[-22rem] bottom-[-31rem] [background:var(--colorB)]" }),
              /* @__PURE__ */ jsx29(Shadow, { className: "-left-12 bottom-[-37rem] hidden [background:var(--colorB)] md:block" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs18("div", { className: clsx11("grow md:pl-6"), children: [
          /* @__PURE__ */ jsx29("h1", { className: "max-w-lg text-2xl font-bold text-white md:text-3xl", children: title }),
          /* @__PURE__ */ jsx29("p", { className: "mt-2.5 mb-4 max-w-md text-base text-white opacity-70 md:text-lg", children: description }),
          /* @__PURE__ */ jsxs18("div", { className: "flex items-center gap-x-3 text-xs md:mt-9", children: [
            link && toArray(link).map((link2) => /* @__PURE__ */ jsx29(
              Button,
              {
                variant: "secondary",
                ...link2,
                className: clsx11("!px-8", link2.className)
              },
              link2.href
            )),
            version && isValidElement(version) ? version : /* @__PURE__ */ jsx29("span", { className: "text-gray-50 opacity-60", children: version })
          ] })
        ] }),
        image && /* @__PURE__ */ jsx29(
          Image,
          {
            ...image,
            className: clsx11(
              "hidden w-full max-w-sm select-none sm:max-w-md md:block",
              image.className
            )
          }
        )
      ]
    }
  ) });
};
function toArray(input) {
  return Array.isArray(input) ? input : [input];
}

// src/components/hero-illustration.tsx
import clsx12 from "clsx";
import { jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
var HeroIllustration = ({
  title,
  description,
  link,
  image,
  flipped,
  className
}) => /* @__PURE__ */ jsx30("section", { className: clsx12("bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs19(
  "div",
  {
    className: clsx12(
      `
      container
      flex
      flex-wrap
      items-center
      gap-8
      py-8
      md:flex-nowrap
      md:justify-around`,
      flipped && "md:flex-row-reverse"
    ),
    children: [
      /* @__PURE__ */ jsx30(Image, { ...image, className: clsx12("w-full max-w-md md:w-2/5", image.className) }),
      /* @__PURE__ */ jsxs19("div", { className: "flex flex-col items-start gap-3", children: [
        /* @__PURE__ */ jsx30("h2", { className: "max-w-sm text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
        /* @__PURE__ */ jsx30("p", { className: "max-w-md text-base text-gray-500 dark:text-gray-400", children: description }),
        link && /* @__PURE__ */ jsx30(Button, { ...link })
      ] })
    ]
  }
) });

// src/components/hero-marketplace.tsx
import clsx13 from "clsx";
import CubeBL from "./marketplace-cube-bl-42X7Y3KO.png";
import CubeBR from "./marketplace-cube-br-Y5MZRDIL.png";
import CubeTL from "./marketplace-cube-tl-PEJKW6RX.png";
import CubeTR from "./marketplace-cube-tr-O5XQ6Q4N.png";
import IllustrationDesktop from "./marketplace-desktop-7XUR54PR.png";
import IllustrationMobile from "./marketplace-mobile-DI462WKF.png";
import { jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
var Shadow2 = ({ className }) => {
  return /* @__PURE__ */ jsx31(
    "span",
    {
      className: clsx13(
        `absolute
        h-[750px]
        w-[750px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        opacity-40
        blur-3xl`,
        className
      )
    }
  );
};
var Cube = ({ className, src }) => {
  return /* @__PURE__ */ jsx31(
    Image,
    {
      className: clsx13("absolute -translate-x-1/2 -translate-y-1/2", className),
      src,
      alt: "Cube"
    }
  );
};
var HeroMarketplace = ({
  title,
  description,
  link,
  className,
  image
}) => /* @__PURE__ */ jsx31("section", { className: clsx13("overflow-hidden bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs20("div", { className: "relative", children: [
  /* @__PURE__ */ jsxs20(
    "div",
    {
      className: "\n         absolute\n         inset-0\n         overflow-hidden\n         bg-black\n         dark:bg-[#111]\n        ",
      style: { "--colorA": "#ff34ae", "--colorB": "#1cc8ee" },
      children: [
        /* @__PURE__ */ jsx31(Shadow2, { className: "top-[-175px] left-[-30px] [background:var(--colorA)] md:top-[-150px] md:left-[-60px]" }),
        /* @__PURE__ */ jsx31(Shadow2, { className: "right-[-700px] bottom-[-800px] hidden [background:var(--colorA)] md:block" }),
        /* @__PURE__ */ jsx31(Shadow2, { className: "left-[-30px] bottom-[-600px] [background:var(--colorB)] md:left-5 md:bottom-[-700px]" })
      ]
    }
  ),
  /* @__PURE__ */ jsxs20("div", { children: [
    /* @__PURE__ */ jsx31(Cube, { src: CubeTL, className: "-top-2.5 left-6 md:top-6 md:left-10" }),
    /* @__PURE__ */ jsx31(Cube, { src: CubeTR, className: "-bottom-60 -right-52 top-auto md:top-20 md:bottom-auto" }),
    /* @__PURE__ */ jsx31(Cube, { src: CubeBR, className: "-right-20 -bottom-32 hidden md:block" }),
    /* @__PURE__ */ jsx31(Cube, { src: CubeBL, className: "-bottom-40 left-10 hidden md:block" })
  ] }),
  /* @__PURE__ */ jsxs20("div", { className: "container mt-16 mb-28 flex max-w-[90rem] flex-wrap items-center pt-20 pb-1 md:mt-7 md:mb-20 md:flex-nowrap md:pt-0", children: [
    /* @__PURE__ */ jsxs20(
      "picture",
      {
        className: "\n            z-[1]\n            order-last\n            -ml-8\n            -mb-20\n            mt-5\n            w-full\n            max-w-md\n            md:order-first\n            md:-ml-12\n            md:-mb-24\n            md:mt-0\n            md:w-auto\n            md:max-w-none\n            lg:-ml-14\n            lg:w-2/3\n          ",
        ...image,
        children: [
          /* @__PURE__ */ jsx31("source", { media: "(min-width:768px)", srcSet: IllustrationDesktop }),
          /* @__PURE__ */ jsx31(Image, { className: "mx-auto w-auto", src: IllustrationMobile, alt: "Products List" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs20("div", { className: "relative z-[1]", children: [
      /* @__PURE__ */ jsx31("h2", { className: "mb-2.5 max-w-lg text-2xl font-bold text-white dark:text-gray-50 md:text-3xl", children: title }),
      /* @__PURE__ */ jsx31("p", { className: "max-w-lg text-base text-gray-300 opacity-70", children: description }),
      link && /* @__PURE__ */ jsx31("div", { className: "relative z-[1] mt-4 hidden items-center text-xs md:mt-9 md:flex", children: /* @__PURE__ */ jsx31(Button, { ...link }) })
    ] })
  ] })
] }) });

// src/components/hero-video.tsx
import { useRouter } from "next/router";
import clsx14 from "clsx";
import { useMounted } from "nextra/hooks";
import ReactPlayer from "react-player/lazy";
import { jsx as jsx32, jsxs as jsxs21 } from "react/jsx-runtime";
var HeroVideo = ({
  title,
  description,
  link,
  video,
  flipped,
  className,
  videoProps
}) => {
  const { basePath } = useRouter();
  const mounted = useMounted();
  return /* @__PURE__ */ jsx32("section", { className: clsx14("bg-gray-100 dark:bg-neutral-800", className), children: /* @__PURE__ */ jsxs21(
    "div",
    {
      className: clsx14(
        `
      container
      flex
      flex-wrap
      py-8
      md:flex-nowrap
      md:items-center
      md:justify-center
      `,
        flipped && "md:flex-row-reverse"
      ),
      children: [
        /* @__PURE__ */ jsxs21("div", { className: "mt-8 mb-16 md:my-0", children: [
          /* @__PURE__ */ jsx32("h2", { className: "m-0 max-w-sm text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
          /* @__PURE__ */ jsx32("p", { className: "mt-1 mb-3 max-w-md text-base text-gray-500 dark:text-gray-400", children: description }),
          link && /* @__PURE__ */ jsx32(
            Anchor,
            {
              ...link,
              className: clsx14(
                `
              mt-auto
              w-max
              text-sm
              text-cyan-400
              hover:text-cyan-300`,
                link.className
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx32(
          "div",
          {
            className: clsx14(
              `
            h-72
            w-full
            overflow-hidden
            rounded-xl
            bg-white
            shadow-xl
            sm:h-96
            md:h-72
            md:w-3/5
            lg:h-96
            `,
              flipped ? "md:mr-8" : "md:ml-8"
            ),
            children: mounted && /* @__PURE__ */ jsx32(
              ReactPlayer,
              {
                url: video.src,
                light: video.placeholder.startsWith("/") ? basePath + video.placeholder : video.placeholder,
                controls: true,
                height: "100%",
                width: "100%",
                config: {
                  youtube: {
                    playerVars: {
                      autoplay: 1
                    }
                  }
                },
                ...videoProps
              }
            )
          }
        )
      ]
    }
  ) });
};

// src/components/info-list.tsx
import clsx15 from "clsx";
import { jsx as jsx33, jsxs as jsxs22 } from "react/jsx-runtime";
var InfoList = ({ title, items, className }) => /* @__PURE__ */ jsx33("section", { className: clsx15("bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs22("div", { className: "container max-w-[90rem] py-12", children: [
  title && /* @__PURE__ */ jsx33("h2", { className: "mt-0 mb-4 text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
  /* @__PURE__ */ jsx33("div", { className: "flex flex-wrap", children: items.map((item, index) => /* @__PURE__ */ jsxs22(
    "section",
    {
      className: "\n              mb-9\n              box-border\n              flex\n              w-full\n              max-w-lg\n              flex-col\n              pr-10\n              last:mb-0\n              md:w-1/2\n              lg:mb-0\n              lg:w-1/3\n          ",
      children: [
        /* @__PURE__ */ jsx33("h3", { className: "m-0 text-base font-semibold text-black dark:text-gray-50", children: item.title }),
        /* @__PURE__ */ jsx33("p", { className: "mt-2 mb-4 grow text-sm text-gray-500 dark:text-gray-400", children: item.description }),
        item.link && /* @__PURE__ */ jsx33(
          Anchor,
          {
            className: "\n                  mt-auto\n                  w-max\n                  text-sm\n                  text-cyan-400\n                  hover:text-cyan-300\n                ",
            ...item.link
          }
        )
      ]
    },
    `info-${index}`
  )) })
] }) });

// src/components/marketplace-list.tsx
import { useEffect as useEffect6, useMemo as useMemo2, useState as useState4 } from "react";
import clsx16 from "clsx";
import ReactPaginate from "react-paginate";

// src/components/tag.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
var Tag = ({
  children,
  onClick
}) => {
  return /* @__PURE__ */ jsx34(
    "button",
    {
      className: "mr-2 mb-2 inline cursor-pointer rounded-md border-0 bg-gray-200 px-2 py-1 text-xs text-gray-500 outline-none",
      onClick,
      children
    }
  );
};
var TagsContainer = ({ children }) => {
  return /* @__PURE__ */ jsx34("div", { className: "flex flex-wrap py-2", children });
};

// src/components/marketplace-list.tsx
import { Fragment as Fragment6, jsx as jsx35, jsxs as jsxs23 } from "react/jsx-runtime";
var formatDate = (value) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const date = new Date(value);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
var TableBody = ({ items = [] }) => /* @__PURE__ */ jsx35("tbody", { children: items.map((item) => /* @__PURE__ */ jsxs23(
  "tr",
  {
    className: "border-0 border-b border-solid border-gray-300 text-xs font-medium text-gray-500 last:border-0 dark:border-gray-800 dark:text-gray-400",
    children: [
      /* @__PURE__ */ jsx35("td", { className: "w-14 py-4 pr-2 align-top md:w-20", children: item.image && /* @__PURE__ */ jsx35(Image, { ...item.image }) }),
      /* @__PURE__ */ jsx35("td", { className: "py-4 px-2", children: /* @__PURE__ */ jsxs23(
        Anchor,
        {
          ...item.link,
          className: clsx16(
            "text-gray-500 duration-150 ease-in-out hover:opacity-75 dark:text-gray-400",
            item.link.className
          ),
          children: [
            /* @__PURE__ */ jsx35("h3", { className: "m-0 text-base font-bold text-black line-clamp-2 dark:text-white md:text-lg", children: item.title }),
            /* @__PURE__ */ jsx35("div", { className: "line-clamp-3", children: item.description }),
            item.tags && item.tags.length > 0 && /* @__PURE__ */ jsx35(TagsContainer, { children: item.tags.map((tagName) => /* @__PURE__ */ jsx35(Tag, { children: tagName }, tagName)) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx35("td", { className: "hidden py-4 px-2 md:table-cell", children: formatDate(item.update) }),
      /* @__PURE__ */ jsx35("td", { className: "py-4 pl-2", children: /* @__PURE__ */ jsx35(
        Anchor,
        {
          ...item.link,
          className: clsx16(
            `
              inline-block
              rounded-lg
              bg-gray-200
              p-1.5
              text-gray-800
              hover:invert
              dark:bg-gray-700
              dark:text-white
              md:p-2.5`,
            item.link.className
          ),
          children: /* @__PURE__ */ jsx35(CaretSlimIcon, { className: "h-5 w-5 -rotate-90" })
        }
      ) })
    ]
  },
  item.title
)) });
var MarketplaceList = ({
  title,
  placeholder,
  items,
  pagination,
  className
}) => {
  const [currentPage, setCurrentPage] = useState4(0);
  const pageSize = pagination || 5;
  const pageCount = items ? Math.ceil(items.length / pageSize) : 1;
  useEffect6(() => {
    setCurrentPage(0);
  }, [items]);
  const pages = useMemo2(() => {
    const itemsCopy = [...items];
    const pagesData = [];
    while (itemsCopy.length > 0) {
      pagesData.push(itemsCopy.splice(0, pageSize));
    }
    return pagesData;
  }, [items, pageSize]);
  return /* @__PURE__ */ jsxs23("section", { className: clsx16("w-full bg-white dark:bg-[#111]", className), children: [
    title && /* @__PURE__ */ jsx35("h2", { className: "mt-0 mb-4 text-xl font-bold text-black dark:text-gray-50 md:text-2xl", children: title }),
    pages[currentPage]?.length ? /* @__PURE__ */ jsxs23(Fragment6, { children: [
      /* @__PURE__ */ jsxs23("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ jsx35("thead", { className: "whitespace-nowrap px-2 text-left text-xs font-semibold uppercase text-gray-300 dark:text-gray-600", children: /* @__PURE__ */ jsxs23("tr", { className: "border-0", children: [
          /* @__PURE__ */ jsx35("th", { className: "px-2" }),
          /* @__PURE__ */ jsx35("th", { className: "px-2", children: "Name" }),
          /* @__PURE__ */ jsx35("th", { className: "hidden px-2 md:table-cell", children: "Last Update" }),
          /* @__PURE__ */ jsx35("th", { className: "px-2" })
        ] }) }),
        /* @__PURE__ */ jsx35(TableBody, { items: pages[currentPage] })
      ] }),
      pageCount > 1 && /* @__PURE__ */ jsx35(
        ReactPaginate,
        {
          pageCount,
          forcePage: currentPage,
          pageRangeDisplayed: 3,
          marginPagesDisplayed: 1,
          onPageChange: (page) => setCurrentPage(page.selected),
          containerClassName: "flex justify-center gap-x-2",
          previousClassName: "hidden",
          nextClassName: "hidden",
          pageLinkClassName: "\n                text-sm\n                bg-gray-200\n                dark:text-gray-300\n                dark:bg-gray-700\n                rounded-lg\n                select-none\n                hover:opacity-70\n                transition\n                px-3.5\n                py-2\n              ",
          activeLinkClassName: "invert"
        }
      )
    ] }) : /* @__PURE__ */ jsx35("div", { className: "flex h-24 w-full items-center justify-center rounded-lg bg-gray-100 text-black dark:bg-gray-700 dark:text-gray-300", children: placeholder })
  ] });
};

// src/components/marketplace-search.tsx
import { isValidElement as isValidElement2, useCallback as useCallback3, useMemo as useMemo3, useState as useState5 } from "react";
import clsx17 from "clsx";
import fuzzy from "fuzzy";
import { Fragment as Fragment7, jsx as jsx36, jsxs as jsxs24 } from "react/jsx-runtime";
var renderQueryPlaceholder = (placeholder, query) => {
  if (!query || isValidElement2(placeholder)) {
    return placeholder;
  }
  const subStrings = placeholder.split("{query}");
  return /* @__PURE__ */ jsxs24(Fragment7, { children: [
    subStrings[0],
    " ",
    /* @__PURE__ */ jsxs24("strong", { children: [
      '"',
      query,
      '"'
    ] }),
    " ",
    subStrings[1]
  ] });
};
var MarketplaceSearch = ({
  title,
  tagsFilter,
  placeholder,
  primaryList,
  secondaryList,
  queryList,
  className
}) => {
  const [query, setQuery] = useState5("");
  const handleChange = useCallback3((e) => {
    setQuery(e.currentTarget.value);
  }, []);
  const items = useMemo3(() => {
    if (query && queryList) {
      if (query.startsWith("#")) {
        return queryList.items.filter(
          (item) => query.split(/\s+/).map((e) => e.replace("#", "")).every((e) => item.tags?.includes(e))
        );
      }
      const matchedResults = fuzzy.filter(
        // Removes all special characters from the query string for better fuzzy matching
        query.replace(/[^\w\s]/gi, ""),
        // Mapping the queryList items into a list of strings including the titles
        queryList.items.map((e) => e.title)
      ).map((e) => e.original);
      return queryList.items.filter((e) => matchedResults.includes(e.title));
    }
  }, [query, queryList]);
  return /* @__PURE__ */ jsx36("section", { className: clsx17("bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs24("div", { className: "container max-w-[90rem] py-12", children: [
    /* @__PURE__ */ jsx36("h2", { className: "mt-0 mb-4 text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
    tagsFilter && /* @__PURE__ */ jsx36(TagsContainer, { children: tagsFilter.map((tagName) => /* @__PURE__ */ jsx36(Tag, { onClick: () => setQuery(`#${tagName}`), children: tagName }, tagName)) }),
    /* @__PURE__ */ jsxs24("div", { className: "flex border-0 border-b border-solid border-gray-300 pb-3 dark:border-gray-800", children: [
      /* @__PURE__ */ jsx36(SearchIcon, { className: "text-gray-500 dark:text-white" }),
      /* @__PURE__ */ jsx36(
        "input",
        {
          value: query,
          type: "search",
          placeholder,
          onChange: handleChange,
          className: "ml-1.5 mt-0.5 w-full border-0 bg-white text-sm font-medium text-black outline-none dark:bg-[#111] dark:text-gray-50"
        }
      )
    ] }),
    /* @__PURE__ */ jsx36("div", { className: "flex flex-wrap gap-10 py-6 lg:flex-nowrap", children: items && queryList ? /* @__PURE__ */ jsx36(
      MarketplaceList,
      {
        title: queryList.title,
        items,
        placeholder: renderQueryPlaceholder(queryList.placeholder, query),
        pagination: queryList.pagination
      }
    ) : /* @__PURE__ */ jsxs24(Fragment7, { children: [
      /* @__PURE__ */ jsx36(MarketplaceList, { ...primaryList }),
      secondaryList && /* @__PURE__ */ jsx36(MarketplaceList, { ...secondaryList })
    ] }) })
  ] }) });
};

// src/components/mdx-components.tsx
import { useRouter as useRouter2 } from "next/router";
import clsx18 from "clsx";
import { jsx as jsx37, jsxs as jsxs25 } from "react/jsx-runtime";
var mdxComponents = {
  source({ src, type, ...props }) {
    if (!src) {
      throw new Error("Must provide `src` prop");
    }
    let ext = src.replace(/.*\./, "");
    if (ext === "mov") {
      ext = "quicktime";
    }
    return /* @__PURE__ */ jsx37("source", { ...props, src, type: type || `video/${ext}` });
  },
  video: ({ className, children, ...props }) => /* @__PURE__ */ jsxs25("video", { className: clsx18("mt-6 w-full", className), autoPlay: true, loop: true, muted: true, ...props, children: [
    children,
    "Your browser does not support HTML video."
  ] }),
  iframe: ({ className, ...props }) => /* @__PURE__ */ jsx37(
    "iframe",
    {
      className: clsx18("mt-6 aspect-video w-full", className),
      title: "YouTube Video Player",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      ...props
    }
  ),
  img({ src = "", alt, ...props }) {
    const { basePath } = useRouter2();
    if (!src.startsWith("http")) {
      console.warn("Image", src, "doesn't use NextImage");
    }
    return /* @__PURE__ */ jsx37("img", { ...props, src: src.startsWith("/") ? basePath + src : src, alt });
  }
};

// src/components/newsletter.tsx
import { useState as useState6 } from "react";
import clsx19 from "clsx";

// src/helpers/email.ts
var regex = "[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*";
function emailRegex({ exact }) {
  return exact ? new RegExp(`^${regex}$`) : new RegExp(regex, "g");
}
function isEmail(value) {
  return emailRegex({ exact: true }).test(value);
}

// src/components/newsletter.tsx
import { jsx as jsx38, jsxs as jsxs26 } from "react/jsx-runtime";
var Newsletter = ({ onNewsletterSubmit }) => {
  const [inputValue, setInputValue] = useState6("");
  const [inputError, setInputError] = useState6(false);
  return /* @__PURE__ */ jsxs26(
    "form",
    {
      className: clsx19(
        "flex items-center gap-x-3 rounded-md border-2 bg-gray-100 px-3 py-2 dark:bg-neutral-800",
        inputError ? "border-red-500 text-red-500 dark:border-red-400 dark:text-red-400" : "border-gray-100 text-black dark:border-gray-800 dark:text-gray-200"
      ),
      onSubmit: (e) => {
        e.preventDefault();
        if (!isEmail(inputValue)) {
          setInputError(true);
          return;
        }
        if (inputError) {
          setInputError(false);
        }
        onNewsletterSubmit(e, inputValue);
      },
      children: [
        /* @__PURE__ */ jsx38(MailIcon, { className: "w-5 text-gray-500 dark:text-gray-100" }),
        /* @__PURE__ */ jsx38(
          "input",
          {
            required: true,
            type: "email",
            placeholder: "your@email.com",
            className: "w-full bg-transparent text-xs outline-none placeholder:text-gray-400",
            onChange: (e) => {
              const { value } = e.target;
              setInputValue(value);
              if (value === "") {
                setInputError(false);
              }
            }
          }
        ),
        /* @__PURE__ */ jsx38(
          "button",
          {
            type: "submit",
            className: "\n          flex-none\n          rounded-md\n          bg-gray-300\n          py-0.5\n          px-1\n          transition\n          hover:outline-none\n          hover:invert\n          dark:bg-gray-700\n          lg:p-2\n        ",
            children: /* @__PURE__ */ jsx38(ArrowUpRightIcon, { className: "w-5" })
          }
        )
      ]
    }
  );
};

// src/components/npm-badge.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
var NPMBadge = ({ name }) => {
  const encodedPackage = encodeURIComponent(name);
  return /* @__PURE__ */ jsx39(Anchor, { href: `https://npmjs.com/package/${encodedPackage}`, newWindow: true, children: /* @__PURE__ */ jsx39(
    "img",
    {
      src: `https://badge.fury.io/js/${encodedPackage}.svg`,
      alt: "npm version",
      className: "h-6"
    }
  ) });
};

// src/components/package-cmd.tsx
import { useMemo as useMemo4 } from "react";
import { Pre } from "nextra/components";
import { Tab, Tabs } from "nextra-theme-docs";
import { jsx as jsx40 } from "react/jsx-runtime";
var PACKAGE_MANAGERS = ["yarn", "npm", "pnpm"];
var Add = {
  yarn: "yarn add",
  npm: "npm install",
  pnpm: "pnpm add"
};
var Run = {
  yarn: "yarn",
  npm: "npm run",
  pnpm: "pnpm"
};
var Install = {
  yarn: "yarn",
  npm: "npm install",
  pnpm: "pnpm install"
};
var Init = {
  yarn: "yarn init --yes",
  npm: "npm init --yes",
  pnpm: "pnpm init"
};
var Global = {
  yarn: "yarn global add",
  npm: "npm install --global",
  pnpm: "pnpm add --global"
};
var PackageCmd = ({ packages }) => {
  const commands = useMemo4(
    () => PACKAGE_MANAGERS.map(
      (pkgManager) => packages.map((pkg) => typeof pkg === "string" ? { name: pkg, cmd: "add" } : pkg).map((pkg) => {
        switch (pkg.cmd) {
          case "run":
            return `${pkgManager === "npm" && pkg.isNpx ? "npx" : Run[pkgManager]} ${pkg.name}`;
          case "install":
            return `${Install[pkgManager]}${pkg.name ? ` ${pkg.name}` : ""}`;
          case "init":
            return Init[pkgManager];
          default:
            return `${pkg.isGlobal ? Global[pkgManager] : Add[pkgManager]} ${pkg.name}`;
        }
      }).join("\n")
    ),
    [packages]
  );
  return /* @__PURE__ */ jsx40(Tabs, { items: PACKAGE_MANAGERS, children: PACKAGE_MANAGERS.map((pkgManager, index) => /* @__PURE__ */ jsx40(Tab, { children: /* @__PURE__ */ jsx40(Pre, { filename: "Terminal", hasCopyCode: true, "data-language": "sh", "data-theme": "default", children: /* @__PURE__ */ jsx40("code", { children: /* @__PURE__ */ jsx40("span", { className: "line", children: commands[index] }) }) }) }, pkgManager)) });
};

// src/define-config.tsx
import { useRouter as useRouter3 } from "next/router";
import { Navbar, useConfig } from "nextra-theme-docs";
import { Fragment as Fragment8, jsx as jsx41, jsxs as jsxs27 } from "react/jsx-runtime";
function defineConfig({
  siteName: originalSiteName,
  ...config
}) {
  if (!originalSiteName) {
    throw new Error('Missing required "siteName" property');
  }
  if (!config.docsRepositoryBase) {
    throw new Error('Missing required "docsRepositoryBase" property');
  }
  const url = new URL(config.docsRepositoryBase);
  const [, org, repoName] = url.pathname.split("/");
  const product = PRODUCTS[originalSiteName];
  const siteName = product ? `${["ANGULAR", "KITQL"].includes(originalSiteName) ? "" : "GraphQL "}${product.name}` : originalSiteName;
  const siteUrl = process.env.SITE_URL;
  return {
    footer: {
      component: /* @__PURE__ */ jsx41(FooterExtended, {})
    },
    navbar: {
      component: (props) => /* @__PURE__ */ jsxs27(Fragment8, { children: [
        /* @__PURE__ */ jsx41(Header, { accentColor: "#1cc8ee", searchBarProps: { version: "v2" } }),
        /* @__PURE__ */ jsx41(Navbar, { ...props })
      ] })
    },
    search: {
      component: null
    },
    sidebar: {
      defaultMenuCollapseLevel: 1,
      toggleButton: true
    },
    project: {
      link: `${url.origin}/${org}/${repoName}`
      // GitHub link in the navbar
    },
    head: null,
    logo: product?.logo && /* @__PURE__ */ jsxs27(Fragment8, { children: [
      /* @__PURE__ */ jsx41(product.logo, { className: "mr-1.5 h-9 w-9" }),
      /* @__PURE__ */ jsxs27("div", { children: [
        /* @__PURE__ */ jsx41("h1", { className: "text-sm font-medium", children: siteName }),
        /* @__PURE__ */ jsx41("h2", { className: "hidden text-xs sm:block", children: product.title })
      ] })
    ] }),
    ...config,
    components: {
      ...mdxComponents,
      ...config.components
    },
    useNextSeoProps() {
      const { frontMatter, title } = useConfig();
      const { asPath } = useRouter3();
      const nextSeoProps = config.useNextSeoProps?.();
      return {
        titleTemplate: `%s \u2013 ${siteName}`,
        description: frontMatter.description || `${siteName} Documentation`,
        twitter: {
          cardType: "summary_large_image",
          site: "https://kamisu66.com",
          handle: "@Nougatshepard"
        },
        canonical: frontMatter.canonical || siteUrl && `${siteUrl}${asPath}`,
        openGraph: {
          siteName,
          images: [
            {
              url: frontMatter.image || `https://og-image.kamisu66.com/?product=${originalSiteName}&title=${encodeURI(
                title
              )}`,
              alt: frontMatter.description || title
            }
          ]
        },
        ...nextSeoProps,
        additionalMetaTags: [
          { content: siteName, name: "apple-mobile-web-app-title" },
          { content: siteName, name: "application-name" },
          ...nextSeoProps?.additionalMetaTags || []
        ]
      };
    }
  };
}

// src/mermaid.tsx
import { useEffect as useEffect7, useId, useState as useState7 } from "react";
import mermaid from "mermaid";
import { useTheme as useTheme2 } from "nextra-theme-docs";
import { jsx as jsx42 } from "react/jsx-runtime";
var initialized = false;
function Mermaid({ chart }) {
  const { resolvedTheme } = useTheme2();
  const id = useId();
  const [svg, setSvg] = useState7("");
  useEffect7(() => {
    if (!initialized) {
      initialized = true;
      mermaid.initialize({
        fontFamily: "inherit"
      });
    }
    const isDark = resolvedTheme === "dark";
    const theme = JSON.stringify({
      theme: "base",
      themeVariables: {
        fontSize: "1.125rem",
        // text-lg
        lineColor: isDark ? "white" : "black",
        primaryColor: isDark ? "#1e293b" : "#cbd5e1",
        // slate-300
        primaryTextColor: isDark ? "white" : "black",
        primaryBorderColor: isDark ? "#cbd5e1" : "#1e293b",
        // slate-800
        secondaryColor: isDark ? "#475569" : "#f1f5f9",
        // slate-100
        secondaryBorderColor: isDark ? "#f1f5f9" : "#475569",
        // slate-600
        tertiaryColor: isDark ? "#475569" : "#f1f5f9",
        // slate-100
        tertiaryBorderColor: isDark ? "#f1f5f9" : "#475569"
        // slate-600
      }
    });
    mermaid.render(
      id.replace(/[^a-zA-Z]+/g, ""),
      // strip special chars from useId
      `%%{init:${theme}}%%
${chart}`
      // apply theme and supply chart
    ).then(({ svg: svg2 }) => {
      setSvg(svg2);
    }).catch((error) => {
      console.error("Error while rendering mermaid", error);
    });
  }, [resolvedTheme, id, chart]);
  return /* @__PURE__ */ jsx42("div", { className: "mt-6 flex justify-center", dangerouslySetInnerHTML: { __html: svg } });
}

// src/npm.ts
import semver from "semver";
var cache = {};
function withoutStartingSlash(v) {
  if (v === "/")
    return v;
  if (v.startsWith("/"))
    return v.slice(1, v.length);
  return v;
}
function withoutTrailingSlash(v) {
  if (v === "/")
    return v;
  if (v.endsWith("/"))
    return v.slice(0, v.length - 1);
  return v;
}
function withStartingSlash(v) {
  if (v.startsWith("/"))
    return v;
  return `/${v}`;
}
async function tryRemoteReadme(repo, path) {
  const fetchPath = `https://raw.githubusercontent.com/${withoutStartingSlash(
    withoutTrailingSlash(repo)
  )}/HEAD${withStartingSlash(path)}`;
  try {
    const response = await fetch(fetchPath, {
      method: "GET"
    });
    if (response.status === 404) {
      console.error(`ERROR | ${fetchPath} Not Found`);
    }
    return await response.text();
  } catch (err) {
    console.error(`[GUILD-DOCS] ERROR | Error while trying to get README from GitHub ${fetchPath}`);
    console.error(err);
    return null;
  }
}
var NO_NPM_README_PLACEHOLDER = "ERROR: No README data found!";
var fetchPackageInfo = async (packageName, githubReadme) => {
  const cacheKey = githubReadme ? `${githubReadme.repo}${githubReadme.path}` : packageName;
  const cachedData = cache[cacheKey];
  if (cachedData) {
    return cachedData;
  }
  const encodedName = encodeURIComponent(packageName);
  console.debug(`Loading NPM package info: ${packageName}`);
  const [packageInfo, { downloads }] = await Promise.all([
    fetch(`https://registry.npmjs.org/${encodedName}`).then((response) => response.json()),
    fetch(`https://api.npmjs.org/downloads/point/last-week/${encodedName}`).then(
      (response) => response.json()
    )
  ]);
  const { readme, time, description } = packageInfo;
  const latestVersion = packageInfo["dist-tags"].latest;
  const readmeContent = githubReadme && await tryRemoteReadme(githubReadme.repo, githubReadme.path);
  cache[cacheKey] = {
    readme: readmeContent || readme !== NO_NPM_README_PLACEHOLDER && readme || // for some reason top level "readme" can be empty string, so we get the latest version readme
    Object.values(packageInfo.versions).reverse().find((curr) => {
      const isReadmeExist = curr.readme && curr.readme !== NO_NPM_README_PLACEHOLDER;
      if (isReadmeExist) {
        return semver.lte(curr.version, latestVersion);
      }
    })?.readme || "",
    createdAt: time.created,
    updatedAt: time.modified,
    description,
    weeklyNPMDownloads: downloads
  };
  return cache[cacheKey];
};

// src/index.ts
import { default as default2 } from "@giscus/react";
import { useMounted as useMounted2 } from "nextra/hooks";
import { useMDXComponents } from "nextra/mdx";
import { RemoteContent, useSSG } from "nextra/ssg";
import {
  Bleed,
  Callout,
  Collapse,
  Navbar as Navbar2,
  NotFoundPage,
  ServerSideErrorPage,
  Tab as Tab2,
  Tabs as Tabs2,
  useConfig as useConfig2,
  useTheme as useTheme3,
  Card,
  Cards,
  Steps,
  FileTree
} from "nextra-theme-docs";
export {
  Anchor,
  ArrowUpRightIcon,
  Banner,
  Bleed,
  Button,
  Callout,
  Card,
  Cards,
  CardsColorful,
  CaretIcon,
  CaretSlimIcon,
  CheckIcon,
  CloseIcon,
  Collapse,
  ExternalLinkIcon,
  FeatureList,
  FileTree,
  FooterExtended,
  default2 as Giscus,
  HamburgerIcon,
  HashTagIcon,
  Header,
  HeroGradient,
  HeroIllustration,
  HeroMarketplace,
  HeroVideo,
  Image,
  InfoList,
  InformationCircleIcon,
  MailIcon,
  MarketplaceList,
  MarketplaceSearch,
  Mermaid,
  Modal,
  MoonIcon,
  MoreIcon,
  NPMBadge,
  Nav,
  Navbar2 as Navbar,
  Newsletter,
  NotFoundPage,
  PRODUCTS,
  PackageCmd,
  PageIcon,
  RemoteContent,
  SearchBar,
  SearchIcon,
  ServerSideErrorPage,
  ShareIcon,
  Steps,
  Tab2 as Tab,
  Tabs2 as Tabs,
  defineConfig,
  fetchPackageInfo,
  mdxComponents,
  useConfig2 as useConfig,
  useMDXComponents,
  useMounted2 as useMounted,
  useSSG,
  useTheme3 as useTheme
};
