<template>
	<view style="margin: 25px;">
		<u-upload ref="uUpload" :action="action" :auto-upload="true"></u-upload>
		<u-input v-model="value" :type="type" :border="border" :height="height" :auto-height="autoheight"/>
		<u-button @click="submit">上传</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				action: 'http://www.example.com/upload',
				filesArr: [],
				value: '',
				type: 'text',
				border: true
			}
		},
		methods: {
			submit() {
				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				})
				// 如果您不需要进行太多的处理，直接如下即可
				// files = this.$refs.uUpload.lists;
				console.log(files)
			}
		}
	}
</script>