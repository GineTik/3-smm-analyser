import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    ignores: ["node_modules", "dist", "./src/shared/api/schema/generated.ts"],
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      "no-restricted-imports": "error",
    },
  }),
];

export default eslintConfig;
