// components/shell/header.tsx
import Link from "next/link";
import Image from "next/image";
import { jsx, jsxs } from "react/jsx-runtime";
var Header = () => {
  return /* @__PURE__ */ jsx("header", {
    children: /* @__PURE__ */ jsx("nav", {
      className: "flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200",
      children: /* @__PURE__ */ jsx("div", {
        className: "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl",
        children: /* @__PURE__ */ jsx(Link, {
          href: "/",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex items-center",
            children: [
              /* @__PURE__ */ jsx(Image, {
                src: "/logo.png",
                alt: "Logo",
                width: 40,
                height: 40
              }),
              /* @__PURE__ */ jsx("span", {
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
import Link2 from "next/link";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Footer = () => {
  return /* @__PURE__ */ jsxs2("footer", {
    className: "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6",
    children: [
      /* @__PURE__ */ jsxs2("span", {
        className: "text-sm text-gray-500 sm:text-center",
        children: [
          "\xA9 2022",
          " ",
          /* @__PURE__ */ jsx2(Link2, {
            href: "/",
            className: "hover:underline",
            children: "Saks Markerting"
          }),
          ". All Rights Reserved."
        ]
      }),
      /* @__PURE__ */ jsxs2("ul", {
        className: "flex flex-wrap items-center mt-3 text-sm text-gray-500",
        children: [
          /* @__PURE__ */ jsx2("li", {
            children: /* @__PURE__ */ jsx2("a", {
              href: "#",
              className: "mr-4 hover:underline md:mr-6 ",
              children: "About"
            })
          }),
          /* @__PURE__ */ jsx2("li", {
            children: /* @__PURE__ */ jsx2("a", {
              href: "#",
              className: "mr-4 hover:underline md:mr-6",
              children: "Privacy Policy"
            })
          }),
          /* @__PURE__ */ jsx2("li", {
            children: /* @__PURE__ */ jsx2("a", {
              href: "#",
              className: "mr-4 hover:underline md:mr-6",
              children: "Licensing"
            })
          }),
          /* @__PURE__ */ jsx2("li", {
            children: /* @__PURE__ */ jsx2("a", {
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
import { Fragment, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var AppShell = ({ children }) => {
  return /* @__PURE__ */ jsxs3(Fragment, {
    children: [
      /* @__PURE__ */ jsx3(Header, {}),
      children,
      /* @__PURE__ */ jsx3(Footer, {})
    ]
  });
};

// components/cards/card.tsx
import Link3 from "next/link";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var Card = ({ ...props }) => {
  return /* @__PURE__ */ jsxs4("div", {
    className: "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md",
    children: [
      /* @__PURE__ */ jsx4("a", {
        href: "#",
        children: /* @__PURE__ */ jsx4("h5", {
          className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
          children: props.title
        })
      }),
      /* @__PURE__ */ jsx4("p", {
        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
        children: props.description
      }),
      /* @__PURE__ */ jsxs4(Link3, {
        href: props.path,
        className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ",
        children: [
          "View App",
          /* @__PURE__ */ jsx4("svg", {
            "aria-hidden": "true",
            className: "w-4 h-4 ml-2 -mr-1",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx4("path", {
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
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var ProductCard = ({ ...props }) => {
  return /* @__PURE__ */ jsxs5("div", {
    className: "flex flex-1 flex-col justify-between w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md",
    children: [
      /* @__PURE__ */ jsx5("a", {
        children: /* @__PURE__ */ jsx5("img", {
          src: props.imageurl,
          alt: "Image Not Available"
        })
      }),
      /* @__PURE__ */ jsx5("a", {
        href: "#",
        children: /* @__PURE__ */ jsx5("h5", {
          className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
          children: props.brand
        })
      }),
      /* @__PURE__ */ jsx5("p", {
        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
        children: props.description
      }),
      /* @__PURE__ */ jsx5("p", {
        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
        children: props.price
      }),
      /* @__PURE__ */ jsx5("p", {
        className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
        children: props.salesprice
      }),
      /* @__PURE__ */ jsx5("button", {
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
export {
  AppShell,
  Card,
  ProductCard
};
