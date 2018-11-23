/*
* @Author: fozero@126.
* @Date:   2018-11-23 16:33:40
* @Last Modified by:   fozero
* @Last Modified time: 2018-11-23 20:08:44
*/
// vue.config.js
// vue.config.js 是一个可选的配置文件,如存在它会被 @vue/cli-service 自动加载
module.exports = {
	baseUrl:'/',
	outputDir:'./dist',
	assetsDir:'',
	// indexPath:'',
    filenameHashing: false,
	pages:{
		index: {
	      // page 的入口
	      entry: 'src/pages/index/main.js',
	      // 模板来源
	      template: 'public/index.html',
	      // 在 dist/index.html 的输出
	      filename: 'index.html',
	      // 当使用 title 选项时，
	      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
	      title: 'Index Page',
	      // 在这个页面中包含的块，默认情况下会包含
	      // 提取出来的通用 chunk 和 vendor chunk。
	      chunks: ['chunk-vendors', 'chunk-common', 'index']
	    },
		page1: {
	      entry: 'src/pages/page1/main.js',
	      template: 'public/page1.html',
	      filename: 'page1.html',
	      title: 'Page1',
	      chunks: ['chunk-vendors', 'chunk-common', 'page1']
	    },
		page2: {
	      entry: 'src/pages/page2/main.js',
	      template: 'public/page2.html',
	      filename: 'page2.html',
	      title: 'Page1',
	      chunks: ['chunk-vendors', 'chunk-common', 'page2']
	    }
	},
	lintOnSave: true,
    runtimeCompiler: false,
    transpileDependencies: [],
    productionSourceMap: true,
    configureWebpack: {
      resolve: {
        alias: {
          vue$: 'vue/dist/vue.common.js',
        },
      },
      plugins: [],
    },
    // chainWebpack: function() {}
    css: {
      modules: false,
      extract: true,
      sourceMap: false,
      loaderOptions: {},
    },
}