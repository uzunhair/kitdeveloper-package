module.exports = {
	root: true,
	modules: {
		"bem-tools": {
			plugins: {
				create: {
					templateFolder: 'core/templates',
					techs: ["pug", "scss", "js"],
					levels: {
						"src/blocks/modules": {
							default: true
						},
						"src/blocks/sections": {
							techs: ["pug", "scss"],
						},
						"src/blocks/pages": {
							templates: {
								'json-ymodules': 'core/templates/pages/json.js',
								'pug-ymodules': 'core/templates/pages/pug.js'
							},
							techsTemplates: {
								'json': 'json-ymodules',
								'pug': 'pug-ymodules'
							},
							techs: ["pug", "json", "scss"],
						}
					}
				}
			}
		}
	}
};