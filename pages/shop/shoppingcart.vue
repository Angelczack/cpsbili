<template>

	<view>
		
		<!-- 功能区 -->
		<view class="">
			
		</view>
		
		<!-- 商品的图片信息 -->
		<view class="ItemImg">
			<image src="/static/shop/2.PNG"></image>
		</view>

		<view class="ItemBox">
			<!-- 金额 -->
			<view class="price">
				<h3>定金 ￥48.3</h3>
				<h5>全款 ￥322</h5>
			</view>

			<!-- 优惠信息 -->
			<view class="discord">
				<ul>
					<li>满120元减10元</li>
					<li>满119减10元</li>
					<li>满499元减50元</li>
				</ul>
			</view>

			<!-- 商品名称 -->
			<view class="ItemName">
				<span>GSAS 粘土人 缘之空 春日野穹 Q版手办</span>
			</view>
		</view>

		<view class="types">
			<view class="desc"><span>参数</span></view>
			<view class="typeDig">
				<ul>
					<li v-for="(item,index) in typesDigit" :key="index">
						<view class="title">
							{{item.title}}
						</view>

						<view class="digit">
							{{item.digit}}
						</view>
					</li>
				</ul>
			</view>
		</view>

		<!-- 正品保障 -->
		<view class="typesEnd">
			<view style="width: 100%; display: flex;">
				<h3 style="margin-top: 10px; margin-left: 10px;">正品保障 放心买</h3>
				<view
					style="width: 55%; display: flex; justify-content: space-around; align-items: center; margin-left: 10px;">
					<span>专业包装</span> <span>•</span>
					<span>满129包邮</span><span>•</span>
					<span>延期无忧</span>
				</view>
			</view>

			<p>保价保单</p>
			<!-- <span>不支持7天无理由退货</span> -->
		</view>


		<!-- 评价讨论 -->
		<view
			style="width: 100%; height: 35px; margin-top: 40px; background-color: #fff; border-radius: 10px 10px 0px 0px;">
			<h3 class="chatsTitle">晒图/讨论</h3>
		</view>
		<view class="chats">

			<view class="CapImg">
				<image src="/static/shop/ShopItems/array1.png"></image>
			</view>

			<view class="NorImg">
				<view class="NorImg-top">
					<view class="NorImg-top-left">
						<image src="/static/shop/2.PNG"></image>
					</view>
					<view class="NorImg-top-right">
						<image src="/static/shop/2.PNG"></image>
					</view>
				</view>

				<view class="NorImg-bottom">
					<view class="NorImg-bottom-left">
						<image src="/static/shop/2.PNG"></image>
					</view>
					<view class="NorImg-bottom-right">
						<image src="/static/shop/2.PNG"></image>
					</view>
				</view>
			</view>
		</view>

		<!-- 查看全部 -->
		<u-button shape="circle" :plain="true" :ripple="true" ripple-bg-color="#eee"
			style="position: relative; bottom: 40px; width: 30%; height: 30px; margin: 0 auto;">查看全部</u-button>


		<!-- 商品详情 -->
		<view class="ItemImgDetail">
			<h3>商品详情</h3>
			<view class="ScrollImg">

				<view class="ImgBox" v-for="(item,idnex) in Scroll" :key="index">
					<image :src="item.src" ></image>
				</view>

			</view>
		</view>


		<!-- 购物车底部栏 -->
		<view class="ShopBar">
			<view class="icons">
				<u-icon name="kefu-ermai" size="40"></u-icon>
				<u-icon name="shopping-cart" size="40"></u-icon>
			</view>

			<view class="buttons">
				<u-button shape="circle" plain="true" hair-line="false"
					style="width: 120px; height: 35px; border: 1px solid #ff9bb9; color: #ff9bb9;">加入购物车</u-button>
				<u-button shape="circle" hair-line="false" style="width: 120px; height: 35px;" class="custom-style">立即购买
					48.3</u-button>
			</view>
		</view>

		<!-- 卡屏 -->
		<view style="bugs"></view>
		<!-- 自带结尾 -->
	</view>
</template>

