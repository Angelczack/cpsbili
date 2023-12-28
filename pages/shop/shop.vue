<template>
	<view>
		<view class="top">
			<view class="top-left">
				<view style="white-space: nowrap; margin-left: 20rpx; font-weight: 900;">会员购</view>
				<view style="white-space: nowrap; margin-left: 20rpx; font-size: 28rpx; color: #999; font-weight: 600;">
					官方直营 • 正品保障</view>
			</view>

			<view class="top-right">
				<view class="icon-box">
					<view style="width: 40rpx; height: 40rpx;">
						<image src="/static/shop/box.png" mode="" style="width: 100%; height: 100%;" />
					</view>
					<view style="width: 40rpx; height: 40rpx;" @click="ToShoppingcart">
						<image src="/static/shop/shopping.png" mode="" style="width: 100%; height: 100%;" />
					</view>
					<view style="width: 40rpx; height: 40rpx;" @click="ToMy">
						<image src="/static/shop/me.png" mode="" style="width: 100%; height: 100%;" />
					</view>
					<!-- icon-box结尾 -->
				</view>
			</view>
			<!-- top结尾 -->
		</view>

		<!-- 搜索 -->
		<view class="search">
			<input type="text"
				style="width: 70%; height: 20rpx; border: 1rpx solid #ff9bb9; position: relative; padding-left: 80rpx; padding-top: 15rpx; padding-bottom: 15rpx; border-radius: 20rpx;"
				placeholder="魔力奖励限时进阶" placeholder-style="font-szie:15px;" />
			<icon type="search" color="#ff9bb9"
				style="position: absolute; left: 40rpx; top:125rpx; width: 100%; height: 100%;" />

			<view>
				<text decode="true"
					style="text-align: center; display: flex; justify-content: center; font-weight: 600; font-style: italic;">ALL\n</text>
				<text decode="true"
					style="font-size: 25rpx; display: flex; justify-content: center; font-weight: 900;">分类</text>
			</view>

		</view>




		<!-- swpier for type -->
		<swiper style="width: 100%; height: 180rpx; margin-top: 20rpx;" display-multiple-items="5">

			<block v-for="(item,index) in contUrl" :key="index">
				<swiper-item style="width:200rpx; height: 100rpx; display:flex; justify-content: space-around;">
					<view class="cont">
						<view class="cont-img">
							<image :src="item.src" style="width: 100%; height: 100%; border-radius: 50%;" />
						</view>

						<view class="cont-word">
							{{item.word}}
						</view>
					</view>
				</swiper-item>

			</block>

		</swiper>




		<!-- 中间左右 -->
		<view class="con">
			<view class="con-left">
				<swiper style="width: 100%; height: 270rpx; border-radius: 30rpx; overflow: hidden;"
					indicator-dots="true" indicator-color="#666" indicator-active-color="#fff" autoplay interval="2000"
					circular>
					<block v-for="(item,index) in conUrl" :key="index">
						<swiper-item style="width: 100%; height: 270rpx; border-radius: 40rpx; overflow: hidden;">
							<image :src="item" mode="aspectFit"
								style="width: 100%; height: 100%; border-radius: 40rpx; overflow: hidden;" />
						</swiper-item>
					</block>
				</swiper>
			</view>

			<view class="con-right">
				<image src="/static/shop/conimg/con-right.png"
					style="width:100%; height:92%; border-radius: 20rpx; overflow: hidden; margin-top: 11rpx;" />
				<!-- <image src="/static/shop/conimg/1.png" mode=""></image> -->
			</view>
		</view>



		<!-- listx -->
		<view class="listx" v-for="(item,index) in imgs" :key="index">
			<view class="listx-left">
				<view style="width:45%;height:270rpx; background-color: #fff; border-radius: 20rpx;">
					<text>今日上新</text>

					<view style="width: 100%; height: 270rpx; margin-top: 20rpx;">
						<image :src="item.src1" mode="widthFix" style="width: 80%; height: 70%;" />
					</view>

				</view>
				<view style="width:45%;height:270rpx; background-color: #fff; border-radius: 20rpx;">
					<text>抢先看</text>

					<view style="width: 100%; height: 270rpx; margin-top: 10rpx;">
						<image :src="item.src2" mode="aspectFit"
							style="width: 80%; height: 70%; border-radius: 15rpx;" />
					</view>
				</view>
			</view>

			<view class="listx-right">
				<view style="width:45%;height:270rpx; background-color: #fff; border-radius: 20rpx;">
					<text>人气排行</text>

					<view style="width: 100%; height: 270rpx; margin-top: 10rpx;">
						<image :src="item.src3" mode="aspectFit"
							style="width: 80%; height: 70%; border-radius: 15rpx;" />
					</view>
				</view>
				<view style="width:45%;height:270rpx; background-color: #fff; border-radius: 20rpx;">
					<text>签到有礼</text>

					<view style="width: 100%; height: 270rpx;">
						<image :src="item.src4" mode="aspectFit"
							style="width: 80%; height: 70%; border-radius: 15rpx;" />
					</view>
				</view>

				<!-- right结尾 -->
			</view>
			<!-- list结尾 -->
		</view>

		<!-- items -->
		<text class="shops-title">商品详情</text>

		<!-- <view class="shopItems" v-for="(item,index) in shops" :key="index">
		
		  <view class="shops-left">
		    <view class="shops-left-img">
		      <image :src="item.src1" mode="widthFix" style="width:95%; height:95%;"/>
		    </view>
		    <view class="shops-left-word">{{item.word1}}</view>
		  </view>
		
		  <view class="shops-right">
		    <view class="shops-right-img">
		      <image :src="item.src2" mode="aspectFill" style="width: 95%; height: 95%;"/>
		    </view>
		    <view class="shops-right-word">{{item.word2}}</view>
		  </view>
		
		</view> -->

