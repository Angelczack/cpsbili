<template>
	<view>
		<!-- goback -->
		<u-navbar back-text="返回" is-back="true" title="通用设置" height="60" :background="background" back-icon-color="#fff" :back-text-style="backStyle" title-color="#fff"></u-navbar>
		<!--pages/setting/setting.wxml-->
		<view class="list">
			<block v-for="(item,index) in listUrl" :key="index">
				<view
					style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
					<view class="list-left">{{item}}</view>
					<view class="list-right">></view>
				</view>

			</block>
		</view>

		<view class="list">
			<view
				style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
				<view class="list-left">开屏画面设置</view>
				<view class="list-right">></view>
			</view>
			<view
				style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
				<view class="list-left">首页推荐设置</view>
				<view class="list-right" style="font-size: 25rpx; color: #999;">双列/WI-FI/免流/移动网络下自动播放></view>
			</view>

			<block v-for="(item,index) in list1Url" :key="index">
				<view
					style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
					<view class="list-left">{{item}}</view>
					<view class="list-right">></view>
				</view>

			</block>
		</view>


		<view class="list">
			<block v-for="(item,index) in list2Url" :key="index">
				<view
					style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
					<view class="list-left">{{item}}</view>
					<view class="list-right">></view>
				</view>

			</block>
		</view>



		<view class="list">
			<view
				style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
				<view class="list-left">定时关闭</view>
				<view class="list-right" style="font-size: 25rpx; color: #999;">不开启></view>
			</view>
			<view
				style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
				<view class="list-left">睡眠提醒</view>
				<view class="list-right" style="font-size: 25rpx; color: #999;">不提醒></view>
			</view>
		</view>

		<view class="list">
			<view
				style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
				<view class="list-left">深色设置</view>
				<view class="list-right">
					<u-switch v-model="checked" size="40" active-color="#ff9bb9"/>
				</view>
			</view>
		</view>

		<view class="list">
			<view
				style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
				<view class="list-left">反馈与建议</view>
				<view class="list-right">></view>
			</view>
			<view
				style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 1rpx solid #ccc;">
				<view class="list-left">关于哔哩哔哩</view>
				<view class="list-right">></view>
			</view>
		</view>


		<view class="list">
			<block v-for="(item,index) in list3Url" :key="index">
				<view style="display: flex; justify-content: space-between; align-items: center; height: 80rpx; border-bottom: 0.5rpx solid #ccc;" class="setlines">
					<view class="list-left">{{item}}</view>
					<view class="list-right">></view>
				</view>
			</block>
		</view>



		<!-- 退出按钮 -->
		<button
			style="width: 100%; height: 80rpx; background-color:#fff; margin-top: 30rpx; border: none; color: #666; text-align: center; line-height: 80rpx; border-radius: 0px; font-size: 14px;"
			plain="true" @click="gotologin">退出登录</button>
		<!-- 隔空 -->
		<view style="height: 40rpx;"></view>
	</view>
</template>

<script>
	export default {
		name:"setting",
		data() {
			return {
				listUrl:["账号资料","安全隐私","收货信息"],
				list1Url:["播放设置","缓存设置","追番/追剧设置"],
				list2Url:["消息设置","推送设置","其他设置"],
				list3Url:["用户协议","隐私政策","隐私权限设置","个人信息收集清单","第三方信息共享清单"],
				// switch开关的参数
				checked:false,
				// 自定义导航栏的的背景
				background:{
					backgroundColor:'#ff9bb9'
				},
				backStyle:{
					color:'#fff'
				}
			}
		},
		methods: {
			//退出登录到登录页
			gotologin:function(){
			 wx.redirectTo({
			   url: '/pages/login/login'
			 })
			},
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		}
	}
</script>

<style scoped>
	page{background-color: rgb(240,242,242);}
	
	.list{
	  width: 100%;
	  background-color: #fff;
	  margin-top: 20rpx;
	  font-size: 30rpx;
	  /* background-color: pink; */
	}
	.list-left{
	  margin-left: 30rpx;
	}
	.list-right{margin-right: 30rpx;}
	
	/* 水平线优化 首部和尾部 */
	.setlines:first-child,:last-child {
		border-bottom: none !important;
	}
	.setlines:nth-child(1) {
		border-bottom: 0.5px solid #ccc !important;
	}
</style>