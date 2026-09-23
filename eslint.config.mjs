import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = defineConfig([
  // Next.js recommended plugin + rules (flat config entry)
  nextPlugin.flatConfig.recommended,
  // Next.js core web vitals rules
  nextPlugin.flatConfig.coreWebVitals,
  // Override default ignores of eslint-config-next.
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
]);

export default eslintConfig;
