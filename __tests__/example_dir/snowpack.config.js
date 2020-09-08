const glob = require("glob");
const path = require("path");

// const resolve = require('@rollup/plugin-node-resolve').default
// const commonjs = require('@rollup/plugin-commonjs')

const mount = {
  src: "/",
};

const proxy = {
  /* ... */
};

const plugins = [
  [
    "@snowpack/plugin-build-script",
    {
      "cmd": `babel --config-file ./babel.config.js --filename $FILE`,
      "input": [".js"],
      "output": [".js"]
    }
  ],
  [
    "snowpack-plugin-rollup-bundle",
    {
      extendConfig: (config) => {
        config.outputOptions.dir = "build";
        config.inputOptions.input = glob.sync(path.join("build", "entrypoints", "**", "*"));
        return config;
      },
    },
  ],
];

const installOptions = {
  NODE_ENV: true,
  polyfillNode: false,
  // rollup: {
  //   plugins: [
  //     commonjs(),
  //     resolve()
  //   ]
  // }
};

const alias = {
  /* */
};

const devOptions = {
  out: "build",
  open: "none",
  bundle: true,
};

const buildOptions = {
  clean: true,
};

module.exports = {
  mount,
  alias,
  proxy,
  plugins: plugins,
  installOptions,
  devOptions,
  buildOptions,
};
