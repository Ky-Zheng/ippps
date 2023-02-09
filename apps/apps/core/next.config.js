const path = require("path");

module.exports = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    transpilePackages: ["ui"],
  },
};

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/login/:slug*',
//         destination: '/recommendations/:slug*',
//         permanent: true,
//       },
//     ]
//   },
// }