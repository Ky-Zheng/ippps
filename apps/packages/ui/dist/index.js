"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  AppShell: () => AppShell,
  Card: () => Card,
  ProductCard: () => ProductCard
});
module.exports = __toCommonJS(ui_exports);

// components/shell/header.tsx
var import_link = __toESM(require("next/link"));
var import_image = __toESM(require("next/image"));
var import_jsx_runtime = require("react/jsx-runtime");
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
      className: "flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, {
          href: "/",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.default, {
                src: "/logo.png",
                alt: "Logo",
                width: 40,
                height: 40
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "ml-2 text-xl font-bold text-gray-800",
                children: "Saks Marketing"
              })
            ]
          })
        })
      })
    })
  });
};

// components/shell/footer.tsx
var import_link2 = __toESM(require("next/link"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", {
    className: "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", {
        className: "text-sm text-gray-500 sm:text-center",
        children: [
          "\xA9 2022",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link2.default, {
            href: "/",
            className: "hover:underline",
            children: "Saks Markerting"
          }),
          ". All Rights Reserved."
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", {
        className: "flex flex-wrap items-center mt-3 text-sm text-gray-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              href: "#",
              className: "mr-4 hover:underline md:mr-6 ",
              children: "About"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              href: "#",
              className: "mr-4 hover:underline md:mr-6",
              children: "Privacy Policy"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              href: "#",
              className: "mr-4 hover:underline md:mr-6",
              children: "Licensing"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              href: "#",
              className: "hover:underline",
              children: "Contact"
            })
          })
        ]
      })
    ]
  });
};

// components/shell/appshell.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var AppShell = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Header, {}),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Footer, {})
    ]
  });
};

// components/cards/card.tsx
var import_link3 = __toESM(require("next/link"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var Card = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
    className: "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
        href: "#",
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h5", {
          className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
          children: props.title
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", {
        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
        children: props.description
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_link3.default, {
        href: props.path,
        className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ",
        children: [
          "View App",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", {
            "aria-hidden": "true",
            className: "w-4 h-4 ml-2 -mr-1",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
              "fill-rule": "evenodd",
              d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
              clipRule: "evenodd"
            })
          })
        ]
      })
    ]
  });
};

// components/cards/product-card.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var ProductCard = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
    className: "flex flex-1 flex-col justify-between w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", {
          src: props.imageurl,
          alt: "Image Not Available"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", {
        href: "#",
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", {
          className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
          children: props.brand
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
        children: props.description
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
        children: props.price
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
        children: props.salesprice
      }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", {
        type: "submit",
        style: {
          width: "150px",
          backgroundColor: "black",
          borderWidth: 3,
          borderRadius: 15,
          margin: 20,
          padding: 5,
          cursor: "pointer",
          color: "white"
        },
        children: "Like"
      })
    ]
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppShell,
  Card,
  ProductCard
});
