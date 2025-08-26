import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default tseslint.config(
  eslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  }
);
