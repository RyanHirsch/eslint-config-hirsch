module.exports = {
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-spacing": "off",
    "array-callback-return": "error",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": [
      "error",
      {
        "after": true,
        "before": true
      }
    ],
    "babel/generator-star-spacing": "error",
    "babel/arrow-parens": [ "error", "as-needed" ],
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
    "consistent-return": "off",
    "consistent-this": "error",
    "curly": "error",
    "default-case": "off",
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
    "func-names": "off",
    "func-style": [
      "error",
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "generator-star-spacing": "off",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "off",
    "id-blacklist": "error",
    "id-length": "off",
    "id-match": "error",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "init-declarations": "off",
    "key-spacing": "off",
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
    "max-len": "off",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": [ "error", 15 ],
    "max-statements-per-line": "off",
    "new-cap": [ "error", { "capIsNewExceptions": [ "List", "Map", "Set" ] }],
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
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
    "no-dupe-keys": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "off",
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
    "no-magic-numbers": "off",
    "no-mixed-requires": "error",
    "no-multi-spaces": "off",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "off",
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
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "off",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-var": "off",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-spacing": [ "error", "always" ],
    "object-shorthand": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "error",
    "operator-assignment": [ "error", "never" ],
    "operator-linebreak": "error",
    "padded-blocks": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "error",
    "prefer-reflect": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": "off",
    "quotes": [
      "error",
      "single",
      "avoid-escape"
    ],
    "radix": "error",
    "require-jsdoc": "off",
    "require-yield": "off",
    "semi": [ "error" , "always" ],
    "semi-spacing": "error",
    "sort-imports": "off",
    "sort-vars": "error",
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": "off",
    "space-in-parens": "off",
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
    "yoda": [
      "error",
      "never"
    ]
  }
}
