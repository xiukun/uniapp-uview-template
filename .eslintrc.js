module.exports = {
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        node: true,
    },
    extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
    plugins: ['vue', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-alert': 0,
        'no-multi-spaces': 'error', // 禁止多个空格
        quotes: ['error', 'single'], // 使用单引号
    },
    ignorePatterns: ['node_modules/', 'build/', 'public/', 'src/uview-ui/*'],
};
