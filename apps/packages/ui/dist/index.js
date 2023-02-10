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
  ProductCard: () => ProductCard,
  Tabs: () => Tabs
});
module.exports = __toCommonJS(ui_exports);

// components/shell/header.tsx
var import_link = __toESM(require("next/link"));
var import_jsx_runtime = require("react/jsx-runtime");
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
      className: "flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, {
          href: "/",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "flex items-center",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "ml-2 text-5xl font-sans font-bold text-gray-800 my-5",
              children: "Impressionism Painting Prediction"
            })
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
          "\xA9 2023",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_link2.default, {
            href: "/",
            className: "hover:underline",
            children: "Impressionism Painting Prediction"
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var Card = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
    className: "flex flex-1 flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
        href: "#",
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", {
          className: "rounded-t-lg",
          src: props.imageurl,
          alt: ""
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", {
        className: "p-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("a", {
            href: "#",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h5", {
                className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                children: props.artist
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h1", {
                className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                children: [
                  props.title,
                  ", ",
                  props.date
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", {
            className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
            children: [
              "size ",
              props.dimensions_h,
              " * ",
              props.dimensions_l,
              " cm"
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", {
            className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
            children: [
              "sold ",
              props.price
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("a", {
            href: "/favorite",
            className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: [
              "Add to Favorite",
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", {
                "aria-hidden": "true",
                className: "w-4 h-4 ml-2 -mr-1",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                  "fill-rule": "evenodd",
                  d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                  "clip-rule": "evenodd"
                })
              })
            ]
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

// components/tabs/tab.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Tabs = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("ul", {
    className: "mb-2 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", {
        className: "mr-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
          href: "#",
          "aria-current": "page",
          className: "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",
          children: "Home"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", {
        className: "mr-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
          href: "/favorite",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Favorite"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", {
        className: "mr-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", {
          href: "prediction",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Prediction"
        })
      })
    ]
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppShell,
  Card,
  ProductCard,
  Tabs
});
