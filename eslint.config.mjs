// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-console": "off", // Example: Disable no-console
      "@typescript-eslint/explicit-function-return-type": "off", // Example: Disable a TypeScript rule
      "jsx-a11y/alt-text": "warn", // Example: Change a rule to a warning
      // Add or modify other rules as needed
      // "rule-name": "off",
      // "another-rule": "warn",
      // "yet-another-rule": "error"
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];

export default eslintConfig;
