const { withNativeFederation, share, shareAll } = require("@softarc/native-federation/build")

module.exports = withNativeFederation({
  name: "shell",
  shared: shareAll(),
  // shared: share({
  //   react: { singleton: true },
  //   "react-dom": { singleton: true },
  //   "react-router-dom": { singleton: true },
  // }),
  skip: ["react-dom/server", "react-dom/server.node"],
})
