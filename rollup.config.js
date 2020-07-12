import VuePlugin from "rollup-plugin-vue";

export default [
  {
    input: "src/components/BaseInput.vue",
    output: {
      file: "dist/app.js",
      format: "esm",
      sourcemap: "inline",
    },
    plugins: [VuePlugin()],
    external: ["vue"],
  },
];
