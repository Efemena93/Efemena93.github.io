import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * Flat config. eslint-config-next 16 ships native flat configs, so no
 * FlatCompat shim is needed — and using one produces a circular-reference
 * crash on ESLint 9.
 *
 * jsx-a11y is already bundled by next/core-web-vitals; the block below only
 * raises the rules this site is specifically held to.
 */
const eslintConfig = [
  ...next,
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/tabindex-no-positive": "error",
    },
  },
  { ignores: [".next/**", "node_modules/**", "out/**"] },
];

export default eslintConfig;
