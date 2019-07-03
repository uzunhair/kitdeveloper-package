"use strict";

const path = {
	pug: {
		src: [
			"src/pug/*.pug",
			"!src/pug/_example.pug",
			],
		dist: "dist",
		watch: "src/pug/**/*.*"
	},
	scripts: {
		seperate: {
			src: [
				"src/js/separate/*.js",
				"node_modules/holderjs/holder.js"
			]
		},
		concat: {
			src: [
				"node_modules/popper.js/dist/umd/popper.min.js",
				"src/js/concat/bootstrap/util.js",
				"src/js/concat/bootstrap/alert.js",
				"src/js/concat/bootstrap/button.js",
				"src/js/concat/bootstrap/carousel.js",
				"src/js/concat/bootstrap/collapse.js",
				"src/js/concat/bootstrap/dropdown.js",
				"src/js/concat/bootstrap/modal.js",
				"src/js/concat/bootstrap/scrollspy.js",
				"src/js/concat/bootstrap/tab.js",
				"src/js/concat/bootstrap/tooltip.js",
				"src/js/concat/bootstrap/popover.js",
				//"node_modules/owl.carousel/dist/owl.carousel.js",
				//"node_modules/jquery.dotdotdot/dist/jquery.dotdotdot.js",
				"src/js/concat/*.js",
				"src/js/setting.js"
			],
		},
		dist: "dist/js",
		watch: "src/js/**/*.js"
	},
	styles: {
		theme: {
			src: "src/sass/theme.scss",
			watch: [
				"src/sass/theme.scss",
				"src/sass/theme/**/*.scss",
				"src/sass/config/*.scss"
			],
		},
		vendors: {
			src: "src/sass/system.scss",
			watch: [
				"src/sass/system.scss",
				"src/sass/vendors/**/*.scss",
				"src/sass/config/*.scss"
			],
		},
		production: {
			src: "src/sass/app.scss",
		},
		dist: "dist/css",

	},
	images: {
		src: [
			"src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
			"!src/img/svg/*.svg",
			"!src/img/svg-icon/*.svg",
			"!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
		],
		dist: "dist/img",
		watch: [
			"src/img/**/*.+(png|jpg|jpeg|gif|svg)",
			"!src/img/svg*/**"
		]
	},
	favicons: {
		src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
		dist: "./dist/img/favicons/",
	},
	sprites: {
		src: "src/img/svg-icon/*.svg",
		dist: "src/img/svg/",
		watch: "src/fonts/**/*.*"
	},
	fonts: {
		src: "src/fonts/**/*.*",
		dist: "dist/fonts",
		watch: "src/img/svg-icon/*.svg",
	},
	clean: {
		dist: "dist"
	}
};

export { path }