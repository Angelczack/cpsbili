<!--pages/dongtai/dongtai.wxml-->
<template>
	<view>
		<view class="top">
			<view style="height: 60rpx; display: flex; white-space: nowrap; justify-content:center; color: #fff;">
				<view style="margin-right: 20rpx;" bindtap="change" id="0">综合</view>
				<view style="margin-left: 20rpx;" bindtap="change" id="1">校园<text
						style="font-size: 25rpx; margin-left:10rpx;">内测</text></view>
			</view>
		</view>


		<!-- 状态 -->
		<view class="nav">
			<block v-for="(item,index) in btnUrl" :key="index">
				<view class="nav-btn">
					<text>{{item}}</text>
				</view>
			</block>
		</view>


		<!-- 最常访问 -->
		<view class="bg1">
			<view
				style="width: 95%; height: 80rpx; margin: 0 auto;display: flex; justify-content: space-between; align-items: center;">
				<text style="font-size: 30rpx; font-weight: bolder;">最常访问</text>
				<text style="font-size: 25rpx; color:#95999f;">查看更多></text>
			</view>




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
		</view>




		<!-- 公告 -->
		<view class="bg2">
			<view class="notice">
				<view class="notice-top">
					<view class="notice-top-left">
						<view class="notice-top-left-img">
							<image src="/images/dongtai/icon.png" style="width: 100%; height: 100%;" />
						</view>
						<text style="margin-left: 10rpx;">热门话题</text>
					</view>
					<view class="notice-top-right">
						<text style="font-size: 25rpx; color:#95999f;">查看更多></text>
					</view>
				</view>
				<view class="notice-con">
					<view class="notice-con-left">
						<text class="notice-con-left-word">大熊猫宝新死因公布</text>
						<text class="notice-con-left-word">银魂又又又又又动画化了！</text>
						<text class="notice-con-left-word">妈妈的临终遗言是两首儿歌</text>
						<text class="notice-con-left-word">卡塔尔报价曼联55亿欧元</text>
					</view>

					<view class="notice-con-right">
						<text class="notice-con-right-word">高校放7天春假鼓励恋爱</text>
						<text class="notice-con-right-word">鸡鸣寺游客爆满设反悔门</text>
						<text class="notice-con-right-word">8荀奶奶熬夜读霸总小说</text>
						<text class="notice-con-right-word">你所在的城市能看见哪些花</text>
					</view>
				</view>
			</view>
		</view>




		<view class="bg3" v-for="(item,index) in idUrl" :key="index">
			<view class="users">
				<!-- 头像文字 -->
				<view class="vus">

					<view class="vus-left">
						<view class="vus-icon">
							<!-- <open-data type="userAvatarUrl"></open-data> -->
							<image :src="'https://images.weserv.nl/?url='+usericon.imgurl"
								style="width: 100%; height: 100%;" />
						</view>
						<view class="vus-word">
							<view>
								<text>Angelczack</text>
							</view>
							<view style="font-size: 25rpx; color: #666;">17分钟之前</view>
						</view>
					</view>

					<view class="vus-right">
						<image src="/static/dongtai/more.png" style="width: 90%; height: 90%;" />
					</view>
				</view>
				<view style="font-size: 35rpx; margin: 10rpx 30rpx;">{{item.title}}</view>
			</view>
			<!-- 动态列表的内容 pic or other -->
			<view class="info">
				<view class="info-pic">
					<image :src="item.src" style="width: 100%; height: 100%; margin-top: 10rpx;" />
				</view>
				<view style="margin: 30rpx; font-size: 30rpx;">{{item.text}}</view>
			</view>
		</view>



	<!-- 回到顶部 -->
			<u-back-top :scroll-top="scrollTop"></u-back-top>
		
		
	</view>
</template>

