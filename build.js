const vuePlugin = require("esbuild-plugin-vue3");
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/index.js",
  entryNames: "[dir]/[name]-[hash]",
  metafile: true,
  plugins: [vuePlugin()],
});
