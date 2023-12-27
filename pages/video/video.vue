<!--pages/video/video.wxml-->

<template>
	<view>
		
		<view class="viedoBack">
			<view class="Effbtns">
				<view class="goback" @click="goBackIndex">
					<u-icon name="arrow-left" size="40" color="#fff"></u-icon>
				</view>
			
				<view class="share">
					<!-- <u-icon name="share-fill" size="40"></u-icon> -->
				</view>
			</view>
		</view>
		
		
		<!-- <video :src="src" controls id="myvideo"></video> -->
		<div>
			<video id="myVideo" :src="revideos[0].uri" style="width: 100%; height: 220px;" autobufer="true" :danmu-list="danmuList" enable-danmu danmu-btn page-gesture="true" enable-progress-gesture="true" show-mute-btn="true" :direction="90" show-loading controls></video>
		</div>


		<!-- chats -->
		<view class="chats">
			<view class="chats-left">
				<ul>
					<li><text class="active">简介</text></li>
					<li><text class="normal">评论</text><text class="normal">188</text></li>
				</ul>
			</view>

			<view class="chats-right">
				<input type="text" v-model="danmuValue" class="uni-input" placeholder="在此处输入弹幕内容">
				<button class="btns" plain="true" style="border-radius: 10px; margin-left: 10px;" @click="sendDanmu">发送</button>
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
					<text class="name" decode="true">{{revideos[0].avator}}</text>
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

			<view class="infoTitle" id="infoTitle">
				<!-- 视频的状态  例：活动 -->
				<view class="act">
					活动
				</view>
				<!-- 视频标题 -->
				<view id="vtitle" @click.native="gotoheight">
					<text>{{revideos[0].vtitle}}</text>
					<u-icon name="arrow-down" size="30" id="vicon"></u-icon>
				</view>
			</view>

			<view id="hbox" class="hbox">
				<text id="conts" decode="true">{{revideos[0].desc}}</text>
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
				<ul>
					<li v-for="(item,index) in Navicons" :key="index">
						<!-- 图标 -->
						<view class="nis">
							<u-icon class="nisx" :name="item.name" size="60" color="#666"></u-icon>
						</view>
						<!-- 描述 -->
						<view class="nts">
							{{item.desc}}
						</view>
					</li>
				</ul>
			</view>
		</view>



		<!-- 推荐视频 -->
		<view class="revideos" v-for="(item,index) in reUrls" :key="index">
			<!-- 视频封面 -->
			<view class="covers">
				<image :src="'https://images.weserv.nl/?url=' + item.src" style="width: 100%; height: 100%;"></image>
			</view>
			<!-- 视频的详情 -->
			<view class="vdescs">
				<text
					style="margin-left: 10px; font-size: 14px; font-weight: 900; display: block; width: 100%; height:25px; overflow: hidden;">{{item.title}}</text>
				<view class="author">
					<u-icon name="account" size="35"></u-icon>
					<text style="font-size: 16px; display: block; width: 100%; height:30px;">{{item.avator}}</text>
				</view>

				<!-- 小窗口视频信息   播放数 -->
				<view class="splays">
					<ul>
						<li>
							<u-icon name="play-circle" size="40"></u-icon>
							<text style="margin-left: 5px;">5.8万</text>
						</li>
						<li>
							<u-icon name="bell" size="40"></u-icon>
							<text style="margin-left: 5px;">25</text>
						</li>
					</ul>
				</view>
			</view>
		</view>

	</view>
</template>


