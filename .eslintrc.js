const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
		// 'plugin:vue/recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
	// plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-types': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/valid-v-slot': 'off',
		'no-unused-vars': isProd ? 'off' : 'warn'
  },
}
