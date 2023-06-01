module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
    'plugin:astro/recommended',
  ],
  rules: {
    'tailwindcss/no-custom-classname': [
      2,
      {
        config: 'tailwind.config.cjs',
      },
    ],
    'tailwindcss/classnames-order': [
      0,
      {
        config: 'tailwind.config.cjs',
      },
    ],
  },
  env: {
    node: true,
    browser: true,
    'astro/astro': true,
    es2022: true,
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  ignorePatterns: ['node_modules/', '.astro/', '.vercel/', 'public/'],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        'prettier/prettier': 'off',
      },
    },
    // ...
  ],
};
