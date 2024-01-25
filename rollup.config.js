import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: ["./src/vanilla/vanilla.js"],
    output: [
      {
        format: "es",
        dir: "exports",
      },
    ],
    plugins: [resolve()],
  },
  {
    input: ["./src/lit/lit.js"],
    output: [
      {
        format: "es",
        dir: "exports",
      },
    ],
    plugins: [resolve()],
  },
];
