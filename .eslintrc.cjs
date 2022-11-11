module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off'
  }
}
