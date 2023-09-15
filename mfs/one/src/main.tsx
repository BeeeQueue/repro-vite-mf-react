import { initFederation } from "@softarc/native-federation"

void (async () => {
  await initFederation()

  await import("./bootstrap.jsx")
})()
