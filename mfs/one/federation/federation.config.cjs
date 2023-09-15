const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build")

module.exports = withNativeFederation({
  name: "one",
  exposes: {
    "./routes": "./routes",
  },
  shared: shareAll(),
  skip: ["stream", "react-dom/server", "react-dom/server.node"],
})
