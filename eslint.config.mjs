import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    ignores: [
      "frontend/*.config.*",
      "frontend/dist",
      "frontend/dev-dist",
      "frontend/node_modules",
    ], // Replaces deprecated .eslintignore file
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off", // You dont need to import React anymore (React 17+)
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
      "@typescript-eslint/no-explicit-any": "off", // we shouldnt really disable this
      "@typescript-eslint/no-unused-vars": "off", // we shouldnt really disable this
    },
  },
];
