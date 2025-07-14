import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          detectObjects: true,
          ignoreArrayIndexes: false,
          ignoreNumericLiteralTypes: false,
          ignoreEnums: false,
          ignoreReadonlyClassProperties: false,
          enforceConst: true,
          ignore: [],
        },
      ],
      '@typescript-eslint/typedef': [
        'error',
        {
          arrowParameter: true,
          variableDeclaration: false,
          propertyDeclaration: true,
          parameter: true,
          memberVariableDeclaration: true,
          objectDestructuring: false,
          arrayDestructuring: false,
          variableDeclarationIgnoreFunction: false,
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: false,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
        },
      ],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sort-imports': 'off',
      'import/order': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'PropertyDefinition > Literal',
          message:
            'No use valores literales en propiedades de clase. Use constantes.',
        },
        {
          selector:
            'AssignmentExpression[left.object.type="ThisExpression"] > Literal',
          message:
            'No use valores literales en asignaciones de propiedades. Use constantes.',
        },
        {
          selector:
            'BinaryExpression[operator=/===|!==|==|!=|>|<|>=|<=|in/] > Literal:not(Literal[value=null])',
          message:
            'No use valores literales en comparaciones. Use constantes definidas.',
        },
        {
          selector: 'CallExpression > Literal:not(Literal[value=null])',
          message:
            'No use valores literales en llamadas a funciones. Use constantes definidas.',
        },
      ],
    },
  },
  eslintConfigPrettier,
];
