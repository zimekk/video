import express, { Router } from "express";
// import cors from "cors";
import path from "path";

const web =
  process.env.NODE_ENV === "development"
    ? (({ entry, ...config }) => {
        const compiler = require("webpack")({
          mode: "development",
          entry: ["webpack-hot-middleware/client"].concat(entry),
          ...config,
        });

        return Router()
          .use(
            require("webpack-dev-middleware")(compiler, {
              publicPath: config.output?.publicPath,
            })
          )
          .use(require(`webpack-hot-middleware`)(compiler, {}));
      })(require("@dev/web/webpack.config").default)
    : Router().use(
        express.static(
          path.resolve(
            path.dirname(require.resolve("@dev/web/package")),
            "public"
          )
        )
      );

const PORT = 8080;

export default express()
  .use(require("morgan")("combined"))
  // .use(cors({ origin: '*'}))
  .use((req, res, next) => {
    // https://developer.chrome.com/blog/enabling-shared-array-buffer/#cross-origin-isolation
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader(
    //   "Access-Control-Allow-Methods",
    //   "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    // );
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  })
  .use(web)
  .listen(PORT, () =>
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
  );
