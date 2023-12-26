module.exports = {
	devServer:{
		proxy:{
			'/':{
				target:'https://api.bilibili.com/x/web-interface/dynamic/region',
				changeOrigin:true
			}
		}
	}
}