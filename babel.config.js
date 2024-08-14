module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@components": "./src/Components",
          "@constants": "./src/Constant",
          "@containers": "./src/Containers",
          "@navigation": "./src/navigation",
        },
      },
    ],
  ],
};