<script>
	export default {
		name: "shoppingcart",
		data() {
			return {
				typesDigit: [{
						title: '尺寸',
						digit: '高约24.6cm'
					},
					{
						title: '比例',
						digit: '1/7'
					},
					{
						title: '官方价',
						digit: '699元'
					},
					{
						title: '材质',
						digit: 'PVC;ABS'
					}
				],
				Scroll: [{
						src: '/static/shop/1.PNG'
					},
					{
						src: '/static/shop/3.PNG'
					},
					{
						src: '/static/shop/4.PNG'
					},
					{
						src: '/static/shop/5.PNG'
					}
				]
			}
		},

		methods: {

		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		font-family: "黑体";
	}

	.ItemImg {
		width: 100%;
		height: 400px;
		background-color: pink;
	}

	.ItemImg image {
		width: 100%;
		height: 100%;
	}

	/* 商品信息 */
	.ItemBox {
		width: 100%;
		height: 150px;
		background-color: #fff;
		border-radius: 0px 0px 10px 10px;
	}

	.price {
		width: 150px;
		height: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		/* background-color: deepskyblue; */
	}

	.price h3 {
		color: #ff9bb9;
		margin-top: 10px;
		margin-left: 5px;
	}

	.price h5 {
		margin-left: 5px;
	}

	.discord {
		width: 100%;
		margin-top: 5px;
		/* background-color: lightgreen; */
	}

	.discord ul {
		width: 265px;
		margin-left: 5px;
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* background-color: lightcyan; */
	}

	.discord ul li {
		width: 85px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: hotpink; */
		font-size: 10px;
		border-radius: 2px;
	}

	.ItemName {
		width: 100%;
		margin-top: 10px;
		/* background-color: aqua; */
	}

	.ItemName span {
		font-size: 16px;
		margin-left: 5px;
		font-weight: 900;
	}

	/* 商品的参数 */
	.types {
		width: 100%;
		background-color: #fff;
		margin-top: 30px;
		border-radius: 10px 10px 0px 0px;
		display: flex;
		align-items: center;
	}

	.types .desc {
		width: 60px;
		height: 80px;
		display: flex;
		align-items: center;
		/* background-color: darkcyan; */
	}

	.types .desc span {
		font-size: 14px;
		margin-left: 10px;
	}

	.typeDig {
		width: 80%;
		height: 80px;
		/* background-color: lightsalmon; */
	}

	.types .typeDig ul {
		width: 100%;
		height: 80px;
		list-style: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* background-color: lightskyblue; */
	}

	.types .typeDig ul li {
		width: 80px;
		height: 50px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		/* background-color: darkgoldenrod; */
	}

	/* 正品保障 */
	.typesEnd {
		width: 100%;
		height: 100px;
		border-radius: 0px 0px 10px 10px;
		background-color: #fff;
	}

	.typesEnd span {
		margin-top: 10px;
		font-size: 12px;
	}

	.typesEnd p {
		margin-top: 5px;
		margin-left: 12px;
	}



	/* 评价讨论 */
	.chatsTitle {
		margin-left: 10px;
		position: relative;
		top: 5px;
	}

	.chats {
		width: 100%;
		height: 240px;
		display: flex;
		justify-content: center;
		background-color: #fff;
	}

	.CapImg {
		width: 180px;
		height: 180px;
		border-radius: 10px;
		overflow: hidden;
		background-color: pink;
	}

	.CapImg image {
		width: 100%;
		height: 100%;
	}

	.NorImg {
		width: 180px;
		height: 180px;
		margin-left: 5px;
		/* background-color: skyblue; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.NorImg-top {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.NorImg-top-left {
		width: 87px;
		height: 87px;
		border-radius: 10px;
		overflow: hidden;
		/* background-color: #ff9bb9; */
	}

	.NorImg-top-left image {
		width: 100%;
		height: 100%;
	}

	.NorImg-top-right {
		width: 87px;
		height: 87px;
		overflow: hidden;
		border-radius: 10px;
		/* background-color: #ff9bb9; */
	}

	.NorImg-top-right image {
		width: 100%;
		height: 100%;
	}

	.NorImg-bottom {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.NorImg-bottom-left {
		width: 87px;
		height: 87px;
		overflow: hidden;
		border-radius: 10px;
		/* background-color: #ff9bb9; */
	}

	.NorImg-bottom-left image {
		width: 100%;
		height: 100%;
	}

	.NorImg-bottom-right {
		width: 87px;
		height: 87px;
		overflow: hidden;
		border-radius: 10px;
		/* background-color: #ff9bb9; */
	}

	.NorImg-bottom-right image {
		width: 100%;
		height: 100%;
	}

	/* 商品详情 */
	.ItemImgDetail {
		width: 100%;
		margin-top: 20px;
		background-color: #fff;
	}

	.ItemImgDetail h3 {
		margin-left: 10px;
		position: relative;
		top: 5px;
	}

	.ScrollImg {
		width: 90%;
		margin: 0 auto;
	}

	.ImgBox {
		width: 100%;
		height: 300px;
		display: flex;
		justify-content: center;
	}


	/* 购物车底部栏 */
	.ShopBar {
		width: 100%;
		height: 80px;
		border-top: #ccc solid 1px;
		background-color: #fff;
		position: fixed;
		top: 765px;
		z-index: 1000;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.icons {
		width: 80px;
		height: 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* background-color: lightblue; */
	}

	.buttons {
		width: 280px;
		height: 60px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* background-color: lightcyan; */
	}

	.custom-style {
		background-color: #ff9bb9;
		color: #fff;
	}
</style>