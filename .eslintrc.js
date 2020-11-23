module.exports = {
    env: {
        es2020: true,
        browser: true,
        node: true
    },
    extends: [
        'standard',
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'svelte3'
    ],
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3'
        }
    ],
    rules: {
        'accessor-pairs': 'warn',
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': ['error'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'camelcase': 'warn',
        'complexity': ['warn', 20],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': 'error',
        'curly': 'error',
        'default-case': 'warn',
        'dot-location': ['error', 'property'],
        'eqeqeq': 'error',
        'func-call-spacing': 'error',
        'func-style': 'warn',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'linebreak-style': ['error', 'unix'],
        'no-debugger': 'warn',
        'no-redeclare': ['error', { builtinGlobals: false }],
        'no-prototype-builtins': 'off',
        'no-alert': 'error',
        'no-empty-function': 'error',
        'no-fallthrough': 'error',
        'no-implicit-coercion': 'warn',
        'no-loop-func': 'error',
        'no-console': 'error',
        'no-trailing-spaces': 'warn',
        'no-var': 'error',
        'max-depth': 'error',
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'max-statements-per-line': ['error', { max: 1 }],
        'prefer-const': 'error',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
    },

    settings: {
        "svelte3/ignore-styles": () => false
    }
};
