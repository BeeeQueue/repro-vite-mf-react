import { initFederation } from "@softarc/native-federation"

void (async () => {
  await initFederation({
    // remote: "http://localhost:3001/remoteEntry.json",
  })

  await import("./bootstrap.jsx")
})()
