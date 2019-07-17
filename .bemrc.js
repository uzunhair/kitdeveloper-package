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
							techs: ["pug"],
						}
					}
				}
			}
		}
	}
};