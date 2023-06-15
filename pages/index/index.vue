<!--index.wxml-->
<template>
	<view>
		<view class="searchbar">
			<!-- 用户头像 -->
			<view class="user-img">
				<image :src="'https://images.weserv.nl/?url='+usericon.imgurl"></image>
			</view>
			<!-- 搜索框 -->
			<!-- <image src="" mode=""></image> -->
			<input type="text" id="searchs" placeholder="请输入" />
			<!-- <u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search> -->

			<!-- 首页功能按钮 -->
			<view class="globbtn">
				<image src="" mode=""></image>
				<image src="" mode=""></image>
				<image src="" mode=""></image>
			</view>
		</view>



		<!-- 导航栏 -->
		<view class="navbar">
			<scroll-view scroll-x="true" style="display: flex;	white-space: nowrap;">
				<view style="display: inline-block; margin-left: 25rpx;">首页</view>
				<view style="display: inline-block; margin-left: 25rpx;">番剧</view>
				<view style="display: inline-block; margin-left: 25rpx;">直播</view>
				<view style="display: inline-block; margin-left: 25rpx;">游戏</view>
				<view style="display: inline-block; margin-left: 25rpx;">会员购</view>
				<view style="display: inline-block; margin-left: 25rpx;">消息</view>
				<view style="display: inline-block; margin-left: 25rpx;">创作</view>
				<view style="display: inline-block; margin-left: 25rpx;">春日</view>
				<view style="display: inline-block; margin-left: 25rpx;">赛事</view>
				<view style="display: inline-block; margin-left: 25rpx;">下载客户端</view>
			</scroll-view>
		</view>


		<!-- swiper -->
		<u-swiper style="width: 95%; height: 200px; margin: 20px auto; border-radius: 5px; overflow: hidden;"
			:indicator-dots="true" :title="true" :list="imgUrl" :effect3d="true"
			:autoplay="true">
		</u-swiper>


		<!-- 视频列表 -->
		<block v-for="(item,index) in videoUrl" :key="index">
			<view class="videos" @click="gotovideo">

				<view class="v-left">

					<view class="v-left-img">
						<image :src="item.src1" style="width: 100%; height: 100%;border-radius: 20rpx;" />
					</view>

					<view class="v-left-word">
						{{item.word1}}
					</view>
				</view>
				<view class="v-right">

					<view class="v-right-img">
						<image :src="item.src2" style="width: 100%; height: 100%;border-radius: 20rpx;" />
					</view>

					<view class="v-right-word">
						{{item.word2}}
					</view>
				</view>
			</view>
		</block>
	</view>
	</view>
</template>

