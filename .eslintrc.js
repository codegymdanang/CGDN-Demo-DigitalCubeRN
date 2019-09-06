module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "globals": {
    "__DEV__": true,
    "__dirname": false,
    "__fbBatchedBridgeConfig": false,
    "alert": false,
    "cancelAnimationFrame": false,
    "cancelIdleCallback": false,
    "clearImmediate": true,
    "clearInterval": false,
    "clearTimeout": false,
    "console": false,
    "document": false,
    "escape": false,
    "Event": false,
    "EventTarget": false,
    "exports": false,
    "fetch": false,
    "FormData": false,
    "global": false,
    "Map": true,
    "module": false,
    "navigator": false,
    "process": false,
    "Promise": true,
    "requestAnimationFrame": true,
    "requestIdleCallback": true,
    "require": false,
    "Set": true,
    "setImmediate": true,
    "setInterval": false,
    "setTimeout": false,
    "window": false,
    "XMLHttpRequest": false,
    "pit": false,
    "_": false
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "global-require": 0,
    "semi": ["error", "never"],
    "comma-dangle": 0,
    "spaced-comment": 0,
    "new-cap": [2, {
      "capIsNewExceptions": ["Map"]
    }],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "react/forbid-prop-types": 0,
    "react/prop-types": [2, {
      ignore: ['focused']
    }],
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": [2, {
      amd: true,
      ignore: ["@assets", "@i18n", "@actions", "@api", "@components", "@constants", "@middlewares", "@reducers",
        "@screens", "@services", "@utils", "@theme"]
    }],
    "no-plusplus": 0,
    "prefer-destructuring": 0,
    "no-underscore-dangle": "off"
  },
  "plugins": [
    "react"
  ]
};
