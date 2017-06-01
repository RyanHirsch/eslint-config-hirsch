module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: [ 'babel' ],
  extends: [ 'eslint:recommended' ],
  rules: {
    "array-callback-return": "error",
    "arrow-parens": "off",
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "generator-star-spacing": "error",
    "arrow-parens": [ "error", "as-needed" ],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": [
      "error",
      "stroustrup"
    ],
    "callback-return": "error",
    "camelcase": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "complexity": "error",
    "computed-property-spacing": "error",
    "consistent-this": "error",
    "curly": "error",
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true
      }
    ],
    "eol-last": "error",
    "eqeqeq": "error",
    "func-style": [
      "error",
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "global-require": "error",
    "guard-for-in": "error",
    "id-blacklist": "error",
    "id-match": "error",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "keyword-spacing": [
      "error",
      {
        "overrides": {
          "switch": {
            "after": false
          },
          "catch": {
            "after": false
          },
          "function": {
            "after": false
          },
          "if": {
            "after": false
          },
          "for": {
            "after": false
          }
        }
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": ["error", {"allowBlockStart": true}],
    "max-depth": "error",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": [ "error", 15 ],
    "new-cap": [ "error", { "capIsNewExceptions": [ "List", "Map", "Set" ] }],
    "new-parens": "error",
    "newline-per-chained-call": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-mixed-requires": "error",
    "no-multi-str": "error",
    "no-native-reassign": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": "error",
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-spacing": [ "error", "always" ],
    "one-var-declaration-per-line": "error",
    "operator-assignment": [ "error", "never" ],
    "operator-linebreak": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quotes": [
      "error",
      "single",
      "avoid-escape"
    ],
    "radix": "error",
    "require-yield": "off",
    "semi": [ "error" , "always" ],
    "semi-spacing": "error",
    "sort-vars": "error",
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "strict": "error",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "valid-jsdoc": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
  }
}