<script>
	import {
		onMounted
	} from "vue"
	export default {
		name: "index",
		data() {
			return {
				imgUrl: [
					{image:'/static/lunbo/1.PNG',title:'111'},
					"/static/lunbo/2.JPG",
					"/static/lunbo/3.png",
					"/static/lunbo/4.png"
				],
				videoUrl: [{
					// src1:"https://i1.hdslb.com/bfs/archive/f3c919cb64825bdf59ebd9bfdf24d0ba343d761a.jpg",
					src1: "/static/indexs/1.jpg",
					word1: "原来 靠时间放下的人 是经不起再一次见面的",
					// src2:"https://i2.hdslb.com/bfs/archive/49f906f9e0778720bfd097d05afa30d4422fffb2.jpg",
					src2: "/static/indexs/2.jpg",
					word2: "这一届的学生脑洞怎么这么大"
				}, {
					// src1:"https://i2.hdslb.com/bfs/archive/81b598755898449ec628f8c8e743ada3fcae4348.jpg",
					src1: "/static/indexs/3.jpg",
					word1: "鸡你．但是是《Da Capo 》",
					// src2:"https://i1.hdslb.com/bfs/archive/bb84221b9495813b657fca868f84dcafc59f46d7.jpg",
					src2: "/static/indexs/4.jpg",
					word2: "制作烧了两个亿！这些F1够你玩到GTA6！"
				}, {
					// src1:"https://i1.hdslb.com/bfs/archive/138c6a95b92ae9271fc3dcd8a97534f02b7ed64c.jpg",
					src1: "/static/indexs/5.jpg",
					word1: "【PR转场】无需任何插件！够你用一辈子的50个无缝丝滑转场！",
					// src2:"https://i2.hdslb.com/bfs/archive/97f69a4c7258709309c87cf37044780a0f689177.jpg",
					src2: "/static/indexs/6.jpg",
					word2: "【2023年最新免费加速器】我们决定从付费转为免费！"
				}, {
					// src1:"https://i0.hdslb.com/bfs/live/new_room_cover/ba016151bb68847f388a90ab0e7cff45fb0cac59.jpg",
					src1: "/static/indexs/7.jpg",
					word1: "【新v】电竞少女，人间四月",
					// src2:"https://i0.hdslb.com/bfs/archive/b3e56e6ea726fcf64b8605c328dbe22287a9da27.jpg",
					src2: "/static/indexs/8.jpg",
					word2: "水果忍者爆杀dinner特效"
				}, {
					// src1:"https://i2.hdslb.com/bfs/archive/7311dcb5c2163a09b34bdf358d66b9ef6e145c9e.jpg",
					src1: "/static/indexs/9.jpg",
					word1: "本来还挺喜欢玩王者荣耀的……",
					// src2:"https://i1.hdslb.com/bfs/archive/ad675b47b656f6517750193babfb72abd12415e9.jpg",
					src2: "/static/indexs/10.jpg",
					word2: "若不是你突然闯进我鸡窝……"
				}],
				// 用户头像
				usericon: [],
				// 跳转到用户详情
			}
		},
		mounted() {
			uni.getStorage({
				key: 'usericon',
				success: (res) => {
					console.log(res);
					this.usericon = res.data;
					console.log(this.usericon);
				}
			})
		},
		methods:{
			gotovideo() {
				uni.request({
					url:'http://api.bilibili.cn/recommend',
					data:{
						tid:1
					},
					method:'GET',
					success: (res) => {
						console.log(res.data);
					}
				}),
				uni.navigateTo({
					url:'/pages/video/video'
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	/* 全局设置 */
	page {
		margin: 0;
		padding: 0;
	}

	/* 上方区域 */
	.searchbar {
		width: 100%;
		height: 100px;
		background-color: salmon;

		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	/* 用户头像 */
	.user-img {
		width: 50px;
		height: 50px;
	}

	.user-img>image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	/* 输入框 */
	#searchs {
		width: 180px;
		height: 40px;
		background-color: #fff;
		border-radius: 50px;
	}

	/* 首页功能按钮 */
	.globbtn {
		width: 120px;
		height: 40px;
		background-color: pink;
		list-style: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.globbtn>image {
		width: 30px;
		height: 30px;
		background-color: skyblue;
	}

	/* 去除横向滚动条的滑动条 */
	/deep/ ::-webkit-scrollbar {
		display: block;
		width: 0px !important;
		height: 0px !important;
	}

	.navbar {
		font-size: 18px;
		margin-top: 5px;
	}

	/* 轮播 */
	// .swiper {
	// 	width: 100%;
	// }

	// .swiper-item {
	// 	width: 95%;
	// }

	// .swiper-item image {
	// 	width: 100%;
	// 	height: 200px;
	// 	display: flex;
	// 	justify-content: center;
	// }
	

	/* 视频列表 */
	.videos {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top: 20rpx;
	}

	.v-left {
		width: 45%;
		height: 260rpx;
		/* background-color: pink; */
		border-radius: 20rpx;
	}

	.v-left-img {
		height: 190rpx;
	}

	.v-left-word {
		font-size: 25rpx;
	}

	.v-right {
		width: 45%;
		height: 260rpx;
		/* background-color: skyblue; */
		border-radius: 20rpx;
	}

	.v-right-img {
		height: 190rpx;
	}

	.v-right-word {
		width: 100%;
		font-size: 25rpx;
		/* background-color: pink; */
	}
</style>