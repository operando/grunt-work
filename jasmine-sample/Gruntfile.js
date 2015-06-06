module.exports = function(grunt){
	//config
	grunt.initConfig({

		// package.jsonの設定
		pkg: grunt.file.readJSON("package.json"),

		watch:{
			files: ["src/js/*.js","spec/*.spec.js"],
			tasks:["jasmine"]
		},
		jasmine : {
			sample : {
				src : "src/js/fizzbuzz-node.js",
				options : {
					specs : "spec/*.spec.js",
					helpers : "spec/*Helper.js",
					keepRunner: true,
					junit: {
                    	path: "build/jasmine-test/"
                	}
                }
			}
		}
	});

	//Plugin
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	//tasks
	grunt.registerTask("default",["watch"]);
}