<script>
	export default {
		name: "dongtai",
		data() {
			return {
				// 回到顶部变量
				scrollTop: 0,
				btnUrl: ["全部", "未观看", "继续观看", "视频", "直播"],
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
				idUrl: [{
					info: true,
					title: "失踪人口回归",
					pic: true,
					src: "/static/lunbo/2.JPG",
					ct: true,
					text: "nihao",

				}, {
					info: true,
					title: "明天是一个好天气",
					pic: true,
					src: "/static/lunbo/2.JPG",
					ct: false,
					text: "hello"
				}, {
					info: false,
					title: "三年之约已到，还没有看新海诚的新作吗",
					pic: false,
					src: "/static/dongtai/info pic/4.png",
					ct: false,
					text: "日本著名动画导演新海诚继《你的名字》及《天气之子》之后，又带来了“现象级”新作。该片去年11月在日本上映，累积票房已达到140亿日元，成为新海诚导演又一卖座电影。"
				}, {
					info: false,
					title: "溜走の时间",
					pic: false,
					src: "/static/dongtai/info pic/1.DNG",
					ct: true,
					text: "回家的路"
				}],
				// 头像资源
				usericon: []
			}
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
		mounted() {
		uni.getStorage({
			key:'usericon',
			success: (res) => {
				this.usericon = res.data;
				console.log(this.usericon);
			}
		})
		},
		methods: {

		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		}
	}
</script>

<style lang="scss" scoped>
	/* pages/dongtai/dongtai.wxss */
	/* 全局 */
	page {
		background-color: #f1f2f2;
	}

	/* 头部 */
	.top {
		width: 100%;
		height: 120rpx;
		background-color: #ff9bb9;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.select {
		border-bottom: 6rpx solid #fff;
	}

	.normal {
		color: #fff;
	}

	/* 状态 */
	.nav {
		width: 100%;
		height: 100rpx;
		/* background-color: pink;  */
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
	}

	.nav-btn {
		width: 18%;
		height: 60rpx;
		background-color: #f1f2f2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #444;
		border-radius: 10rpx;
	}

	.nav-btn:nth-child(1) {
		color: #ff9bb9;
	}

	/* 最常访问 */
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

	.bg1 {
		background-color: #fff;
	}

	/* 公告 */
	.bg2 {
		background-color: #fff;
	}

	.notice {
		width: 100%;
		height: 400rpx;
		margin-top: 30rpx;
	}

	.notice-top {
		display: flex;
		justify-content: space-between;
	}

	.notice-top-left {
		width: 30%;
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		font-size: 30rpx;

	}

	.notice-top-left-img {
		width: 60rpx;
		height: 60rpx;
		margin-left: 20rpx;
	}

	.notice-top-right {
		width: 35%;
		margin-top: 20rpx;
		text-align: right;
		margin-right: 20rpx;
	}

	.notice-con {
		height: 320rpx;
		/* background-color: pink; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
	}

	.notice-con-left {
		width: 50%;
		height: 300rpx;
		/* background-color: aquamarine; */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.notice-con-left-word {
		margin-left: 10rpx;
	}

	.notice-con-right {
		width: 50%;
		height: 300rpx;
		/* background-color: lightcoral; */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.notice-con-right-word {
		margin-left: 10rpx;
	}


	/* 下拉列表+板块 */
	.bg3 {
		background-color: #fff;
	}

	.users {
		width: 100%;
		height: 200rpx;
		margin-top: 30rpx;
		/* background-color: lightcoral; */
	}

	.vus {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.vus-left {
		width: 45%;
		display: flex;
		align-items: center;
		margin-top: 20rpx;
	}
	.vus-word{
		margin-left: 10px;
	}

	.vus-icon {
		width: 90rpx;
		height: 90rpx;
		margin-left: 20px;
		border-radius: 50%;
		overflow: hidden;
	}

	.vus-right {
		width: 80rpx;
		height: 80rpx;
		/* background-color: pink; */
		margin-top: 20rpx;
		margin-right: 10px;
		
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 动态的内容 pic or other */
	.info {
		width: 100%;
		height: 600rpx;
		/* background-color: pink; */
	}

	.info-pic {
		width: 90%;
		height: 400rpx;
		margin-left: 30rpx;
	}
</style>