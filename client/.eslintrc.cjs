module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'  // ✅ TypeScript support
  ],
  parser: "@typescript-eslint/parser", // ✅ Set TypeScript parser
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"]
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint'], // ✅ Add TypeScript plugin
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // 🚀 Optional TypeScript rule
    '@typescript-eslint/explicit-function-return-type': 'off', // 🚀 Optional TypeScript rule
    '@typescript-eslint/no-unused-vars': ['warn']
  },
};
