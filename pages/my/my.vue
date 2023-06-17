<template>
	<view>
		<!-- 固定定位 -->
		<view id="fix" style="position: fixed; width: 100%; height: auto; z-index: 100; background-color: #ff9bb9;">


			<view class="user">
				<!-- 头像左边部分 -->
				<view style="display: flex; flex: 1; align-items: center;">
					<view
						style="width: 120rpx; height:120rpx; border: 2px solid #fff; overflow: hidden;border-radius: 50%; margin-left: 20rpx;">
						<!-- <open-data type="userAvatarUrl"></open-data> -->
						<image :src="'https://images.weserv.nl/?url='+usersImg.imgurl" mode=""
							style="width: 100%; height: 100%;"></image>
					</view>
					<view style="margin-left: 30rpx;">
						<text>Angelczack</text>
						<!-- <open-data type="userNickName" style="font-size: 30rpx;"></open-data> -->
						<view style="font-size:25rpx;">正式会员</view>
						<view style="font-size:25rpx;">
							<text decode="true">B币：0.0&nbsp;&nbsp;&nbsp;</text><text>硬币：1299</text>
						</view>
					</view>
				</view>

				<!-- 头像右边部分 -->
				<view class="kongjian" style="margin-right: 40rpx;">空间 ></view>
			</view>


			<!-- 关注列表 -->
			<view class="notice">
				<view class="notice-left">
					<text>2</text>
					<text>动态</text>
				</view>

				<view class="notice-center">
					<text>32\n</text>
					<text>关注</text>
				</view>

				<view class="notice-right">
					<text>6\n</text>
					<text>粉丝</text>
				</view>
			</view>



			<!-- 大会员 -->
			<view class="VIP">
				<image src="/static/my/vip.png" style="width:100%; height:100%;" />
			</view>

			<!-- 固定定位末尾 -->
		</view>




		<!-- 非固定定位 -->
		<view class="nofix" style="width: 100%;  position: relative; top: 550rpx;">



			<!-- 四个按钮 -->
			<view class="nav">
				<block v-for="(item,index) in naviconUrl" :key="index">


					<view class="nav-icon">
						<image :src="item.src" style="width: 100%; height: 100%;" />
						<view class="nav-title">{{item.title}}</view>
					</view>

				</block>
			</view>


			<!-- 创作中心 -->
			<view class="create">
				<view class="create-title">
					<view class="create-title-left">创作中心</view>
					<view class="create-title-right">
						<image src="/images/my/give.png" style="width: 100%; height: 100%;" />
					</view>
				</view>


				<!-- 图标区 -->
				<view class="createicon">
					<block v-for="(item,index) in createiconUrl" :key="index">


						<view class="create-icon">
							<image :src="item.src" style="width: 100%; height: 100%;" />
							<view style="font-size: 30rpx; white-space: nowrap; margin-left: -30rpx;">{{item.title}}
							</view>
						</view>

					</block>

				</view>

				<!-- tongzhi -->
				<view class="tongzhi">
					<view class="tongzhi-left">
						<view class="tongzhi-left-img">
							<image src="/images/my/提醒_remind .png" style="width: 100%; height: 100%;" />
						</view>

						<!-- 通知轮播 -->
						<swiper style="width: 400rpx; height: 60rpx;" vertical="true" autoplay interval="3000" circular>
							<block v-for="(item,index) in tongzhiUrl" :key="index">
								<swiper-item>
									<view class="tongzhi-left-title">{{item}}</view>
								</swiper-item>
							</block>
						</swiper>

						<!-- tongzhi-left 结尾 -->
					</view>
					<view class="tongzhi-right">立即查看></view>
				</view>

				<!-- create 结尾 -->
			</view>


			<!-- 游戏中心 -->
			<view class="game">
				<view class="game-top">
					<view class="game-top-left">游戏中心</view>
					<view class="game-top-right">查看更多></view>
				</view>

				<view class="gameicon">
					<block v-for="(item,index) in gameiconUrl" :key="index">

						<view style="width: 80rpx; height: 80rpx;">
							<image :src="item.src" style="width: 100%; height: 100%;" />
							<view class="gameicon-word">{{item.word}}</view>
						</view>

					</block>

				</view>
			</view>



			<!-- 游戏中心 -->
			<view class="game">
				<view class="game-top">
					<view class="game-top-left">游戏中心</view>
					<view class="game-top-right">查看更多></view>
				</view>

				<view class="gameicon">
					<block v-for="(item,index) in gameiconUrl" :key="index">

						<view style="width: 80rpx; height: 80rpx;">
							<image :src="item.src" style="width: 100%; height: 100%;" />
							<view class="gameicon-word">{{item.word}}</view>
						</view>

					</block>
				</view>
				<!-- 游戏中心结尾 -->
			</view>


			<!-- 推荐服务 -->
			<view class="tuijian">
				<view class="tuijian-top">
					<view class="tuijian-top-left">推荐服务</view>
				</view>

				<view class="tuijianicon">
					<block v-for="(item,index) in tuijianiconUrl" :key="index">

						<view style="width: 80rpx; height: 80rpx;">
							<image :src="item.src" style="width: 100%; height: 100%;" />
							<view class="tuijianicon-word">{{item.word}}</view>
						</view>

					</block>
				</view>
				<!-- 推荐服务结尾 -->
			</view>



			<!-- 更多服务 -->
			<view style=" margin-left: 30rpx;font-size: 35rpx; font-weight: 900;">更多服务</view>
			<view class="more">
				<!-- <block wx:for="{{moreUrl}}" wx:for-item="item" wx:key="index">
		  
		  <view  class="more-con">
		    <view class="more-left">
		      <view class="more-left-img">
		        <image src="{{item.src}}" style="width: 100%; height: 100%;"/>
		      </view>
		      <view class="more-left-word">{{item.word}}</view>
		    </view>
		
		    <view class="more-right">></view>
		    </view>
		
		    </block> -->


				<view class="more-con">
					<view class="more-left">
						<view class="more-left-img">
							<image src="/static/my/robot-one.png" style="width: 100%; height: 100%;" />
						</view>
						<view class="more-left-word">联系客服</view>
					</view>

					<view class="more-right">></view>
				</view>

				<view class="more-con">
					<view class="more-left">
						<view class="more-left-img">
							<image src="/static/my/headset.png" style="width: 100%; height: 100%;" />
						</view>
						<view class="more-left-word">听视频</view>
					</view>

					<view class="more-right">></view>
				</view>

				<view class="more-con">
					<view class="more-left">
						<view class="more-left-img">
							<image src="/static/my/leaves.png" style="width: 100%; height: 100%;" />
						</view>
						<view class="more-left-word">青少年守护</view>
					</view>

					<view class="more-right">></view>
				</view>

				<view class="more-con" @click="gotosetting">
					<view class="more-left">
						<view class="more-left-img">
							<image src="/static/my/setting-two.png" style="width: 100%; height: 100%;" />
						</view>
						<view class="more-left-word">设置</view>
					</view>

					<view class="more-right">></view>
				</view>


				<!-- more结尾 -->
			</view>
			<!-- 非固定定位末尾 -->
		</view>





	</view>
