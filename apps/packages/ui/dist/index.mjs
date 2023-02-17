// components/shell/header.tsx
import Link from "next/link";
import { jsx } from "react/jsx-runtime";
var Header = () => {
  return /* @__PURE__ */ jsx("header", {
    children: /* @__PURE__ */ jsx("nav", {
      className: "flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200",
      children: /* @__PURE__ */ jsx("div", {
        className: "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl",
        children: /* @__PURE__ */ jsx(Link, {
          href: "/",
          children: /* @__PURE__ */ jsx("div", {
            className: "flex items-center",
            children: /* @__PURE__ */ jsx("span", {
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
import Link2 from "next/link";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Footer = () => {
  return /* @__PURE__ */ jsxs("footer", {
    className: "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6",
    children: [
      /* @__PURE__ */ jsxs("span", {
        className: "text-sm text-gray-500 sm:text-center",
        children: [
          "\xA9 2023",
          " ",
          /* @__PURE__ */ jsx2(Link2, {
            href: "/",
            className: "hover:underline",
            children: "Impressionism Painting Prediction"
          }),
          ". All Rights Reserved."
        ]
      }),
      /* @__PURE__ */ jsxs("ul", {
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
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var AppShell = ({ children }) => {
  return /* @__PURE__ */ jsxs2(Fragment, {
    children: [
      /* @__PURE__ */ jsx3(Header, {}),
      children,
      /* @__PURE__ */ jsx3(Footer, {})
    ]
  });
};

// components/cards/card.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Card = ({ ...props }) => {
  return /* @__PURE__ */ jsxs3("div", {
    className: "my-3 flex flex-1 flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",
    children: [
      /* @__PURE__ */ jsx4("a", {
        href: "#",
        children: /* @__PURE__ */ jsx4("img", {
          className: "rounded-t-lg",
          src: props.imageurl,
          alt: ""
        })
      }),
      /* @__PURE__ */ jsxs3("div", {
        className: "p-5",
        children: [
          /* @__PURE__ */ jsxs3("a", {
            href: "#",
            children: [
              /* @__PURE__ */ jsx4("h5", {
                className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                children: props.artist
              }),
              /* @__PURE__ */ jsxs3("h1", {
                className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                children: [
                  props.title,
                  ", ",
                  props.date
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs3("p", {
            className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
            children: [
              "size ",
              props.dimensions_h,
              " * ",
              props.dimensions_l,
              " cm"
            ]
          }),
          /* @__PURE__ */ jsxs3("p", {
            className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
            children: [
              "sold ",
              props.price
            ]
          }),
          /* @__PURE__ */ jsxs3("a", {
            href: "/favorite",
            className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: [
              props.addorremove,
              /* @__PURE__ */ jsx4("svg", {
                "aria-hidden": "true",
                className: "w-4 h-4 ml-2 -mr-1",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx4("path", {
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
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var ProductCard = ({ ...props }) => {
  return /* @__PURE__ */ jsxs4("div", {
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

// components/tabs/tab-home.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Tabs = () => {
  return /* @__PURE__ */ jsxs5("ul", {
    className: "mb-2 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400",
    children: [
      /* @__PURE__ */ jsx6("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx6("a", {
          href: "/home",
          "aria-current": "page",
          className: "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",
          children: "Home"
        })
      }),
      /* @__PURE__ */ jsx6("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx6("a", {
          href: "prediction",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Prediction"
        })
      }),
      /* @__PURE__ */ jsx6("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx6("a", {
          href: "/favorite",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Favorite"
        })
      })
    ]
  });
};

// components/tabs/tab-prediction.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var PredTabs = () => {
  return /* @__PURE__ */ jsxs6("ul", {
    className: "mb-2 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400",
    children: [
      /* @__PURE__ */ jsx7("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx7("a", {
          href: "/home",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Home"
        })
      }),
      /* @__PURE__ */ jsx7("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx7("a", {
          href: "/prediction",
          "aria-current": "page",
          className: "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",
          children: "Prediction"
        })
      }),
      /* @__PURE__ */ jsx7("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx7("a", {
          href: "/favorite",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Favorite"
        })
      })
    ]
  });
};

// components/tabs/tab-favorite.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var FavTabs = () => {
  return /* @__PURE__ */ jsxs7("ul", {
    className: "mb-2 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400",
    children: [
      /* @__PURE__ */ jsx8("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx8("a", {
          href: "/home",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Home"
        })
      }),
      /* @__PURE__ */ jsx8("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx8("a", {
          href: "/prediction",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Prediction"
        })
      }),
      /* @__PURE__ */ jsx8("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx8("a", {
          href: "/favorite",
          "aria-current": "page",
          className: "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",
          children: "Favorite"
        })
      })
    ]
  });
};

// components/tabs/tab-login.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var LoginTabs = () => {
  return /* @__PURE__ */ jsxs8("ul", {
    className: "mb-2 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400",
    children: [
      /* @__PURE__ */ jsx9("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx9("a", {
          href: "/home",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Home"
        })
      }),
      /* @__PURE__ */ jsx9("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx9("a", {
          href: "/prediction",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Prediction"
        })
      }),
      /* @__PURE__ */ jsx9("li", {
        className: "mr-2",
        children: /* @__PURE__ */ jsx9("a", {
          href: "/favorite",
          className: "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          children: "Favorite"
        })
      })
    ]
  });
};
export {
  AppShell,
  Card,
  FavTabs,
  LoginTabs,
  PredTabs,
  ProductCard,
  Tabs
};
