module.exports = {
	extends: ["verit"],
	rules: {
		"no-undef": 0,
		"@typescript-eslint/camelcase": 0,
		// "padded-blocks": ["error", "always", { allowSingleLineBlocks: true }],
		"no-unused-vars": 0, // covered by TypeScript
		"@typescript-eslint/no-empty-function": 1,
		// "@typescript-eslint/strict-boolean-expressions": 2
	},
	parserOptions: { project: "tsconfig.json" },
	settings: {
		react: {
			pragma: "React",
			version: "16.2",
		},
	},
};