</template>

<script>
	export default {
		name: "my",
		data() {
			return {
				naviconUrl: [{
					src: "/static/my/down.png",
					title: "离线缓存"
				}, {
					src: "/static/my/clock.png",
					title: "历史记录"
				}, {
					src: "/static/my/star.png",
					title: "我的收藏"
				}, {
					src: "/static/my/on.png",
					title: "稍后再看"
				}],
				createiconUrl: [{
					src: "/static/my/light.png",
					title: "创作首页"
				}, {
					src: "/static/my/wendang.png",
					title: "稿件管理"
				}, {
					src: "/static/my/safe.png",
					title: "打卡挑战"
				}, {
					src: "/static/my/qizhi.png",
					title: "有奖活动"
				}],
				tongzhiUrl: [
					"博人传第一部完结纪念！失去一切的忍者，第二部预热！",
					"大臣是铃芽的隐喻？《铃芽之旅》深度解读，新海诚的灾难哲学与人情温暖",
					"国外专业音乐人如何评价《乌梅子酱》？",
					"你们这群人食不食油饼哈哈哈哈哈哈哈哈哈哈哈哈！"
				],
				gameiconUrl: [{
					src: "/static/my/game-1.png",
					word: "我的游戏"
				}, {
					src: "/static/my/game-2.png",
					word: "找游戏"
				}, {
					src: "/static/my/game-3.png",
					word: "游戏排行榜"
				}, {
					src: "/static/my/game-4.png",
					word: "游戏礼包"
				}],
				tuijianiconUrl: [{
					src: "/static/my/game-1.png",
					word: "我的游戏"
				}, {
					src: "/static/my/game-2.png",
					word: "找游戏"
				}, {
					src: "/static/my/game-3.png",
					word: "游戏排行榜"
				}, {
					src: "/static/my/game-4.png",
					word: "游戏礼包"
				}],
				gameiconUrl2: [{
					src: "/static/my/game-1.png",
					word: "我的游戏"
				}, {
					src: "/static/my/game-2.png",
					word: "找游戏"
				}, {
					src: "/static/my/game-3.png",
					word: "游戏排行榜"
				}, {
					src: "/static/my/game-4.png",
					word: "游戏礼包"
				}],
				moreUrl: [{
					src: "/static/my/机器人1_robot-one.png",
					word: "联系客服"
				}, {
					src: "/static/my/耳机_headset.png",
					word: "听视频"
				}, {
					src: "/static/my/树叶_sleaves.png",
					word: "青少年守护"
				}, {
					src: "/static/my/设置_setting-two.png",
					word: "设置"
				}],
				usersImg: [],
				
			}
		},
		mounted() { //async ...await  异步ajax请求参数
		uni.getStorage({
			key:'usericon',
			success: (res) => {
				this.usersImg = res.data;
				console.log(this.usersImg);
			}
		})
		},
		methods: {
			gotosetting() {
				uni.navigateTo({
					url: '/pages/setting/setting'
				})
			}
		},
	}
