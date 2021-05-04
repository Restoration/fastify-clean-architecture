module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
    },
    extends: 'standard-with-typescript',
    plugins: ['@typescript-eslint/eslint-plugin'],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    rules: {
      'no-console': 'warn',
      'no-var': 'error',
      'operator-linebreak': 'off',
      'object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/return-await': 'off',
    },
};
  