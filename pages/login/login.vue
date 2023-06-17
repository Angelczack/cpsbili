<!--pages/login/login.wxml-->
<template>
	<view>
		<view class="top">
			<view class="top-left">
				<!-- 返回键 -->
				<uni-icons type="arrow-left" size="30"></uni-icons>
				<view class="top-left-word">密码登录</view>
			</view>

			<view class="top-right" @click="gotologin">短信登录</view>
		</view>



		<!-- 图片 -->
		<view class="img">
			<!-- <image src="/static/login/2233login.png" /> -->
		</view>




		<!-- 账号密码 -->
		<view>
			<view class="user-box">
				<text style="margin-left: 30rpx; font-size: 30rpx; white-space: nowrap;">账号</text>
				<form action="checklogin.php" method="post">
					<input type="text" class="user" v-model="userNum" placeholder="请输入手机号或邮箱"
						placeholder-style="font-size:30rpx;" maxlength="20" />
				</form>
			</view>

			<view class="pass-box">
				<text style="margin-left: 30rpx; font-size: 30rpx; white-space: nowrap;">密码</text>
				<form action="checklogin.php" method="post">
					<input type="password" class="pass" v-model="userPass" placeholder="请输入密码"
						placeholder-style="font-size:30rpx;" maxlength="20" />
				</form>
				<text style="font-size: 25rpx; white-space: nowrap; color: #ff9bb9; margin-left: 40px;">忘记密码?</text>
			</view>

		</view>


		<!-- 注册与登录 -->
		<view style="display: flex; margin-top: 40rpx;">
			<button
				style="width: 45%; height: 80rpx; background-color: #f1f2f3; border: 2rpx solid #ff9bb9; text-align: center; line-height: 80rpx;"
				plain="false" @click="gotoReg">注册</button>
			<button
				style="width: 45%; height: 80rpx; background-color: #ff9bb9; border: none; text-align: center; line-height: 80rpx; color: #fff;"
				plain="false" @click="gotoindex">登录</button>
		</view>



		<!-- 用户协议 -->
		<view style="display: flex; margin: 40rpx 20rpx;">
			<checkbox value="" color="#ff9bb9" />
			<view>我已阅读并同意<text style="color: skyblue;">用户协议</text>与<text style="color: skyblue;">隐私政策</text></view>
		</view>


		<!-- 遇到问题 -->
		<view style="width: 50%; margin: 0 auto; margin-top: 60rpx; text-align: center;">
			<text>遇到问题?</text>
			<text style="color: skyblue;">查看帮助</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				userNum: "",
				userPass: ""
			}
		},
		methods: {
			gotologin() {
				uni.navigateTo({
					url: '/pages/mobilelogin/mobilelogin',
					animationType: 'pop-in',
					animationDuration: 300
				})
			},
			gotoindex() {
				console.log(this.userNum);
				if (this.userNum.length == 0) {
					uni.showToast({
						title: '请输入账号'
					})
				} else if (this.userPass.length == 0) {
					uni.showToast({
						title: '请输入密码'
					})
				} else {
					uni.switchTab({
						url: "/pages/index/index",
						animationType: 'pop-in',
						animationDuration: 300
					})
				}

			},
			gotoReg() {
				uni.navigateTo({
					url: '/pages/reg/reg',
					animationType: 'pop-in',
					animationDuration: 300
				})
			}
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		}
	}
</script>

<style scoped>
	/* pages/login/login.wxss */
	/* 页面颜色 */
	page {
		background-color: #f1f2f3;
	}
	
	.top {
		width: 100%;
		height: 120rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: -5px -5px 10px #333;
	}

	.top-left {
		display: flex;
		justify-content: space-around;
		margin-left: 20rpx;
	}

	.top-left-img {
		width: 40rpx;
		height: 40rpx;
	}

	.top-left-word {
		font-size: 30rpx;
		margin-left: 20px;
		/* margin-bottom: 10px; */
	}

	.top-right {
		margin-right: 20rpx;
		font-size: 30rpx;
		/* margin-bottom: 10px; */
	}


	/* 图片 */
	.img {
		width: 100%;
		height: 200rpx;
		/* background-color: skyblue; */
		background: url(/static/login/2233login.png) no-repeat;
		background-size: 90% 120%;
		background-position: center;
	}




	/* 地区 */
	.zone {
		width: 100%;
		height: 80rpx;
		font-size: 35rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 2rpx solid #ccc;
		border-bottom: 2rpx solid #ccc;
	}

	.zone-left {
		margin-left: 30rpx;
	}

	.zone-right {
		margin-right: 20rpx;
	}



	/* 账号密码 */

	.user-box {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #ccc;
	}

	.user {
		width: 80%;
		height: 80rpx;
		margin-left: 80rpx;
		caret-color: #ff9bb9;
		/* background-color: skyblue; */
	}

	.pass-box {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #ccc;
	}

	.pass {
		width: 80%;
		height: 80rpx;
		margin-left: 80rpx;
		caret-color: #ff9bb9;
		/* background-color: pink; */
	}
</style>