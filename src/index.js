export default {
	extends: [
		'stylelint-config-recommended',
		'stylelint-config-standard',
		'stylelint-config-prettier',
	],
	defaultSeverity: 'error',
	reportDescriptionlessDisables: [true],
	reportInvalidScopeDisables: [true],
	reportNeedlessDisables: [true],
	rules: {},
}
