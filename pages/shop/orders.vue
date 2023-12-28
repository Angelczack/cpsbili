<template>
	<view>
		<!-- goback -->
		<u-navbar back-text="返回" is-back="true" title="订单管理" height="60" :background="background" back-icon-color="#fff" :back-text-style="backStyle" title-color="#fff"></u-navbar>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[0]" :key="res.id">
								<view class="top">
									<view class="left">
										<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
										<view class="store">{{ res.store }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
									<view class="right">{{ res.deal }}</view>
								</view>
								<view class="item" v-for="(item, index) in res.goodsList" :key="index">
									<view class="left"><image :src="'https://images.weserv.nl/?url='+item.goodsUrl" mode="aspectFill"></image></view>
									<view class="content">
										<view class="title u-line-2">{{ item.title }}</view>
										<view class="type">{{ item.type }}</view>
										<view class="delivery-time">发货时间 {{ item.deliveryTime }}</view>
									</view>
									<view class="right">
										<view class="price">
											￥{{ priceInt(item.price) }}
											<text class="decimal">.{{ priceDecimal(item.price) }}</text>
										</view>
										<view class="number">x{{ item.number }}</view>
									</view>
								</view>
								<view class="total">
									共{{ totalNum(res.goodsList) }}件商品 合计:
									<text class="total-price">
										￥{{ priceInt(totalPrice(res.goodsList)) }}.
										<text class="decimal">{{ priceDecimal(totalPrice(res.goodsList)) }}</text>
									</text>
								</view>
								<view class="bottom">
									<view class="more"><u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon></view>
									<view class="logistics btn">查看物流</view>
									<view class="exchange btn">卖了换钱</view>
									<view class="evaluate btn">评价</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in  orderList[1]" :key="res.id">
								<view class="top">
									<view class="left">
										<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
										<view class="store">{{ res.store }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
									<view class="right">{{ res.deal }}</view>
								</view>
								<view class="item" v-for="(item, index) in res.goodsList" :key="index">
									<view class="left"><image :src="item.goodsUrl" mode="aspectFill"></image></view>
									<view class="content">
										<view class="title u-line-2">{{ item.title }}</view>
										<view class="type">{{ item.type }}</view>
										<view class="delivery-time">发货时间 {{ item.deliveryTime }}</view>
									</view>
									<view class="right">
										<view class="price">
											￥{{ priceInt(item.price) }}
											<text class="decimal">.{{ priceDecimal(item.price) }}</text>
										</view>
										<view class="number">x{{ item.number }}</view>
									</view>
								</view>
								<view class="total">
									共{{ totalNum(res.goodsList) }}件商品 合计:
									<text class="total-price">
										￥{{ priceInt(totalPrice(res.goodsList)) }}.
										<text class="decimal">{{ priceDecimal(totalPrice(res.goodsList)) }}</text>
									</text>
								</view>
								<view class="bottom">
									<view class="more"><u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon></view>
									<view class="logistics btn">查看物流</view>
									<view class="exchange btn">卖了换钱</view>
									<view class="evaluate btn">评价</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[1]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view>
								<view class="centre">
									<image src="https://cdn.uviewui.com/uview/template/taobao-order.png" mode=""></image>
									<view class="explain">
										您还没有相关的订单
										<view class="tips">可以去看看有那些想买的</view>
									</view>
									<view class="btn">随便逛逛</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in  orderList[3]" :key="res.id">
								<view class="top">
									<view class="left">
										<u-icon name="home" :size="30" color="rgb(94,94,94)"></u-icon>
										<view class="store">{{ res.store }}</view>
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="26"></u-icon>
									</view>
									<view class="right">{{ res.deal }}</view>
								</view>
								<view class="item" v-for="(item, index) in res.goodsList" :key="index">
									<view class="left"><image :src="item.goodsUrl" mode="aspectFill"></image></view>
									<view class="content">
										<view class="title u-line-2">{{ item.title }}</view>
										<view class="type">{{ item.type }}</view>
										<view class="delivery-time">发货时间 {{ item.deliveryTime }}</view>
									</view>
									<view class="right">
										<view class="price">
											￥{{ priceInt(item.price) }}
											<text class="decimal">.{{ priceDecimal(item.price) }}</text>
										</view>
										<view class="number">x{{ item.number }}</view>
									</view>
								</view>
								<view class="total">
									共{{ totalNum(res.goodsList) }}件商品 合计:
									<text class="total-price">
										￥{{ priceInt(totalPrice(res.goodsList)) }}.
										<text class="decimal">{{ priceDecimal(totalPrice(res.goodsList)) }}</text>
									</text>
								</view>
								<view class="bottom">
									<view class="more"><u-icon name="more-dot-fill" color="rgb(203,203,203)"></u-icon></view>
									<view class="logistics btn">查看物流</view>
									<view class="exchange btn">卖了换钱</view>
									<view class="evaluate btn">评价</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[3]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
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
			orderList: [[], [], [], []],
			dataList: [
				{
					id: 1,
					store: 'bilibili会员购',
					deal: '交易成功',
					goodsList: [
						{
							goodsUrl: 'https://i0.hdslb.com/bfs/mall/vendor/15/2b/152b59a67b29264fa816193d784af5f0.png',
							title: '哔哩哔哩 幻星集 2233 棉花娃娃站姿20CM',
							type: '灰色;M',
							deliveryTime: '付款后30天内发货',
							price: '75',
							number: 2
						},
						{
							goodsUrl: 'https://i0.hdslb.com/bfs/mall/mall/30/d7/30d7132eb3afacefa77e16df39518cc9.png',
							title: 'BILIBILIGOODS 哔哩哔哩幻星集 2233 青幻之镰&星耀使魔 12周年纪念 手办 通常版',
							type: '45cm;S',
							deliveryTime: '付款后30天内发货',
							price: '135.00',
							number: 1
						}
					]
				},
				{
					id: 2,
					store: 'bilibili会员购',
					deal: '交易失败',
					goodsList: [
						{
							goodsUrl: 'https://i0.hdslb.com/bfs/mall/vendor/58/b5/58b50b56d0ce8c3b23d9ae245d89ac37.png',
							title: 'BILIBILIGOODS 2233 时空战姬系列 收藏闪卡',
							type: '粉色;M',
							deliveryTime: '付款后7天内发货',
							price: '12',
							number: 1
						}
					]
				},
				{
					id: 3,
					store: 'bilibili会员购',
					deal: '交易失败',
					goodsList: [
						{
							goodsUrl: 'https://i0.hdslb.com/bfs/mall/mall/de/32/de320bbd58f651e7ba624340f83a65ce.png',
							title: 'BANPRESTO ESPRESTO系列 哔哩哔哩 22 33 小电视 景品手办 附独家特典',
							type: '广色域',
							deliveryTime: '保质5年',
							price: '299',
							number: 3
						},
						{
							goodsUrl: 'https://i0.hdslb.com/bfs/mall/mall/46/6c/466cc27a69c042f3c8331f27048e67b1.png',
							title: 'bilibiliGoods 癸卯兔年系列 2233 光栅徽章',
							type: '轻便好看',
							deliveryTime: '',
							price: '19',
							number: 1
						}
					]
				},
				{
					id: 4,
					store: 'bilibili会员购',
					deal: '交易失败',
					goodsList: [
						{
							goodsUrl: 'https://i0.hdslb.com/bfs/mall/vendor/09/98/0998becd19f08e1688a53c023d85bdb5.png',
							title: 'BILIBILIGOODS 2233 睡衣派对系列 金属徽章套装',
							type: '4K，广色域',
							deliveryTime: '珍藏10年好酒',
							price: '1543',
							number: 3
						},
						{
							goodsUrl: 'https://i0.hdslb.com/bfs/mall/vendor/be/2f/be2f5b8e949a87ddc2dacf1e9d96d0f3.png',
							title: 'bilibiliGoods 癸卯兔年系列 小电视 毛绒挂件&抱枕',
							type: '一打',
							deliveryTime: '好',
							price: '77',
							number: 1
						}
					]
				},
				{
					id: 5,
					store: 'bilibili会员购',
					deal: '交易成功',
					goodsList: [
						{
							goodsUrl: 'https://i0.hdslb.com/bfs/mall/vendor/71/fe/71fe2c2683130da2fbfcfc18fac0cd89.png',
							title: 'BILIBILIGOODS 2233 人生百戏系列 高帮帆布鞋',
							type: '识别效率高',
							deliveryTime: '使用方便',
							price: '451',
							number: 9
						}
					]
				}
			],
			list: [
				{
					name: '待付款'
				},
				{
					name: '待发货'
				},
				{
					name: '待收货'
				},
				{
					name: '待评价',
					count: 12
				}
			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore','loadmore','loadmore'],
		};
	},
	onLoad() {
		this.getOrderList(0);
		this.getOrderList(1);
		this.getOrderList(3);
	},
	computed: {
		// 价格小数
		priceDecimal() {
			return val => {
				if (val !== parseInt(val)) return val.slice(-2);
				else return '00';
			};
		},
		// 价格整数
		priceInt() {
			return val => {
				if (val !== parseInt(val)) return val.split('.')[0];
				else return val;
			};
		}
	},
	methods: {
		reachBottom() {
			// 此tab为空数据
			if(this.current != 2) {
				this.loadStatus.splice(this.current,1,"loading")
				setTimeout(() => {
					this.getOrderList(this.current);
				}, 1200);
			}
		},
		// 页面数据
		getOrderList(idx) {
			for(let i = 0; i < 5; i++) {
				let index = this.$u.random(0, this.dataList.length - 1);
				let data = JSON.parse(JSON.stringify(this.dataList[index]));
				data.id = this.$u.guid();
				this.orderList[idx].push(data);
			}
			this.loadStatus.splice(this.current,1,"loadmore")
		},
		// 总价
		totalPrice(item) {
			let price = 0;
			item.map(val => {
				price += parseFloat(val.price);
			});
			return price.toFixed(2);
		},
		// 总件数
		totalNum(item) {
			let num = 0;
			item.map(val => {
				num += val.number;
			});
			return num;
		},
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			this.getOrderList(index);
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		}
	}
};
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */
</style>

<style lang="scss" scoped>
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 164rpx;
		height: 164rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
	}
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
</style>
