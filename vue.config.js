module.exports = {
	devServer:{
		proxy:{
			'/':{
				target:'https://api.bilibili.com/x/web-interface/index/top/rcmd?version=1&ps=10',
				changeOrigin:true
			}
		}
	}
}