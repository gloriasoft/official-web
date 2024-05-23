module.exports = {
  root: true,
  settings: {
    react: {
      version: "detect"
    }
  },
  ignorePatterns: [
    "node_modules/*.js",
    "**/node_modules/*.js",
    "**/dist/*.js", "dist/*.js",
    "tailwind.config.js"
  ],
  extends: [
    "alloy",
    "alloy/react",
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it"s not allowed to be reassigned)
  },
  rules: {
    // Customize your rules
    "curly": "error",
    "complexity": "off",
    "brace-style": ["error", "1tbs", {
      allowSingleLine: false
    }],
    "indent": ["error", 2, {
      SwitchCase: 1,
      MemberExpression: 1
    }],
    "no-mixed-spaces-and-tabs": "error",
    "object-curly-spacing": ["error", "always"],
    "multiline-ternary": ["error", "always-multiline"],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    "radix": ["error", "as-needed"],
    "id-denylist": ["error", "e"],
    "react/self-closing-comp": "off"
  },
}
