/* eslint-disable import/no-extraneous-dependencies */
import { execSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { defineConfig } from "vitest/config"

import { federation } from "@module-federation/vite"
import { createEsBuildAdapter } from "@softarc/native-federation-esbuild"
import { reactReplacements } from "@softarc/native-federation-esbuild/src/lib/react-replacements"
import React from "@vitejs/plugin-react"

// @ts-ignore: Stupid
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const gitSha = execSync("git rev-parse --short HEAD").toString().trim()

export default defineConfig(async ({ command }) => ({
  server: { port: 3000 },

  plugins: [
    await federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: "dist",
        tsConfig: "tsconfig.json",
        federationConfig: "federation/federation.config.cjs",
        verbose: false,
        dev: command === "serve",
      },
      adapter: createEsBuildAdapter({
        plugins: [],
        fileReplacements: reactReplacements[command === "serve" ? "dev" : "prod"],
      }),
    }),
    React(),
  ],

  test: {
    env: {
      GIT_SHA: JSON.stringify(gitSha),
    },
  },
}))
