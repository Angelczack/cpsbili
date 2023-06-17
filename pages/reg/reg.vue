<!-- 注册页   指向手机的注册-->

<template>
	<view>
		<view class="top">
			<view class="top-left">
				<!-- 返回键 -->
				<uni-icons type="arrow-left" size="30"></uni-icons>
				<view claass="top-left-word">手机号登陆注册</view>
			</view>

			<view class="top-right" @click="gotologin">密码登录</view>
		</view>


		<!-- 图片 -->
		<view class="img">
			<!-- <image src="" mode="" /> -->
		</view>

		<!-- 地区-->
		<!-- 可选择地区 picker -->
		<!-- <picker mode="selector" value="{{index}}" range="{{array}}" bindchange="zoneChange">
		  <view class="zone">
		    <view class="zone-left">{{array[index]}}</view>
		    <view class="zone-right">></view>
		  </view>
		</picker> -->


		<!-- 账号密码 -->
		<view>
			<view class="user-box">
				<text style="margin-left: 30rpx; font-size: 30rpx; white-space: nowrap;">+86</text>
				<input type="digit" class="user" placeholder="请输入手机号或邮箱" placeholder-style="font-size:30rpx;" />
			</view>

			<view class="pass-box">
				<text style="margin-left: 30rpx; font-size: 30rpx; white-space: nowrap;">验证码</text>
				<input type="text" class="pass" placeholder="请输入密码" placeholder-style="font-size:30rpx;" />
				<text style="font-size: 25rpx; white-space: nowrap; margin-right: 20rpx; color: #ff9bb9;"
					@click="sendCode">获取验证码</text>
			</view>

		</view>


		<!-- 注册与登录 -->
		<view style="display: flex; margin-top: 40rpx;">
			<button
				style="width: 95%; height: 80rpx; background-color: #ff9bb9; border: none; text-align: center; line-height: 80rpx; color: #fff;"
				plain="false" @click="gotoindex">验证登录</button>
		</view>



		<!-- 用户协议 -->
		<view style="display: flex; margin: 40rpx 20rpx;">
			<checkbox value="" color="#ff9bb9" />
			<view>我已阅读并同意<text style="color: skyblue;">用户协议</text>与<text style="color: skyblue;">隐私政策</text><text
					decode="true">&nbsp,未注册绑定的手机号验证成功后将自动注册</text></view>
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
		name: "mobilelogin",
		data() {
			return {

			}
		},
		methods: {
			gotologin() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			gotoindex() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			sendCode() {
				uni.showToast({
					title: '验证码发送成功,请注意查收！'
				})
			}
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		}
	}
</script>

<style scoped>
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
	}

	.top-right {
		margin-right: 20rpx;
		font-size: 30rpx;
	}


	/* 图片 */
	.img {
		width: 100%;
		height: 200rpx;
		/* background-color: skyblue; */
		background: url(/static/login/2233login.png) no-repeat;
		background-size: 90% 100%;
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
		margin-left: 48rpx;
		caret-color: #ff9bb9;
		/* background-color: pink; */
	}
</style>