const jsRules = {
  // JS Rules
  'no-use-before-define': 'off',
  'import/no-unresolved': 'off',
  radix: 'off',
  'no-nested-ternary': 'warn',
  'no-param-reassign': 'warn',
  'no-underscore-dangle': 'off',
  'import/extensions': 'off',
  'no-unused-vars': 'warn',
  'no-shadow': 'warn',
  'no-unused-expressions': ['error', { allowTernary: true }],
  curly: ['error', 'all'],
  'default-param-last': ['off'],
  'jsx-a11y/click-events-have-key-events': 'off',
  'no-restricted-exports': ['off'],
  // Allow import packages from Dev Dependencies in Tests files
  'import/no-extraneous-dependencies': [
    'warn',
    {
      devDependencies: [
        '**/*.test.js',
        '**/*.spec.js',
        '**/setupTests.js',
        '**/utils/tests/*.js'
      ]
    }
  ]
}

const reactRules = {
  // Sort rules for propTypes declaration
  'react/sort-prop-types': [
    1,
    {
      callbacksLast: true,
      sortShapeProp: true,
      noSortAlphabetically: true
    }
  ],
  // Sort rules for props
  'react/jsx-sort-props': [
    1,
    {
      callbacksLast: true,
      shorthandFirst: true,
      reservedFirst: true
    }
  ],
  // Allow jsx syntax inside .js files for Tests
  'react/jsx-filename-extension': [
    1,
    {
      extensions: ['.js', 'jsx', '.ts', '.tsx']
    }
  ],
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'react/prop-types': 'off',
  'react/forbid-prop-types': 'off',
  'react/default-props-match-prop-types': 'off',
  'react/no-unused-prop-types': 'off',
  'react/require-default-props': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-no-useless-fragment': 'warn',
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }
  ]
}

const tsConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    ...jsRules,
    ...reactRules,
    // Disallow next rules from js since they interfer with ts rules
    'no-useless-catch': 'off',
    'lines-between-class-members': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': 'warn',
    // Ts Rules
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': ['error']
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
        paths: ['src']
      }
    }
  }
}

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  plugins: ['react', 'react-hooks'],
  extends: ['airbnb', 'eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    ...jsRules,
    ...reactRules
  },
  overrides: [
    // For Ts
    {
      ...tsConfig
    },
    // For Ts Unit Tests
    {
      ...tsConfig,
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        ...tsConfig.rules,
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/jsx-props-no-spreading': 'off',
        'max-classes-per-file': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'class-methods-use-this': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
        paths: ['src']
      }
    },
    react: {
      version: 'detect'
    }
  }
}
