<template>
	<view>
		<!-- goback -->
		<u-navbar back-text="返回" is-back="true" title="购物车" height="60" :background="background" back-icon-color="#fff" :back-text-style="backStyle" title-color="#fff"></u-navbar>
		<u-swipe-action :show="item.show" :index="index" 
			v-for="(item, index) in list" :key="item.id" 
			@click="click" @open="open"
			:options="options"
		>
			<view class="item u-border-bottom">
				<image mode="aspectFill" :src="'https://images.weserv.nl/?url='+item.images" />
				<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
				<view class="title-wrap">
					<text class="title u-line-2">{{ item.title }}</text>
				</view>
			</view>
		</u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 自定义导航栏的的背景
				background:{
					backgroundColor:'#ff9bb9'
				},
				backStyle:{
					color:'#fff'
				},
				list: [
					{
						id: 1,
						title: 'BILIBILIGOODS 2233 人生百戏系列 高帮帆布鞋',
						images: 'https://i0.hdslb.com/bfs/mall/vendor/71/fe/71fe2c2683130da2fbfcfc18fac0cd89.png',
						show: false
					},
					{
						id: 2,
						title: '哔哩哔哩 小电视2233 口袋本贴纸便签套装',
						images: 'https://i0.hdslb.com/bfs/mall/vendor/c4/4b/c44bcf11f7391b1636032c14842cf4c7.png',
						show: false
					},
					{
						id: 3,
						title: 'BILIBILIGOODS 2233 时空战姬系列 魔方',
						images: 'https://i0.hdslb.com/bfs/mall/vendor/d0/18/d018135a311c7643cf679114f9cb7fd4.png',
						show: false,
					}
				],
				disabled: false,
				btnWidth: 180,
				show: false,
				options: [
					{
						text: '购买',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			};
		},
		mounted() {
			
		},
		methods: {
			click(index, index1) {
				if(index1 == 1) {
					this.list.splice(index, 1);
					this.$u.toast(`删除了第${index}个cell`);
				} else {
					this.list[index].show = false;
					this.$u.toast(`购买成功`);
				}
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.list[index].show = true;
				this.list.map((val, idx) => {
					if(index != idx) this.list[idx].show = false;
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.item {
		display: flex;
		padding: 20rpx;
	}
	
	image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		margin-right: 20rpx;
		border-radius: 12rpx;
	}
	
	.title {
		text-align: left;
		font-size: 28rpx;
		color: $u-content-color;
		margin-top: 20rpx;
	}
</style>