import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import * as path from "path";
import webpack from "webpack";
import env from "dotenv";

env.config({ path: path.resolve(__dirname, "../../.env") });

const dev = process.env.NODE_ENV === "development";

const config = {
  target: "web",
  devServer: {
    port: 8080,
  },
  devtool: dev && "inline-source-map",
  entry: ["regenerator-runtime/runtime"].concat(require.resolve("./src")),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              esModule: false,
              // https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#modules
              modules: {
                exportLocalsConvention: "asIs",
              },
            },
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                // fiber: require("fibers"),
              },
            },
          },
        ],
      },
      {
        test: /\.(mp3|ogg|png|avi)$/,
        use: ["file-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: dev ? ["react-refresh/babel"] : [],
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      events: "events",
    },
    fallback: {
      buffer: require.resolve("buffer"),
      stream: require.resolve("stream-browserify"),
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      FFMPEG_CORE_PATH: "ffmpeg/ffmpeg-core.js",
      FFMPEG_WASM_PATH: "ffmpeg/ffmpeg-core.wasm",
      NODE_ENV: "development",
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        "ffmpeg-core.js",
        "ffmpeg-core.wasm",
        // "ffmpeg-core.worker.js",
      ].map((fileName: string) => ({
        from: path.join(
          path.dirname(require.resolve("@ffmpeg/core")),
          fileName,
        ),
        to: "ffmpeg",
      })),
    }),
    ...(dev ? [new ReactRefreshPlugin()] : []),
    new HtmlWebpackPlugin({
      favicon: require.resolve("./src/assets/favicon.ico"),
    }),
  ],
};

export default config;
