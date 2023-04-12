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
        variant === "primary" ? "bg-pink-400 text-white hover:shadow-pink-400/40" : "bg-white text-black hover:shadow-white/40",
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
import { useCallback, useMemo, useState as useState2 } from "react";
import {
  Content,
  Indicator,
  Item,
  Link,
  List,
  Root,
  Trigger,
  Viewport
} from "@radix-ui/react-navigation-menu";
import clsx8 from "clsx";
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

// src/components/header.tsx
import { Fragment as Fragment2, jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
var Header = ({
  accentColor,
  activeLink,
  themeSwitch = true,
  transformLinks = (links) => links,
  className,
  sameSite
}) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileNavOpen, setMobileNavOpen] = useState2(false);
  const { height: windowHeight, width: windowWidth } = useWindowSize();
  const shouldUseMenus = useMemo(
    () => windowWidth && windowHeight && windowHeight > 400 && windowWidth > 800,
    [windowHeight, windowWidth]
  );
  const toggleNav = useCallback(() => {
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
  return /* @__PURE__ */ jsx23(
    "header",
    {
      className: clsx8(
        "bg-white py-2.5 dark:bg-[#111] md:py-3.5",
        !sameSite && "max-md:hidden",
        className
      ),
      children: /* @__PURE__ */ jsxs12(
        "div",
        {
          className: "\n          container\n          flex\n          max-w-[90rem]\n          items-center\n          justify-between\n          pl-[max(env(safe-area-inset-left),1.5rem)]\n          pr-[max(env(safe-area-inset-right),1.5rem)]\n        ",
          children: [
            /* @__PURE__ */ jsx23(
              "button",
              {
                className: "rounded-sm text-pink-500 outline-none transition hover:text-pink-400 focus-visible:ring dark:text-gray-200 dark:hover:text-gray-400 md:hidden",
                onClick: toggleNav,
                children: /* @__PURE__ */ jsx23(HamburgerIcon, {})
              }
            ),
            /* @__PURE__ */ jsx23("div", { className: "md:absolute" }),
            /* @__PURE__ */ jsx23(Root, { asChild: true, children: /* @__PURE__ */ jsxs12(List, { children: [
              /* @__PURE__ */ jsx23(Viewport, { className: "absolute top-10 right-0 z-50" }),
              /* @__PURE__ */ jsxs12(Nav, { isOpen: mobileNavOpen, setOpen: setMobileNavOpen, className: "gap-2", children: [
                links.map(({ label, menu, ...link }) => {
                  const linkEl = /* @__PURE__ */ jsxs12(
                    Anchor,
                    {
                      onClick: sameSite && mobileNavOpen ? toggleNav : void 0,
                      ...link,
                      className: clsx8(
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
                        menu && /* @__PURE__ */ jsx23(
                          CaretIcon,
                          {
                            className: "\n                          transition-transform\n                          duration-200\n                          [[data-state=open]_>_&]:rotate-180\n                        "
                          }
                        )
                      ]
                    }
                  );
                  return /* @__PURE__ */ jsx23(Item, { value: label, children: menu && shouldUseMenus ? /* @__PURE__ */ jsxs12(Fragment2, { children: [
                    /* @__PURE__ */ jsx23(Trigger, { asChild: true, children: linkEl }),
                    /* @__PURE__ */ jsx23(Content, { asChild: true, children: menu })
                  ] }) : /* @__PURE__ */ jsx23(Link, { asChild: true, children: linkEl }) }, label);
                }),
                themeSwitch && /* @__PURE__ */ jsx23(
                  "button",
                  {
                    onClick: () => setTheme(resolvedTheme === "light" ? "dark" : "light"),
                    className: "mr-1 self-center rounded-sm p-2 outline-none focus-visible:ring",
                    children: /* @__PURE__ */ jsx23(MoonIcon, { className: "fill-transparent stroke-pink-500 dark:fill-gray-100 dark:stroke-gray-100" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx23(Indicator, { className: "absolute top-9 z-50 flex h-2.5 justify-center", children: /* @__PURE__ */ jsx23("div", { className: "h-3 w-3 rotate-45 rounded-t-sm bg-white dark:bg-neutral-800" }) })
            ] }) })
          ]
        }
      )
    }
  );
};

// src/components/hero-video.tsx
import { useRouter } from "next/router";
import clsx9 from "clsx";
import { useMounted } from "nextra/hooks";
import ReactPlayer from "react-player/lazy";
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
var HeroVideo = ({
  title,
  description,
  link,  "publishConfig": {
    "access": "public",
  },
  video,
  flipped,
  className,
  videoProps
}) => {
  const { basePath } = useRouter();
  const mounted = useMounted();
  return /* @__PURE__ */ jsx24("section", { className: clsx9("bg-gray-100 dark:bg-neutral-800", className), children: /* @__PURE__ */ jsxs13(
    "div",
    {
      className: clsx9(
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
        /* @__PURE__ */ jsxs13("div", { className: "mt-8 mb-16 md:my-0", children: [
          /* @__PURE__ */ jsx24("h2", { className: "m-0 max-w-sm text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
          /* @__PURE__ */ jsx24("p", { className: "mt-1 mb-3 max-w-md text-base text-gray-500 dark:text-gray-400", children: description }),
          link && /* @__PURE__ */ jsx24(
            Anchor,
            {
              ...link,
              className: clsx9(
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
        /* @__PURE__ */ jsx24(
          "div",
          {
            className: clsx9(
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
            children: mounted && /* @__PURE__ */ jsx24(
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
import clsx10 from "clsx";
import { jsx as jsx25, jsxs as jsxs14 } from "react/jsx-runtime";
var InfoList = ({ title, items, className }) => /* @__PURE__ */ jsx25("section", { className: clsx10("bg-white dark:bg-[#111]", className), children: /* @__PURE__ */ jsxs14("div", { className: "container max-w-[90rem] py-12", children: [
  title && /* @__PURE__ */ jsx25("h2", { className: "mt-0 mb-4 text-2xl font-bold text-black dark:text-gray-50 md:text-3xl", children: title }),
  /* @__PURE__ */ jsx25("div", { className: "flex flex-wrap", children: items.map((item, index) => /* @__PURE__ */ jsxs14(
    "section",
    {
      className: "\n              mb-9\n              box-border\n              flex\n              w-full\n              max-w-lg\n              flex-col\n              pr-10\n              last:mb-0\n              md:w-1/2\n              lg:mb-0\n              lg:w-1/3\n          ",
      children: [
        /* @__PURE__ */ jsx25("h3", { className: "m-0 text-base font-semibold text-black dark:text-gray-50", children: item.title }),
        /* @__PURE__ */ jsx25("p", { className: "mt-2 mb-4 grow text-sm text-gray-500 dark:text-gray-400", children: item.description }),
        item.link && /* @__PURE__ */ jsx25(
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

// src/components/mdx-components.tsx
import { useRouter as useRouter2 } from "next/router";
import clsx11 from "clsx";
import { jsx as jsx26, jsxs as jsxs15 } from "react/jsx-runtime";
var mdxComponents = {
  source({ src, type, ...props }) {
    if (!src) {
      throw new Error("Must provide `src` prop");
    }
    let ext = src.replace(/.*\./, "");
    if (ext === "mov") {
      ext = "quicktime";
    }
    return /* @__PURE__ */ jsx26("source", { ...props, src, type: type || `video/${ext}` });
  },
  video: ({ className, children, ...props }) => /* @__PURE__ */ jsxs15("video", { className: clsx11("mt-6 w-full", className), autoPlay: true, loop: true, muted: true, ...props, children: [
    children,
    "Your browser does not support HTML video."
  ] }),
  iframe: ({ className, ...props }) => /* @__PURE__ */ jsx26(
    "iframe",
    {
      className: clsx11("mt-6 aspect-video w-full", className),
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
    return /* @__PURE__ */ jsx26("img", { ...props, src: src.startsWith("/") ? basePath + src : src, alt });
  }
};

// src/components/modal.tsx
import { useEffect as useEffect3 } from "react";
import clsx12 from "clsx";
import FocusTrap from "focus-trap-react";
import { jsx as jsx27, jsxs as jsxs16 } from "react/jsx-runtime";
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
    return typeof description === "object" ? /* @__PURE__ */ jsxs16(Anchor, { className: "inline-flex gap-x-1.5 hover:opacity-60", ...description, children: [
      /* @__PURE__ */ jsx27("p", { className: "line-clamp-1", children: description.children }),
      /* @__PURE__ */ jsx27(ExternalLinkIcon, { className: "h-4 w-4 shrink-0" })
    ] }) : /* @__PURE__ */ jsx27("p", { className: "line-clamp-1", children: description });
  };
  useEffect3(() => {
    if (visible && escapePress) {
      onCancel();
    }
  }, [visible, escapePress, onCancel]);
  return /* @__PURE__ */ jsxs16("div", { className: clsx12("fixed inset-0 z-[50] backdrop-blur-sm", !visible && "hidden", className), children: [
    /* @__PURE__ */ jsx27(
      "div",
      {
        className: "h-full w-full bg-gray-900 opacity-40 dark:bg-gray-500",
        onClick: () => onCancel()
      }
    ),
    /* @__PURE__ */ jsx27(
      FocusTrap,
      {
        active: visible,
        focusTrapOptions: {
          fallbackFocus: "#tgc-modal",
          clickOutsideDeactivates: true
        },
        children: /* @__PURE__ */ jsxs16(
          "div",
          {
            className: clsx12(
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
              /* @__PURE__ */ jsxs16(
                "div",
                {
                  className: "\n              flex\n              items-center\n              gap-x-2\n              border-b\n              border-gray-200\n              p-6\n              dark:border-gray-700\n              md:gap-x-4\n            ",
                  children: [
                    image && /* @__PURE__ */ jsx27(Image, { ...image, className: clsx12("w-10 md:w-16", image.className) }),
                    /* @__PURE__ */ jsxs16("div", { children: [
                      /* @__PURE__ */ jsx27("h2", { className: "m-0 text-lg font-semibold text-black dark:text-gray-100 md:text-xl", children: title }),
                      /* @__PURE__ */ jsx27("p", { className: "m-0 text-xs text-gray-500 dark:text-gray-100", children: renderDescription() })
                    ] }),
                    /* @__PURE__ */ jsx27(
                      "button",
                      {
                        onClick: () => onCancel(),
                        className: "\n                ml-auto\n                self-start\n                rounded-lg\n                border-2\n                border-transparent\n                bg-gray-200\n                p-1.5\n                text-gray-500\n                outline-none\n                transition\n                hover:border-gray-500\n                focus:ring\n                dark:bg-gray-700\n                dark:text-gray-200\n              ",
                        children: /* @__PURE__ */ jsx27(CloseIcon, {})
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx27("div", { className: "overflow-y-scroll p-6 text-black dark:text-gray-300", children })
            ]
          }
        )
      }
    )
  ] });
};

// src/components/npm-badge.tsx
import { jsx as jsx28 } from "react/jsx-runtime";
var NPMBadge = ({ name }) => {
  const encodedPackage = encodeURIComponent(name);
  return /* @__PURE__ */ jsx28(Anchor, { href: `https://npmjs.com/package/${encodedPackage}`, newWindow: true, children: /* @__PURE__ */ jsx28(
    "img",
    {
      src: `https://badge.fury.io/js/${encodedPackage}.svg`,
      alt: "npm version",
      className: "h-6"
    }
  ) });
};

// src/components/package-cmd.tsx
import { useMemo as useMemo2 } from "react";
import { Pre } from "nextra/components";
import { Tab, Tabs } from "nextra-theme-docs";
import { jsx as jsx29 } from "react/jsx-runtime";
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
  const commands = useMemo2(
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
  return /* @__PURE__ */ jsx29(Tabs, { items: PACKAGE_MANAGERS, children: PACKAGE_MANAGERS.map((pkgManager, index) => /* @__PURE__ */ jsx29(Tab, { children: /* @__PURE__ */ jsx29(Pre, { filename: "Terminal", hasCopyCode: true, "data-language": "sh", "data-theme": "default", children: /* @__PURE__ */ jsx29("code", { children: /* @__PURE__ */ jsx29("span", { className: "line", children: commands[index] }) }) }) }, pkgManager)) });
};

// src/define-config.tsx
import { useRouter as useRouter3 } from "next/router";
import { Navbar, useConfig } from "nextra-theme-docs";
import { Fragment as Fragment3, jsx as jsx30, jsxs as jsxs17 } from "react/jsx-runtime";
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
  const siteName = originalSiteName;
  const siteUrl = process.env.SITE_URL;
  return {
    footer: {
      component: /* @__PURE__ */ jsx30(FooterExtended, {})
    },
    navbar: {
      component: (props) => /* @__PURE__ */ jsxs17(Fragment3, { children: [
        /* @__PURE__ */ jsx30(Header, { accentColor: "#1cc8ee", searchBarProps: { version: "v2" } }),
        /* @__PURE__ */ jsx30(Navbar, { ...props })
      ] })
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
import { useEffect as useEffect4, useId, useState as useState3 } from "react";
import mermaid from "mermaid";
import { useTheme as useTheme2 } from "nextra-theme-docs";
import { jsx as jsx31 } from "react/jsx-runtime";
var initialized = false;
function Mermaid({ chart }) {
  const { resolvedTheme } = useTheme2();
  const id = useId();
  const [svg, setSvg] = useState3("");
  useEffect4(() => {
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
  return /* @__PURE__ */ jsx31("div", { className: "mt-6 flex justify-center", dangerouslySetInnerHTML: { __html: svg } });
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
  HamburgerIcon,
  HashTagIcon,
  Header,
  HeroVideo,
  Image,
  InfoList,
  InformationCircleIcon,
  MailIcon,
  Mermaid,
  Modal,
  MoonIcon,
  MoreIcon,
  NPMBadge,
  Nav,
  Navbar2 as Navbar,
  NotFoundPage,
  PackageCmd,
  PageIcon,
  RemoteContent,
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
