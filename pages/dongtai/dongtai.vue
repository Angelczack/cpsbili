<!--pages/dongtai/dongtai.wxml-->

<template>
	<view>
		<view class="top">
		
		  <view style="height: 60rpx; display: flex; white-space: nowrap; justify-content:center; color: #fff;">
		    <!-- <view style="margin-right: 20rpx;" :class="{{flag==0?'select':'normal'}}" bindtap="change" id="0">综合</view>
		    <view style="margin-left: 20rpx;" :class="{{flag==1?'select':'nmormal'}}" bindtap="change" id="1">校园<text style="font-size: 25rpx; margin-left: 10rpx;">内测</text></view> -->
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
		  <view style="width: 95%; height: 80rpx; margin: 0 auto;display: flex; justify-content: space-between; align-items: center;">
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
		
		
		<!-- 下拉列表+板块 -->
		<view class="bg3" v-for="(item,index) in idUrl" :key="index">
		  <view class="users">
		    <!-- 头像文字 -->
		    <view class="vus">
		
		      <view class="vus-left">
		        <view class="vus-icon">
		          <open-data type="userAvatarUrl"></open-data>
		        </view>
		        <view class="vus-word">
		          <view>
		            <open-data type="userNickName"></open-data>
		          </view>
		          <view style="font-size: 25rpx; color: #666;">17分钟之前</view>
		        </view>
		      </view>
		
		      <view class="vus-right">
		        <image src="/images/dongtai/更多1_more-one.png" style="width: 100%; height: 100%;" />
		      </view>
		    </view>
		    <view style="font-size: 35rpx; margin: 10rpx 30rpx;">{{item.title}}</view>
		  </view>
		  <!-- 动态列表的内容 pic or other -->
		  <view class="info" :hidden="item.info">
		    <view class="info-pic">
		      <image :src="item.src" style="width: 100%; height: 100%; margin-top: 10rpx;" :hidden="item.pic"/>
		    </view>
		    <view :hidden="item.ct" style="margin: 30rpx; font-size: 30rpx;">{{item.text}}</view>
		  </view>
		</view>
	</view>
</template>

