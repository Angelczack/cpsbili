<!--pages/video/video.wxml-->

<template>
	<view>
		<video :src="src" controls id="myvideo"></video>

		<!-- chats -->
		<view class="chats">
			<view class="chats-left">
				<ul>
					<li><text class="active">简介</text></li>
					<li><text class="normal">评论</text><text class="normal">188</text></li>
				</ul>
			</view>

			<view class="chats-right">
				<input type="text" v-model="inps" @click="clickTodanmu">
				<button class="btns" plain="true">发送</button>
			</view>
		</view>

		<!-- user/video info -->

		<view class="infos">
			<view class="infoUsers">
				<view class="usericon">
					<!-- 用户的头像 -->
					<image :src="'https://images.weserv.nl/?url='+usericon.imgurl" mode=""></image>
				</view>
				<view class="userdesc">
					<!-- 用户的昵称 -->
					<text class="name" decode="true">Anglczack\n</text>
					<view>
						<!-- 粉丝数 -->
						<text class="fans">18.2万粉丝</text>
						<!-- 视频数 -->
						<text class="vnums">194视频</text>
					</view>
				</view>
				<view class="guanzhu">
					关注
				</view>
			</view>

			<view class="infoTitle">
				<!-- 视频的状态  例：活动 -->
				<view class="act">
					活动
				</view>
				<!-- 视频标题 -->
				<u-collapse id="vtitle">
					<u-collapse-item :title="item.head" v-for="(item, index) in itemList" :key="index">
						{{item.body}}
					</u-collapse-item>
				</u-collapse>
			</view>

			<view class="playNums">
				<view class="plays">
					<!-- 小图标 -->
					<u-icon name="play-right" size="30"></u-icon>
					<!-- 数据 -->
					<view class="nums">
						4.7万
					</view>
				</view>

				<view class="liulans">
					<!-- 小图标 -->
					<u-icon name="play-right" size="30"></u-icon>
					<!-- 数据 -->
					<view class="nums">
						366
					</view>
				</view>

				<view class="createTimes">
					<!-- 数据 -->
					<view class="nums">
						2023年6月13日 21:00
					</view>
				</view>

				<view class="nowPeoples">
					<!-- 小图标 -->
					<u-icon name="play-right" size="30"></u-icon>
					<!-- 数据 -->
					<view class="nums">
						110人正在看
					</view>
				</view>
			</view>

			<view class="infoNav">
				
			</view>
		</view>

	</view>
</template>


<script>
	export default {
		name: "video",
		data() {
			return {
				// 输入框的值
				inps: "",
				// 头像数组
				usericon: [],
				// 视频标题
				itemList: [{
					head: "赏识在于角度的转换",
					body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来",
					open: true,
					disabled: true
				}],
				src: 'http://flv4mp4.people.com.cn/videofile7/pvmsvideo/2020/12/25/SongHeLi_488c1b771d69704f8745972409f64528.mp4'
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
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
		},
		methods: {
			clickTodanmu() {
				console.log("done");
			}
		}
	}
</script>

<style scoped>
	/* 全局设置 */
	page {
		margin: 0;
		padding: 0;
		background-color: rgb(251, 251, 251);
	}

	#myvideo {
		width: 100%;
		height: 300px;
	}

	/* 简介和评论 */
	.chats {
		width: 100%;
		border-top: 1px solid #ccc;
		box-shadow: 1px 5px 30px -10px #ccc;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.chats-left {
		width: 60%;
		height: 60px;
		/* background-color: skyblue; */
		display: flex;
		justify-content: center;
	}

	.chats-left ul {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		white-space: nowrap;
		/* background-color: darkturquoise; */
	}

	.chats-left li {
		display: flex;
		align-items: center;
		width: 100px;
		height: 55px;
		/* background-color: lightcoral; */
		font-size: 16px;
	}

	.active {
		/* width: 10px; */
		border-bottom: 3px solid pink;
		border-radius: 1px;
	}

	.chats-right {
		width: 40%;
		height: 60px;
		/* background-color: lightgreen; */
		display: flex;
		align-items: center;
	}

	.chats-right input {
		width: 150px;
		height: 30px;
		border: 1px solid #333;

	}

	.chats-right .btns {
		width: 60px;
		height: 32px;
		margin-right: 20px;
		font-size: 14px;
		color: #fff;
		border: none;
		border-radius: 0px;
		white-space: nowrap;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: pink;
	}


	/* infos */
	.infos {
		width: 100%;
	}

	.infoUsers {
		width: 100%;
		height: 80px;
		/* background-color: pink; */
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.usericon {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
	}

	.usericon image {
		width: 100%;
		height: 100%;
	}

	.userdesc {
		width: 160px;
		margin-left: -30px;
		/* background-color: pink; */
	}

	.name {
		font-size: 18px;
	}

	.fans {
		color: #666;
	}

	.vnums {
		color: #666;
		margin-left: 10px;
	}

	.guanzhu {
		width: 60px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: #fff;
		border-radius: 25px;
		overflow: hidden;
		background-color: rgb(255, 102, 153);
	}

	.infoTitle {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.act {
		width: 45px;
		height: 25px;
		border-radius: 25px;
		font-size: 14px;
		text-align: center;
		line-height: 25px;
		background-color: rgb(244, 244, 244);
		color: rgb(255, 102, 153);
	}

	#vtitle {
		width: 80%;
		height: 40px;
	}
	
	.playNums{
		width: 100%;
		height: 40px;
		/* background-color: #999; */
		display: flex;
		align-items: center;
		font-size: 12px;
	}
	.nums{
		margin-left: 1px;
	}
	.plays{display: flex; margin-left: 15px;}
	.liulans{display: flex; margin-left: 10px;}
	.createTimes{display: flex; margin-left: 10px;}
	.nowPeoples{display: flex; margin-left: 10px;}
</style>