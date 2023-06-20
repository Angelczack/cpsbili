<!--index.wxml-->
<template>
	<view>

		<!-- tips update -->
		<u-modal v-model="show" :show-cancel-button="true" confirm-text="升级" title="发现新版本" @cancel="cancel"
			@confirm="confirm">
			<view class="u-update-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>



		<u-popup mode="bottom" v-model="isshow" :mode="right" mask-close-able="true" closeable="true"
			close-icon-pos="top-right">
			<view class="content">
				<scroll-view scroll-y="true" style=" width:160px; height: 100vh;">
					<view style="display: flex; align-items: center;">
						<!-- 用户头像 -->
						<view class="user-img" @click="isshow = true;">
							<image :src="'https://images.weserv.nl/?url='+usericon.imgurl"></image>
						</view>
						
						<text style="margin-top: 50px; font-size: 14px; font-weight: 900;">Angelczack</text>
					</view>
					
					<ul class="tbtns" style="width: 100%; display: flex; flex-direction: column; align-items: center; padding: 0; margin-top: 20px;">
						<li style="width:100%; height:30px; display:flex; justify-content: start; align-items: center; margin-left:10px; font-size:16px; font-weight:900;">首页</li>
						<li style="width:100%; height:30px; display:flex; justify-content: start; align-items: center; margin-left:10px; font-size:16px; font-weight:900;">番剧</li>
						<li style="width:100%; height:30px; display:flex; justify-content: start; align-items: center; margin-left:10px; font-size:16px; font-weight:900;">直播</li>
						<li style="width:100%; height:30px; display:flex; justify-content: start; align-items: center; margin-left:10px; font-size:16px; font-weight:900;">设置</li>
						<li style="width:100%; height:30px; display:flex; justify-content: start; align-items: center; margin-left:10px; font-size:16px; font-weight:900;">动态</li>
					</ul>
				</scroll-view>
			</view>
		</u-popup>


		<view class="searchbar">
			<!-- 用户头像 -->
			<view class="user-img" @click="isshow = true;">
				<image :src="'https://images.weserv.nl/?url='+usericon.imgurl"></image>
			</view>
			<!-- 搜索框 -->
			<u-search placeholder="2023年校园招聘" v-model="keyword" :show-action="false" id="searchs"></u-search>
			<!-- <u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search> -->

			<!-- 首页功能按钮 -->
			<view class="globbtn">
				<image src="/static/indexs/weixin-shake.png" mode=""></image>
				<image src="/static/indexs/game-handle.png" mode=""></image>
				<image src="/static/indexs/mail.png" mode=""></image>

			</view>
		</view>



		<!-- 导航栏 -->
		<!-- <view class="navbar">
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
		</view> -->

		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#ff9bb9" ref="tabs" :list="list" :current="current" @change="change"
					:is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper style="height: 100vh;" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<!-- swiper -->
						<u-swiper
							style="width: 95%; height: 200px; margin: 20px auto; border-radius: 5px; overflow: hidden;"
							:indicator-dots="true" :title="true" :list="imgUrl" :effect3d="true" :autoplay="true">
						</u-swiper>

						<!-- 视频列表 -->

						<view class="videos">
							<view class="videos-left" v-for="(item,index) in videoUrl1" :key="index">
								<view class="v-left" @click="gotovideo(item.aid)">

									<view class="v-left-img">
										<image :src="'https://images.weserv.nl/?url='+item.pic"
											style="width: 100%; height: 100%;border-radius: 20rpx;" />
									</view>

									<view class="v-left-word">
										{{item.title}}
									</view>
								</view>
							</view>

							<view class="videos-right" v-for="(item,index) in videoUrl2" :key="index">
								<view class="v-right" @click="gotovideo(item.aid)">
									<view class="v-right-img">
										<image :src="'https://images.weserv.nl/?url='+item.pic"
											style="width: 100%; height: 100%;border-radius: 20rpx;" />
									</view>

									<view class="v-right-word">
										{{item.title}}
									</view>
								</view>
							</view>

						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">



						<view class="s-list">
							<view class="word1">

								<swiper style="height: 200px;" indicator-dots="true" indicator-color="#666"
									indicator-active-color="#fff" autoplay interval="2000" circular>
									<block v-for="(item,index) in sUrl" :key="index">
										<swiper-item>
											<image :src="item.src"
												style="width: 100%; height:100%; border-radius: 20rpx;" />
											<text>{{item.word}}</text>
										</swiper-item>
									</block>
								</swiper>

							</view>
						</view>

						<view class="f-nav">
							<view v-for="(item,index) in navUrl" :key="index"
								style="display: flex; flex-direction: column; align-items: center;">
								<view class="btn"
									style="width: 80rpx; height: 80rpx; border-radius: 50%; overflow: hidden;">
									<image :src="item.src" style="width:100%; height: 100%;" />
								</view>
								<view class="nav-word">
									{{item.word}}
								</view>
							</view>
						</view>


						<view class="con">
							<view class="con-title">
								<view class="con-title-left">
									<view class="con-title-left-img">
										<image src="/images/fanju/时间_time.png" style="width: 100%; height: 100%;" />
									</view>
									<view style="margin-left: -60px;">正在追</view>
								</view>
								<view class="con-title-right">我的追番></view>
							</view>
						</view>


						<!-- 主体 -->
						<view class="con-body">
							<swiper style="width: 100%; height: 200rpx; border-radius: 0rpx;" display-multiple-items="3"
								autoplay interval="5000" circular>
								<block v-for="(item,index) in reachUrl" :key="index">
									<swiper-item>
										<view
											style="width: 200rpx; height: 140rpx; margin: 20rpx 25rpx 0rpx 25rpx; border-radius: 20rpx; overflow: hidden;">
											<image :src="item.src" style="width: 100%; height: 100%;" />
										</view>
										<view style="text-align: center; font-size: 25rpx; margin-top: 5rpx;">
											{{item.word}}</view>
									</swiper-item>
								</block>
							</swiper>
						</view>


						<!--  正在热播 -->

						<view style="margin: 30rpx; font-size: 35rpx; font-weight: 900;">正在热播</view>

						<block v-for="(item,index) in reboUrl" :key="idnex">


							<view class="ving">
								<view class="ving-left">
									<view class="ving-left-img">
										<image :src="item.src1" style="width: 100%; height: 100%;" />
									</view>
									<view class="ving-left-word">{{item.word1}}</view>
								</view>

								<view class="ving-right">
									<view class="ving-right-img">
										<image :src="item.src2" style="width: 100%; height: 100%;" />
									</view>
									<view class="ving-right-word">{{item.word2}}</view>
								</view>
							</view>

						</block>



					</scroll-view>
				</swiper-item>
			</swiper>
		</view>



	</view>
