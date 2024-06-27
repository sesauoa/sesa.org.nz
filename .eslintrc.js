module.exports = {
  extends: [
    "next/core-web-vitals", // Extend Next.js recommended configuration
    "plugin:prettier/recommended", // Enable eslint-plugin-prettier and eslint-config-prettier
  ],
  rules: {
    // Add any additional rules specific to your project
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