<view class="wrap">
		<!-- <u-button @click="clear">清空列表</u-button> -->
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="gotoItemDetail(item.Itemlists)">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<u-lazy-load threshold="-450" border-radius="10" :image="'https://images.weserv.nl/?url=' + item.image" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-price">
						{{item.price}}元
					</view>
		
					<view class="demo-shop">
						{{item.shop}}
					</view>
				</view>
			</template>
			
			<template v-slot:right="{rightList}">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="gotoItemDetail(item.Itemlists)">
					<u-lazy-load threshold="-450" border-radius="10" :image="'https://images.weserv.nl/?url=' + item.image" :index="index"></u-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
					<view class="demo-price">
						{{item.price}}元
					</view>
		
					<view class="demo-shop">
						{{item.shop}}
					</view>
				</view>
			</template>
		</u-waterfall>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
	</view>

		<!-- 自带结尾 -->
	</view>
</template>

<script>
	export default {
		name: "shop",
		data() {
			return {
				contUrl: [{
					src: "/static/dongtai/s7.JPG",
					word: "Angelcfax"
				}, {
					src: "/static/dongtai/s1.JPG",
					word: "price"
				}, {
					src: "/static/dongtai/s2.JPG",
					word: "喵露朵喵喵"
				}, {
					src: "/static/dongtai/s4.JPG",
					word: "Angelczack"
				}, {
					src: "/static/dongtai/s3.JPG",
					word: "Iwan"
				}, {
					src: "/static/dongtai/s6.JPG",
					word: "wilkston"
				}, {
					src: "/static/dongtai/s5.JPG",
					word: "gray"
				}],
				conUrl: [
					"/static/shop/conimg/1.png",
					"/static/shop/conimg/2.png"
				],
				imgs: [{
					src1: 'https://img.alicdn.com/imgextra/i2/50454026/O1CN01JS13u31fbxFsMFwUn_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
					src2: 'https://img.alicdn.com/imgextra/i4/117471323/O1CN01KP01S81Ldyk7frvHL_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
					src3: 'https://img.alicdn.com/imgextra/i2/13796702/O1CN01NePTZh1zNZGJEsu3x_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
					src4: 'https://img.alicdn.com/imgextra/i2/4017354359/O1CN01xKll2c1i4TGi5njPG_!!2-saturn_solar.png_468x468q75.jpg_.webp'
				}],
				// 商品详情
				loadStatus: 'loadmore',
				flowList: [],
				list: [
					{
						price: 35,
						title: 'BILIBILIGOODS 2233 时空战姬系列 亚克力挂件',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/vendor/53/4e/534ec45725c86754b9c42fb646f8be16.png',
						Itemlists:[
							{
								Ititle:'BILIBILIGOODS 2233 时空战姬系列 亚克力挂件',
								ItemImg:[{
									src:'/static/shop/item-1/1-1.png'
								},
								{
									src:'/static/shop/item-1/1-2.png'
								},
								{
									src:'/static/shop/item-1/1-3.png'
								},
								{
									src:'/static/shop/item-1/1-4.png'
								},
								{
									src:'/static/shop/item-1/1-5.png'
								}],
								// 定金
								IpriceL:50,
								// 全款
								IpriceW:null,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:244,
								//材质
								Ithin:'PVC'
							}]
								
					},
					{
						price: 28,
						title: 'bilibiliGoods 癸卯兔年系列 2233小电视 贴纸套装',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/mall/46/ff/46ff0890984088dcc08db60785964567.png',
						Itemlists:[
							{
								Ititle:'bilibiliGoods 癸卯兔年系列 2233小电视 贴纸套装',
								ItemImg:[{
									src:'/static/shop/item-2/2-1.png'
								},
								{
									src:'/static/shop/item-2/2-2.jpg'
								},
								{
									src:'/static/shop/item-2/2-3.jpg'
								},
								{
									src:'/static/shop/item-2/2-4.jpg'
								},
								{
									src:'/static/shop/item-2/2-5.jpg'
								}],
								// 定金
								IpriceL:null,
								// 全款
								IpriceW:25,
								// 尺寸
								Isize:45,
								// 比例
								ptp:'',
								//官方价
								norprice:244,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 75,
						title: '哔哩哔哩 幻星集 2233 棉花娃娃站姿20CM',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/vendor/15/2b/152b59a67b29264fa816193d784af5f0.png',
						Itemlists:[
							{
								Ititle:'哔哩哔哩 幻星集 2233 棉花娃娃站姿20CM',
								ItemImg:[{
									src:'/static/shop/item-3/3-1.jpg'
								},
								{
									src:'/static/shop/item-3/3-2.jpg'
								},
								{
									src:'/static/shop/item-3/3-3.jpg'
								},
								{
									src:'/static/shop/item-3/3-4.jpg'
								},
								{
									src:'/static/shop/item-3/3-5.jpg'
								}],
								// 定金
								IpriceL:12,
								// 全款
								IpriceW:120,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:244,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 75,
						title: 'BILIBILIGOODS 哔哩哔哩幻星集 2233 青幻之镰&星耀使魔 12周年纪念 手办 通常版',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/mall/30/d7/30d7132eb3afacefa77e16df39518cc9.png',
						Itemlists:[
							{
								Ititle:'BILIBILIGOODS 哔哩哔哩幻星集 2233 青幻之镰&星耀使魔 12周年纪念 手办 通常版',
								ItemImg:[{
									src:'/static/shop/item-4/4-1.png'
								},
								{
									src:'/static/shop/item-4/4-2.png'
								},
								{
									src:'/static/shop/item-4/4-3.png'
								},
								{
									src:'/static/shop/item-4/4-4.png'
								},
								{
									src:'/static/shop/item-4/4-5.png'
								}],
								// 定金
								IpriceL:null,
								// 全款
								IpriceW:75,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:244,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 12,
						title: 'BILIBILIGOODS 2233 时空战姬系列 收藏闪卡',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/vendor/58/b5/58b50b56d0ce8c3b23d9ae245d89ac37.png',
						Itemlists:[
							{
								Ititle:'BILIBILIGOODS 2233 时空战姬系列 收藏闪卡',
								ItemImg:[{
									src:'/static/shop/item-5/5-1.png'
								},
								],
								// 定金
								IpriceL:null,
								// 全款
								IpriceW:12,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:244,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 299,
						title: 'BANPRESTO ESPRESTO系列 哔哩哔哩 22 33 小电视 景品手办 附独家特典',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/mall/de/32/de320bbd58f651e7ba624340f83a65ce.png',
						Itemlists:[
							{
								Ititle:'BANPRESTO ESPRESTO系列 哔哩哔哩 22 33 小电视 景品手办 附独家特典',
								ItemImg:[{
									src:'/static/shop/item-6/6-1.png'
								},
								{
									src:'/static/shop/item-6/6-2.png'
								},
								{
									src:'/static/shop/item-6/6-3.png'
								},
								{
									src:'/static/shop/item-6/6-4.png'
								},
								{
									src:'/static/shop/item-6/6-5.png'
								}],
								// 定金
								IpriceL:299,
								// 全款
								IpriceW:299,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:244,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 19,
						shop: 'bilibili会员购',
						title: 'bilibiliGoods 癸卯兔年系列 2233 光栅徽章',
						image: 'https://i0.hdslb.com/bfs/mall/mall/46/6c/466cc27a69c042f3c8331f27048e67b1.png',
						Itemlists:[
							{
								Ititle:'bilibiliGoods 癸卯兔年系列 2233 光栅徽章',
								ItemImg:[{
									src:'/static/shop/item-7/7-1.png'
								},
								{
									src:'/static/shop/item-7/7-2.jpg'
								},
								{
									src:'/static/shop/item-7/7-3.jpg'
								},
								{
									src:'/static/shop/item-7/7-4.jpg'
								},
								{
									src:'/static/shop/item-7/7-5.jpg'
								}],
								// 定金
								IpriceL:19,
								// 全款
								IpriceW:19,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:19,
								//材质
								Ithin:'金属'
							}]
					},
					{
						price: 23,
						shop: 'bilibili会员购',
						title: 'BILIBILIGOODS 2233 睡衣派对系列 金属徽章套装',
						image: 'https://i0.hdslb.com/bfs/mall/vendor/09/98/0998becd19f08e1688a53c023d85bdb5.png',
						Itemlists:[
							{
								Ititle:'BILIBILIGOODS 2233 睡衣派对系列 金属徽章套装',
								ItemImg:[{
									src:'/static/shop/item-8/8-1.png'
								},
								{
									src:'/static/shop/item-8/8-2.jpg'
								},
								{
									src:'/static/shop/item-8/8-3.jpg'
								},
								{
									src:'/static/shop/item-8/8-4.jpg'
								},
								{
									src:'/static/shop/item-8/8-5.jpg'
								}],
								// 定金
								IpriceL:23,
								// 全款
								IpriceW:23,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:244,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 77,
						shop: 'bilibili会员购',
						title: 'bilibiliGoods 癸卯兔年系列 小电视 毛绒挂件&抱枕',
						image: 'https://i0.hdslb.com/bfs/mall/vendor/be/2f/be2f5b8e949a87ddc2dacf1e9d96d0f3.png',
						Itemlists:[
							{
								Ititle:'bilibiliGoods 癸卯兔年系列 小电视 毛绒挂件&抱枕',
								ItemImg:[{
									src:'/static/shop/item-9/9-1.png'
								},
								{
									src:'/static/shop/item-9/9-2.jpg'
								},
								{
									src:'/static/shop/item-9/9-3.jpg'
								},
								{
									src:'/static/shop/item-9/9-4.jpg'
								},
								{
									src:'/static/shop/item-9/9-5.jpg'
								}],
								// 定金
								IpriceL:77,
								// 全款
								IpriceW:77,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:77,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 122,
						title: 'BILIBILIGOODS 2233 人生百戏系列 高帮帆布鞋',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/vendor/71/fe/71fe2c2683130da2fbfcfc18fac0cd89.png',
						Itemlists:[
							{
								Ititle:'BILIBILIGOODS 2233 人生百戏系列 高帮帆布鞋',
								ItemImg:[{
									src:'/static/shop/item-10/10-1.png'
								},
								{
									src:'/static/shop/item-10/10-2.jpg'
								},
								{
									src:'/static/shop/item-10/10-3.jpg'
								},
								{
									src:'/static/shop/item-10/10-4.jpg'
								},
								{
									src:'/static/shop/item-10/10-5.jpg'
								}],
								// 定金
								IpriceL:122,
								// 全款
								IpriceW:122,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:122,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 58,
						title: '无锡·ACG乐鱼 · 动漫宅舞大赛',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/openplatform/202305/Ca8DpIq71684724120367.jpeg@350w_466h.jpeg',
						Itemlists:[
							{
								Ititle:'BILIBILIGOODS 2233 时空战姬系列 亚克力挂件',
								ItemImg:[{
									src:'/static/shop/1.PNG'
								},
								{
									src:'/static/shop/2.PNG'
								},
								{
									src:'/static/shop/3.PNG'
								},
								{
									src:'/static/shop/4.PNG'
								},
								{
									src:'/static/shop/5.PNG'
								}],
								// 定金
								IpriceL:50,
								// 全款
								IpriceW:null,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:244,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 23,
						title: '哔哩哔哩 小电视2233 口袋本贴纸便签套装',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/vendor/c4/4b/c44bcf11f7391b1636032c14842cf4c7.png',
						Itemlists:[
							{
								Ititle:'哔哩哔哩 小电视2233 口袋本贴纸便签套装',
								ItemImg:[{
									src:'/static/shop/item-12/12-1.png'
								},
								{
									src:'/static/shop/item-12/12-2.jpg'
								},
								{
									src:'/static/shop/item-12/12-3.jpg'
								},
								{
									src:'/static/shop/item-12/12-4.jpg'
								},
								{
									src:'/static/shop/item-12/12-5.jpg'
								}],
								// 定金
								IpriceL:23,
								// 全款
								IpriceW:23,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:23,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 657,
						title: 'BILIBILIGOODS 2233 时空战姬系列 魔方',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/vendor/d0/18/d018135a311c7643cf679114f9cb7fd4.png',
						Itemlists:[
							{
								Ititle:'BILIBILIGOODS 2233 时空战姬系列 魔方',
								ItemImg:[{
									src:'/static/shop/item-13/13-1.png'
								},
								{
									src:'/static/shop/item-13/13-2.jpg'
								},
								{
									src:'/static/shop/item-13/13-3.jpg'
								},
								{
									src:'/static/shop/item-13/13-4.jpg'
								},
								{
									src:'/static/shop/item-13/13-5.jpg'
								}
								],
								// 定金
								IpriceL:233,
								// 全款
								IpriceW:657,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:680,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 899,
						title: 'BeBox 2233×中央芭蕾舞团联名手办 Swan Lake Ver. 附特典 哔哩哔哩独家 含AR展示',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/mall/d4/ad/d4add944955c7fc4ac5ba1a45433ba0c.png',
						Itemlists:[
							{
								Ititle:'BeBox 2233×中央芭蕾舞团联名手办 Swan Lake Ver. 附特典 哔哩哔哩独家 含AR展示',
								ItemImg:[{
									src:'/static/shop/item-14/14-1.png'
								},
								{
									src:'/static/shop/item-14/14-2.jpg'
								},
								{
									src:'/static/shop/item-14/14-3.jpg'
								},
								{
									src:'/static/shop/item-14/14-4.jpg'
								},
								{
									src:'/static/shop/item-14/14-5.jpg'
								}],
								// 定金
								IpriceL:899,
								// 全款
								IpriceW:899,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:899,
								//材质
								Ithin:'PVC'
							}]
					},
					{
						price: 249,
						title: 'BILIBILIGOODS 2233 时空战姬 真无线TWS降噪蓝牙耳机 M2',
						shop: 'bilibili会员购',
						image: 'https://i0.hdslb.com/bfs/mall/vendor/b3/26/b3260bd074300caae51a14a8381495fa.png',
						Itemlists:[
							{
								Ititle:'BILIBILIGOODS 2233 时空战姬 真无线TWS降噪蓝牙耳机 M2',
								ItemImg:[{
									src:'/static/shop/item-15/15-1.png'
								},
								{
									src:'/static/shop/item-15/15-2.jpg'
								},
								{
									src:'/static/shop/item-15/15-3.jpg'
								},
								{
									src:'/static/shop/item-15/15-4.jpg'
								},
								{
									src:'/static/shop/item-15/15-5.jpg'
								}],
								// 定金
								IpriceL:249,
								// 全款
								IpriceW:249,
								// 尺寸
								Isize:30,
								// 比例
								ptp:'',
								//官方价
								norprice:249,
								//材质
								Ithin:'PVC'
							}]
					},
				]		
			}
		},
		onLoad() {
			this.addRandomData();
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			// 跳转到商品详情页
			gotoItemDetail(Itemlists,ItemImg) {
				uni.navigateTo({
					url:'/pages/shop/ItemDetail'
				})
				// console.log(Itemlists)
				uni.setStorage({
					key: 'Itemlists',
					data: Itemlists,
					success: (res) => {
						console.log(res);
					}
				})
				
				
			},
			// 跳转到我的页面
			ToMy() {
				uni.switchTab({
					url:'/pages/my/my'
				})
			},
			addRandomData() {
				for(let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			clear() {
				this.$refs.uWaterfall.clear();
			},
			// 跳转到购物车页
			ToShoppingcart() {
				uni.navigateTo({
					url: '/pages/shop/shoppingcart'
				});
			}
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		}
	}
</script>
<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>
<style scoped>
	/* pages/shop/shop.wxss */

	/* 全局样式 */
	page {
		background-color: rgb(240, 242, 242)
	}

	.top {
		width: 100%;
		height: 100rpx;
		/* background-color: darkcyan; */
		display: flex;
		justify-content: space-between;
	}

	.top-left {
		width: 40%;
		height: 60rpx;
		display: flex;
		align-items: center;
	}

	.top-right {
		width: 40%;
		height: 60rpx;
		/* background-color: darkcyan; */
		/* overflow: hidden; */
	}

	.icon-box {
		width: 70%;
		height: 60rpx;
		/* background-color: darkgoldenrod; */
		float: right;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}


	/* 搜索 */
	.search {
		width: 100%;
		height: 100rpx;
		/* background-color: pink; */
		display: flex;
		align-items: center;
		justify-content: space-around;
	}



	/* swiper for type */
	.cont-img {
		width: 120rpx;
		height: 120rpx;
		/* background-color: aquamarine; */
	}

	.cont-word {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120rpx;
		height: 40rpx;
		/* background-color: #ff9bb9; */
		font-size: 12px;
	}

	/* 中间左右 */
	.con {
		width: 100%;
		/* background-color: darkcyan; */
		display: flex;
		justify-content: space-between;
	}

	.con-left {
		width: 46%;
		height: 270rpx;
		/* background-color: darkgoldenrod; */
		margin-left: 15rpx;
	}

	.con-right {
		width: 46%;
		height: 270rpx;
		/* background-color: darkgreen; */
		margin-right: 15rpx;
	}

	/* listx */
	.listx {
		width: 100%;
		height: 270rpx;
		margin-top: 20rpx;
		/* background-color: pink; */
		display: flex;
	}

	.listx-left {
		display: flex;
		width: 50%;
		height: 270rpx;
		text-align: center;
		display: flex;
		justify-content: space-around;
	}

	.listx-right {
		display: flex;
		width: 50%;
		height: 270rpx;
		text-align: center;
		display: flex;
		justify-content: space-around;
	}

	/* items */
	.shopItems {
		width: 100%;
		height: 420rpx;
		/* background-color: #fff; */
		display: flex;
		justify-content: space-around;
	}

	.shops-title {
		display: block;
		margin: 10px;
		font-size: 35rpx;
		font-weight: 900;
		margin-bottom: 10rpx;
	}

	.shops-left {
		width: 45%;
		height: 400rpx;
		margin-top: 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
	}

	.shops-left .shops-left-img {
		width: 100%;
		height: 300rpx;
	}

	.shops-left-word {
		font-size: 30rpx;
		width: 300rpx;
		height: 80rpx;
		margin: -20rpx auto;
	}

	.shops-right {
		width: 45%;
		height: 400rpx;
		margin-top: 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
	}

	.shops-right .shops-right-img {
		width: 100%;
		height: 300rpx;
	}

	.shops-right-word {
		font-size: 30rpx;
		width: 300rpx;
		height: 80rpx;
		margin: -20rpx auto;
	}
</style>

<style lang="scss" scoped>
	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}
	
	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}
	
	.demo-image {
		width: 100%;
		border-radius: 4px;
	}
	
	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}
	
	.demo-tag {
		display: flex;
		margin-top: 5px;
	}
	
	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}
	
	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}
	
	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}
	
	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>