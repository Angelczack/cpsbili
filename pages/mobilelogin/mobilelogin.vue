<!--pages/mobilelogin/mobilelogin.wxml-->
<!--pages/login/login.wxml-->

<template>
	<view>
		<view class="top">
		  <view class="top-left">
		    <!-- <view class="top-left-img">
		      <image src="/images/login/返回_return.png" style="width: 100%; height: 100%;"/>
		    </view> -->
		    <view claass="top-left-word">手机号登陆注册</view>
		  </view>
		
		  <view class="top-right" bindtap="gotologin">密码登录</view>
		</view>
		
		
		<!-- 图片 -->
		<view class="img">
		  <image src="" mode="" />
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
		    <text style="font-size: 25rpx; white-space: nowrap; margin-right: 20rpx; color: #ff9bb9;">获取验证码</text>
		  </view>
		
		</view>
		
		
		<!-- 注册与登录 -->
		<view style="display: flex; margin-top: 40rpx;">
		  <button style="width: 45%; height: 80rpx; background-color: #f1f2f3; border: 2rpx solid #ff9bb9; text-align: center; line-height: 80rpx;" plain="false">注册</button>
		  <button style="width: 45%; height: 80rpx; background-color: #ff9bb9; border: none; text-align: center; line-height: 80rpx; color: #fff;" plain="false" bindtap="gotoindex">登录</button>
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

