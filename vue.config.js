module.exports = {
	devServer:{
		proxy:{
			'/':{
				target:'https://api.bilibili.com/x/web-interface/popular?ps=10&pn=1',
				changeOrigin:true
			}
		}
	}
}