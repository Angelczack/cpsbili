<template>
	<view>
		<button @click="addImgs">上传</button>
		
		<button @click="addcream">添加</button>
		
		<map id="map1" ref="map1"></map>
	</view>
</template>

<script>
	export default {
		name: "add",
		data() {
			return {
			
			}
		},
		methods:{
			addImgs() {
				uni.chooseFile({
					count:2,
					type:'all',
					success: (res) => {
						console.log("add complete!!!");
					}
				})
			},
			addcream() {
				uni.scanCode({
					
				})
			}
		}
	}
</script>

<style>
</style>