</template>

<script>
	import {
		onMounted
	} from "vue"
	import videoVue from "../video/video.vue";
	export default {
		name: "index",
		data() {
			return {
				show: false,
				// 传递给uni-app"rich-text"组件的内容，可以使用"<br>"进行换行
				content: `
								1. 修复了轮播图切换空屏的情况<br>
								2. 新增Modal模态框组件<br>
								3. 新增动态刷新功能<br>
								4. 修复键盘组件在微信小程序上遮罩无效的问题
							`,
				// 输入框的val
				keyword: "",
				//弹窗
				isshow: false,
				imgUrl: [{
						image: '/static/lunbo/1.PNG',
						title: '111'
					},
					"/static/lunbo/2.JPG",
					"/static/lunbo/3.png",
					"/static/lunbo/4.png"
				],
				list: [{
						name: '首页'
					},
					{
						name: '番剧'
					},
					{
						name: '直播'
					},
					{
						name: '游戏'
					},
					{
						name: '会员购'
					},
					{
						name: '消息'
					},
					{
						name: '创作'
					},
					{
						name: '春日'
					},
					{
						name: '赛事'
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				// 用户头像
				usericon: [],
				// 视频详情
				videoUrl1: [],
				videoUrl2: [],



				sUrl: [{
					src: "/static/fanju/s1.jpg",
					word: "hellow"
				}, {
					src: "/static/fanju/s2.jpg",
					word: "hellow"
				}, {
					src: "/static/fanju/s3.jpg",
					word: "hellow"
				}],
				navUrl: [{
					src: "/static/fanju/nav icon/1.png",
					word: "全部内容"
				}, {
					src: "/static/fanju/nav icon/2.png",
					word: "番剧"
				}, {
					src: "/static/fanju/nav icon/3.png",
					word: "国创"
				}, {
					src: "/static/fanju/nav icon/4.png",
					word: "时间表"
				}],
				// 正在追剧 from 番剧 数据列表
				reachUrl: [{
					src: "https://i0.hdslb.com/bfs/bangumi/image/7f0281bff65bf957cf32583d35f272732db8a9ad.png@460w_250h_!web-ogv-anime-banner-thumb.webp",
					word: "致不灭的你2"
				}, {
					src: "https://i0.hdslb.com/bfs/bangumi/image/b80999e7504719a39949b52b267c4e6c42acf50c.png@460w_250h_!web-ogv-anime-banner-thumb.webp",
					word: "关于林家天使大人不知不觉把我养成废人这件事"
				}, {
					src: "https://i0.hdslb.com/bfs/archive/0dbd4c7e6915d6fc7c502145d46789849c671603.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
					word: "公主连接 第二季"
				}, {
					src: "https://i0.hdslb.com/bfs/archive/244bd5c083be56c4122dbb7b5123bf902f0882bd.png@560w_312h_!web-ogv-anime-horizontal-card.webp",
					word: "Fate/EXTRA Last Encore"
				}, {
					src: "https://i0.hdslb.com/bfs/bangumi/image/52f7bd354b28be0f30997fea410b050ef5606f33.png@460w_250h_!web-ogv-anime-banner-thumb.webp",
					word: "暗黑士兵"
				}, {
					src: "https://i0.hdslb.com/bfs/archive/61f773accfc61e73bb10f7b21c5788ca8d45801b.jpg@1128w_720h_!web-ogv-anime-ranking-card-hover.webp",
					word: "博人传 火影忍者新世代"
				}, {
					src: "https://i1.hdslb.com/bfs/archive/8d77e5918c03cc4fc1b2c9d87392e8c947758b51.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
					word: "属性咖啡厅"
				}],
				reboUrl: [{
					src1: "https://i0.hdslb.com/bfs/archive/fd1a127c594aa99a960fdcf42878d6a0d18edd3d.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
					word1: "辉夜大小姐想让我告白 -究极浪漫-",
					src2: "https://i0.hdslb.com/bfs/archive/c850f71d4f150fe64bda2987e48ae2d8a5968b07.png@560w_312h_!web-ogv-anime-horizontal-card.webp",
					word2: "JOJO的奇妙冒险 石之海"
				}, {
					src1: "https://i0.hdslb.com/bfs/archive/1c43cf09f3b9db7cd149f6881786dfc2b087e087.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
					word1: "名侦探柯南 零的日常",
					src2: "https://i0.hdslb.com/bfs/archive/15a8ca239dc749ec238609a415a7a72ee3dffdd4.png@560w_312h_!web-ogv-anime-horizontal-card.webp",
					word2: "盾之勇者成名录 第二季"
				}, {
					src1: "https://i0.hdslb.com/bfs/archive/b022c71d8e0a9eea191a73454dca112168faf50c.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
					word1: "约会大作战 第四季",
					src2: "https://i0.hdslb.com/bfs/archive/f9b7f81ca611cd4cff739ba7a28c59522807f703.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
					word2: "小林家的龙女仆 第二季"
				}]
			}
		},
		onLoad() {
			// 也可以在onShow生命周期打开，此为uView封装的请求方法
			this.$u.route("/uview-ui/components/u-full-screen/u-full-screen?id=1");
		},
		onReady() {
			this.show = true;
		},
		mounted() {
			uni.request({
				url: "https://api.uomg.com/api/rand.avatar",
				method: "GET",
				data: {
					sort: "动漫女",
					format: "json"
				},
				success: (res) => {
					console.log(res);
					this.usericon = res.data;
					console.log(this.usericon);

					uni.setStorage({
						key: 'usericon',
						data: this.usericon,
						success: (res) => {
							console.log(res);
						}
					})
				}
			})


			uni.request({
				url: 'http://api.bilibili.cn/recommend',
				method: 'GET',
				data: {
					page: Math.random() * 50 + 10,
					pagesize: 4
				},
				success: (res) => {
					this.videoUrl1 = res.data.list;
					console.log(this.videoUrl1);
				}
			})


			uni.request({
				url: 'http://api.bilibili.cn/recommend',
				method: 'GET',
				data: {
					page: Math.random() * 50 + 10,
					pagesize: 4
				},
				success: (res) => {
					this.videoUrl2 = res.data.list;
					console.log(this.videoUrl2);
				}
			})
		},
		methods: {

			// tab栏切换
			change(index) {
				this.swiperCurrent = index;

			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			gotovideo() {
				uni.navigateTo({
					url: '/pages/video/video'
				})
			}
		},
		onPullDownRefresh() {
			uni.request({
				url: 'http://api.bilibili.cn/recommend',
				method: 'GET',
				data: {
					page: Math.random() * 10 + 40,
					pagesize: 4
				},
				success: (res) => {
					this.videoUrl1 = res.data.list;
					console.log(this.videoUrl1);
				}
			})


			uni.request({
				url: 'http://api.bilibili.cn/recommend',
				method: 'GET',
				data: {
					page: Math.random() * 50 + 100,
					pagesize: 4
				},
				success: (res) => {
					this.videoUrl2 = res.data.list;
					console.log(this.videoUrl2);
				}
			})
			uni.stopPullDownRefresh();
		},
		onReachBottom: function() {
			console.log("done");
		}
	}
</script>

<style lang="scss" scoped>
	/* 全局设置 */
	page {
		margin: 0;
		padding: 0;
	}


	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;

	}

	// 弹窗
	.content {
		padding: 24rpx;
		text-align: center;
	}
	.tbtns li:hover{
		background-color: rgb(254,169,255);
	}


	.u-full-content {
		background-color: #00C777;
	}

	.u-update-content {
		font-size: 26rpx;
		color: $u-content-color;
		line-height: 1.7;
		padding: 30rpx;
	}

	/* 上方区域 */
	.searchbar {
		width: 100%;
		height: 120px;
		background-color: #fff;
	}

	/* 用户头像 */
	.user-img {
		width: 50px;
		height: 50px;
		float: left;
		margin-left: 15px;
		margin-right: 15px;
		margin-top: 50px;
	}

	.user-img>image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	/* 输入框 */
	#searchs {
		width: 180px;
		float: left;
		position: relative;
		top: 60px;
		margin-top: 80px;
		caret-color: #ff9bb9;
		margin-right: 10px;
		background-color: #ccc;
		border-radius: 50px;
	}

	.search {
		position: relative;
		bottom: 28px;
		left: 28px;
		z-index: 100;
	}

	/* 首页功能按钮 */
	.globbtn {
		width: 120px;
		height: 40px;
		float: right;
		margin-left: -10px;
		// background-color: pink;
		list-style: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 55px;
	}

	.globbtn>image {
		width: 25px;
		height: 25px;
		// background-color: skyblue;
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

	/* 视频列表 */
	.videos {
		width: 100%;
		margin-top: -20px;
	}

	.videos-left {
		width: 50%;
		float: left;
	}

	.v-left {
		width: 85%;
		height: 270rpx;
		// background-color: pink; 
		border-radius: 20rpx;
		margin-left: 15px;
		margin-top: 10px;
		overflow: hidden;
	}

	.v-left-img {
		height: 190rpx;
	}

	.v-left-word {
		width: 100%;
		height: 40px;
		// background-color: pink;
		font-size: 25rpx;
		overflow: hidden;
	}

	.videos-right {
		width: 50%;
		float: left;
	}

	.v-right {
		width: 85%;
		height: 270rpx;
		// background-color: skyblue; 
		border-radius: 20rpx;
		margin-left: 15px;
		margin-top: 10px;
		overflow: hidden;
	}

	.v-right-img {
		height: 190rpx;
	}

	.v-right-word {
		width: 100%;
		font-size: 25rpx;
		width: 100%;
		height: 40px;
		overflow: hidden;
		// background-color: pink;
	}





	/* 番剧 */
	.s-list {
		width: 90%;
		height: 400rpx;
		/* background-color: pink; */
		border-radius: 40rpx;
		margin: 0 auto;
	}

	swiper {
		// height: 400rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.f-nav {
		width: 100%;
		height: 150rpx;
		/* background-color: skyblue; */
		margin: 40rpx auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	/* 番剧列表 */
	.con {
		width: 100%;
	}

	.con-title {
		width: 95%;
		height: 60rpx;
		/* background-color: pink; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
	}

	.con-title-left {
		width: 30%;
		height: 60rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 40rpx;
		font-weight: bolder;
	}

	.con-title-left-img {
		width: 50rpx;
		height: 50rpx;
	}

	.con-title-right {
		font-size: 30rpx;
		color: #666;
	}


	/* 主体 */
	.con-body {
		width: 100%;
	}

	/* 正在热播 */
	.ving {
		width: 100%;
		margin-top: 30rpx;
		display: flex;
		justify-content: space-around;
	}

	.ving-left {
		width: 45%;
		height: 200rpx;
		margin-bottom: 40rpx;
	}

	.ving-left-img {
		width: 100%;
		height: 200rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.ving-left-word {
		font-size: 25rpx;
		margin: 5rpx;
	}

	.ving-right {
		width: 45%;
		height: 200rpx;
		margin-bottom: 40rpx;
	}

	.ving-right-img {
		width: 100%;
		height: 200rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.ving-right-word {
		font-size: 25rpx;
		margin: 5rpx;
	}
</style>