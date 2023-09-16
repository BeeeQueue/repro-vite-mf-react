const { withNativeFederation, share } = require("@softarc/native-federation/build")

module.exports = withNativeFederation({
  name: "shell",
  shared: share({
    react: { singleton: true },
    "react-dom": { singleton: true },
    "react-router-dom": { singleton: true },
    "styled-components": { singleton: true },
  }),
  skip: [
    "react-dom/server",
    "react-dom/server.node",
    "react-dom/server.browser",
    "react-dom/profiling",
    "react-dom/test-utils",
    "styled-components/macro",
    "styled-components/native",
  ],
})
