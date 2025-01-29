import { defineConfig } from 'eslint';

export default defineConfig({
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    semi: ['error', 'always'],

    'no-magic-numbers': ['error', { ignore: [0, 1] }],

    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // First, built-in modules, then external dependencies
          ['internal', 'sibling', 'parent'], // Then, internal modules, siblings, and parent imports
        ],
        'newlines-between': 'always',
      },
    ],

    'no-unused-vars': ['warn'],

    camelcase: 'error',

    'no-console': ['warn', { allow: ['warn', 'error'] }],

    'prefer-template': 'warn',

    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: true, object: true },
        VariableDeclarator: { array: true, object: true },
      },
      {
        enforceForRenamedProperties: false, // Allow the rule to be lenient if the object is renamed
      },
    ],
  },
});