<script>
	import {
		Transition
	} from "vue";
	import route from '../../uni_modules/uview-ui/libs/function/route';
	export default {
		name: "video",
		data() {
			return {
				// 输入框的值
				inps: "",
				// 头像数组
				usericon: [],
				// 判断展开
				isopen: 0,
				// nav图标
				Navicons: [{
						name: "thumb-up-fill",
						desc: "4625"
					},
					{
						name: "thumb-down-fill",
						desc: "不喜欢"
					},
					{
						name: "rmb-circle-fill",
						desc: "713"
					},
					{
						name: "star-fill",
						desc: "229"
					},
					{
						name: "weixin-circle-fill",
						desc: "57"
					}
				],
				// 推荐视频
				videoUrl: [],
				reUrls: [{
						src: "https://i0.hdslb.com/bfs/archive/7e2179093e42f9718ad61102d6f052eb872db7f6.jpg@672w_378h_1c_!web-home-common-cover.webp",
						avator:'学姐圆',
						plays:'34w',
						title:'“少年，你有听见时间的声音吗？”'
					},
					{
						src: "https://i0.hdslb.com/bfs/archive/4724e3f3752d41b26934b55e9fa0a4fb0d5ee68a.jpg@672w_378h_1c_!web-home-common-cover.webp",
						title:'当一个社团有了两支500定！？？',
						avator:'哲摄-V',
						plays:'1.6w'
					},
					{
						src: "https://i0.hdslb.com/bfs/archive/c11a9fa3ca18f8d79c62c9f48e6b501f55f68c1e.jpg@672w_378h_1c_!web-home-common-cover.webp",
						title:'【原神】小腿一翘💙芙芙驾到！',
						avator:'千夜未来Senyamiku',
						plays:'99.7w'
					},
					{
						src: "https://i0.hdslb.com/bfs/archive/a41ec6cc3b7b5fb11220a777c18c58a632d8828e.jpg@672w_378h_1c_!web-home-common-cover.webp",
						title:'“动漫给予了我们从未有过的人生”',
						avator:'星宇动漫社',
						palys:'30.5w'
					},
					{
						src: "https://i0.hdslb.com/bfs/archive/62092d9c642d4e95b639f41cbcb727d984c83c6e.jpg@672w_378h_1c_!web-home-common-cover.webp",
						title:'一 切 都 是 日富美 干 的！！4K【禾兮】',
						avator:'禾兮子',
						plays:'28w'
					},
					{
						src: "https://i0.hdslb.com/bfs/archive/d2e3f888d3db7d17179addcc1a23102b399613ff.jpg@672w_378h_1c_!web-home-common-cover.webp",
						title:'【COS】小格蕾修12.21生日快乐！',
						avator:'湫湫_QiuQiu',
						plays:'8.3w'
					}
				],
				// 获取视频源
				revideos: [],
				
				
				// 视频弹幕组件
				 src: '',
				 danmuList: [],
				 danmuValue: ''

			}
		},
		onReady: function(res) {
		        // #ifndef MP-ALIPAY
		        this.videoContext = uni.createVideoContext('myVideo')
		        // #endif
		    },
			
		mounted() {


			uni.request({
				url: 'http://api.bilibili.cn/recommend',
				method: 'GET',
				data: {
					page: Math.random() * 50 + 10,
					pagesize: 4
				},
				success: (res) => {
					this.videoUrl = res.data.list;
					console.log(this.videoUrl);
				}
			})

			uni.getStorage({
				key: 'usericon',
				success: (res) => {
					this.usericon = res.data;
					// console.log(this.usericon);
				}
			})

			// 获取视频的详细信息API
			// uni.getStorage({
			// 	key: 'aid',
			// 	success: (res) => {
			// 		this.revideos =res;
			// 		console.log(res);
			// 	}
			// })

			//获取视频的详细信息
			uni.getStorage({
				key: 'vlist',
				success: (res) => {
					this.revideos = JSON.parse(res.data);
					console.log(this.revideos);
				}
			})
			
			// console.log(this.revideos[0].vtitle);

			uni.request({
				url: 'https://www.bilibili.com/video/14955232',
				method: 'GET',
				success: (res) => {
					console.log(res);
				}
			})
		},
		// onReady: function(res) {
		// 	// #ifndef MP-ALIPAY
		// 	this.videoContext = uni.createVideoContext('myVideo')
		// 	// this.videoContext.exitFullScreen()
		// 	// uni.navigateBack()
		// 	// #endif

		// },
		methods: {
			goBackIndex() {
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			// 视频弹幕组件
			  sendDanmu: function() {
			            this.videoContext.sendDanmu({
			                text: this.danmuValue,
			                color: this.getRandomColor()
			            });
			            this.danmuValue = '';
			        },
			        videoErrorCallback: function(e) {
			            uni.showModal({
			                content: e.target.errMsg,
			                showCancel: false
			            })
			        },
			        getRandomColor: function() {
			            const rgb = []
			            for (let i = 0; i < 3; ++i) {
			                let color = Math.floor(Math.random() * 256).toString(16)
			                color = color.length == 1 ? '0' + color : color
			                rgb.push(color)
			            }
			            return '#' + rgb.join('')
			        },
					
					// 控制详情的高度
			gotoheight() {
				var cheight = document.getElementById("conts").clientHeight;
				if (cheight != 0) {
					document.getElementById("hbox").style.height = cheight + 'px';
					console.log(cheight);
				}
				document.getElementById("conts").style.display = "block";
				document.getElementById("hbox").style.transition = "1s";
				var current = -180;
				document.getElementById("vicon").style.transform = 'rotate(' + current + 'deg)';
				document.getElementById("vicon").style.transition = "0.5s";
				this.isopen++;
				if (this.isopen % 2 == 0) {
					document.getElementById("hbox").style.height = "0px";
					document.getElementById("hbox").style.transition = "1s";

					document.getElementById("vicon").style.transform = 'rotate(0deg)';
					document.getElementById("vicon").style.transition = "0.5s";
					this.isopen = 0;
				}
			}
		},
		onPullDownRefresh() {
			// uni.request({
			// 	url: 'http://api.bilibili.cn/recommend',
			// 	method: 'GET',
			// 	data: {
			// 		page: Math.random() * 10 + 40,
			// 		pagesize: 4
			// 	},
			// 	success: (res) => {
			// 		this.videoUrl = res.data.list;
			// 		console.log(this.videoUrl1);
			// 	}
			// })
			uni.stopPullDownRefresh();
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	/* 全局设置 */
	page {
		margin: 0;
		padding: 0;
		background-color: rgb(251, 251, 251);
	}
	
	/* 功能按钮区 */
	
	.viedoBack {
		width: 100%;
	}
	.Effbtns {
		width: 100%;
		height: 60px;
		z-index: 10;
		/* background-color: #fff; */
		position: absolute;
		top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.goback {
		width: 30px;
		height: 30px;
		margin-left: 15px;
		border-radius: 50px;
		/* background-color: #fff; */
		opacity: 0.9;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.share {
		width: 30px;
		height: 30px;
		margin-right: 15px;
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: #fff; */
		opacity: 0.6;
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
		border: 1px solid #ccc;
		border-radius: 5px;

	}

	.chats-right .btns {
		width: 90px;
		height: 30px;
		margin-right: 20px;
		font-size: 14px;
		color: #fff;
		border: none;
		border-radius: 0px;
		white-space: nowrap;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(255, 102, 153);
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
		height: 60px;
		/* background-color: pink; */
		display: flex;
		justify-content: space-around;
	}

	.act {
		width: 45px;
		height: 25px;
		margin-top: 18px;
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
		font-size: 16px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* background-color: #666; */
	}

	.hbox {
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		/* display: none; */
		/* background-color: pink; */
	}

	.hbox text {
		display: none;
		width: 90%;
		margin-left: 10px;
		margin-top: -5px;
	}


	.playNums {
		width: 100%;
		height: 40px;
		/* background-color: #999; */
		display: flex;
		align-items: center;
		font-size: 12px;
	}

	.nums {
		margin-left: 1px;
	}

	.plays {
		display: flex;
		margin-left: 15px;
	}

	.liulans {
		display: flex;
		margin-left: 10px;
	}

	.createTimes {
		display: flex;
		margin-left: 10px;
	}

	.nowPeoples {
		display: flex;
		margin-left: 10px;
	}

	.infoNav {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.infoNav ul {
		width: 90%;
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		/* background-color: skyblue; */
	}

	.infoNav li {
		width: 20%;
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		/* background-color: lightgreen; */
	}

	.nis {
		width: 40px;
		height: 40px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: lightcoral; */
	}

	.nts {
		width: 100%;
		font-size: 14px;
	}

	/* 推荐视频 */
	.revideos {
		width: 90%;
		margin: 300px;
		margin: 20px auto;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.covers {
		width: 40%;
		height: 90px;
		border-radius: 10px;
		overflow: hidden;
		/* background-color: pink; */
	}

	.vdescs {
		width: 60%;
		height: 90px;
		/* background-color: lightgreen; */
	}

	.author {
		margin-left: 10px;
		margin-top: 10px;
		display: flex;
		align-items: center;
	}

	.splays ul {
		display: flex;
		list-style: none;
		align-items: center;
	}

	.splays li {
		width: 60px;
		height: 30px;
		margin-left: 10px;
		/* background-color: pink; */
		display: flex;
		align-items: center;
	}
</style>