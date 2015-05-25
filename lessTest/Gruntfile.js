module.exports = function(grunt){
	//config
	grunt.initConfig({

		// package.jsonの設定
		pkg: grunt.file.readJSON("package.json"),

		//変換の記載 src:変換元 dest:変換後
		less:{
			build:{
				src:"src/lesstest.less",
				dest:"build/styles.css"
			},
			build1:{
				options:{
					//圧縮の有効化
					compress:true
				},
				src:"src/style1.less",
				dest:"build/styles1.css"
			},
			build2:{
				src:"src/style2.less",
				dest:"build/styles2.css"
				// files:{
				// 	//複数のフォルダからさらに探すみたいな
				// 	//"build/styles1.css":"src/**/*/.less"
				// }
			}
		},
		csslint:{
			check:{
				//src:"build/styles.css"
				// 変数展開 lessのタスクのbuildのdestとなる
				src:"<%= less.build.dest %>"
			}
		},
		cssmin:{
			minimize:{
				options:{
					// templateの使用
					// Package.jsonの情報を使う 上で定義したpkgを使用 pkgのnameを使える
					banner: '/*! <%= pkg.name  %> <%= grunt.template.today("yyyy-mm-dd") %>*/'
				},
				files:{
					// 最小化するファイルの指定
					"build/styles.min.css":"<%= less.build.dest %>"
				}
			}
		},
		watch:{
			//livereloadで自動リロードの有効化
			// html側に<script type="text/javascript" src="http://192.168.1.100:35729/livereload.js"></script>を追加
			// ポートは35729と決まっている
			options:{
				livereload:true
			},
			// src配下のlessに変更があったら、taskを実行.
			files: "src/*.less",
			tasks:["less","cssmin"]
		},
		connect:{
			server:{
				options:{
					//hostnameは自分のIP
					port:8080,
					hostname:"192.168.1.100"
				}
			}
		}

	});

	//Plugin
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	// gruntを実行しなくても、指定したファイルに変更があった場合にタスクを実行する;
	grunt.loadNpmTasks('grunt-contrib-watch');
	// ローカルサーバを立てる
	grunt.loadNpmTasks('grunt-contrib-connect');


	//tasks
	//gruntコマンドをdefaultで立ち上げて、lessコメンドが上の指定したやつで動くみたいな
	// タスクを複数実行するなら[]で指定
	//watch前に各タスクを書く方がいい
	grunt.registerTask("default",["less","cssmin","connect","watch"]);

	// taskを定義するみたいな
	// targetを個別で実行したい場合「task:target」で指定
	// コマンドで「grunt task1」とかで実行
	grunt.registerTask("task1","less:build1");
	grunt.registerTask("task2","less:build2");
}