</script>

<style scoped>
	/* pages/my/my.wxss */
	.user {
		width: 95%;
		height: 200rpx;
		margin: 0 auto;
		margin-top: 40px;
		/* background-color: pink; */
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: #fff;
	}

	/* 关注列表 */
	.notice {
		width: 100%;
		height: 150rpx;
		margin-bottom: 20px;
		/* background-color: skyblue; */
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #fff;
	}

	.notice-left {
		width: 33%;
		height: 80rpx;
		border-right: 2rpx solid #ccc;
		text-align: center;
		/* background-color: slateblue; */
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.notice-center {
		width: 33%;
		height: 80rpx;
		border-right: 2rpx solid #ccc;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* background-color: springgreen; */
	}

	.notice-right {
		width: 33%;
		height: 80rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		/* background-color: lightpink; */
	}

	/* 大会员 */
	.VIP {
		width: 95%;
		height: 110rpx;
		margin: 0 auto;
		border-radius: 20rpx;
		overflow: hidden;
		position: relative;
		bottom: 20px;
	}


	/* 四个按钮 */
	.nav {
		width: 95%;
		height: 200rpx;
		margin: 0 auto;
		/* background-color: #fff; */
		display: flex;
		justify-content: space-around;
	}

	.nav-icon {
		width: 60rpx;
		height: 60rpx;
		margin-top: 40rpx;
	}

	.nav-title {
		width: 100rpx;
		font-size: 30rpx;
		white-space: nowrap;
		margin-left: -32rpx;
	}

	/* 创作中心 */
	.create {
		width: 100%;
		height: 400rpx;
		/* background-color: lightseagreen; */
	}

	.create-title {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.create-title-left {
		font-size: 35rpx;
		font-weight: 900;
		margin-left: 30rpx;
	}

	.create-title-right {
		width: 200rpx;
		height: 80rpx;
		margin-right: 20rpx;
		border-radius: 40rpx;
		overflow: hidden;
		scale: 0.8;
	}


	/* create icon */
	.createicon {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top: 30rpx;
	}

	.create-icon {
		width: 60rpx;
		height: 60rpx;
	}



	/* 通知 */
	.tongzhi {
		width: 90%;
		height: 100rpx;
		margin: 0 auto;
		margin-top: 80rpx;
		line-height: 60rpx;
		background-color: #f6f7f9;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.tongzhi-left {
		width: 70%;
		height: 60rpx;
		display: flex;
		align-items: center;
	}

	.tongzhi-left-img {
		width: 40rpx;
		height: 40rpx;
		margin-left: 20rpx;
	}

	.tongzhi-left-title {
		margin-left: 10rpx;
		font-size: 30rpx;
		font-weight: bolder;
	}

	.tongzhi-right {
		margin-right: 20rpx;
		font-size: 30rpx;
		color: #ff9bb9;
	}



	/* 游戏中心 */
	.game {
		width: 100%;
		height: 300rpx;
		/* background-color: pink; */
	}

	.game-top {
		width: 100%;
		height: 80rpx;
		/* background-color: skyblue; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.game-top-right {
		font-size: 25rpx;
		color: #666;
	}

	.game-top-left {
		margin-left: 30rpx;
		font-size: 35rpx;
		font-weight: 900;
	}

	.game-top-right {
		margin-right: 20rpx;
	}

	/* 图标 */
	.gameicon {
		width: 100%;
		height: 120rpx;
		margin-top: 20rpx;
		margin-bottom: 60rpx;
		/* background-color: lightseagreen; */
		display: flex;
		justify-content: space-around;
	}

	.gameicon-word {
		width: 120rpx;
		font-size: 30rpx;
		display: flex;
		justify-content: space-around;
		white-space: nowrap;
		margin-left: -20rpx;

	}


	/* 游戏中心 */
	.tuijian {
		width: 100%;
		height: 300rpx;
		/* background-color: pink; */
	}

	.tuijian-top {
		width: 100%;
		height: 80rpx;
		/* background-color: skyblue; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.tuijian-top-right {
		font-size: 25rpx;
		color: #666;
	}

	.tuijian-top-left {
		margin-left: 30rpx;
		font-size: 35rpx;
		font-weight: 900;
	}

	.tuijian-top-right {
		margin-right: 20rpx;
	}

	/* 图标 */
	.tuijianicon {
		width: 100%;
		height: 120rpx;
		margin-top: 20rpx;
		margin-bottom: 60rpx;
		/* background-color: lightseagreen; */
		display: flex;
		justify-content: space-around;
	}

	.tuijianicon-word {
		width: 120rpx;
		font-size: 30rpx;
		display: flex;
		justify-content: space-around;
		white-space: nowrap;
		margin-left: -20rpx;
	}

	/* 更多服务 */
	.more {
		width: 100%;
		height: 300px;
		/* background-color: pink; */
	}

	.more-con {
		height: 100rpx;
		/* background-color: lightseagreen; */
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.more-left {
		width: 35%;
		height: 80rpx;
		/* background-color: lightskyblue; */
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-left: 30rpx;
	}

	.more-left-img {
		width: 60rpx;
		height: 60rpx;
	}

	.more-left-word {
		width: 160rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		margin-left: 20rpx;
	}

	.more-right {
		margin-right: 30rpx;
		color: #666;
	}
</style>