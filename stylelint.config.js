module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss",
    "stylelint-config-standard",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
    "stylelint-scss",
  ],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules",
      "at-rules",
    ],

    "order/properties-alphabetical-order": true,
    "import-notation": "string",
    "media-feature-range-notation": "prefix",
    // Add other rules as needed
  },
};
