<template>
    <view>
        <view class="wrap">
            <view class="u-tabs-box">
                <u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
            </view>
            <swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
                <swiper-item class="swiper-item">
                    <scroll-view scroll-y style="height: 800px;width: 100%;">
                        
                            
                                
                                 
                                <view class="videos">
                                	<view class="videos-left" v-for="(item,index) in videoUrl1" :key="index">
                                		<view class="v-left" @click="gotovideo(item.aid)">
                                
                                			<view class="v-left-img">
                                				<image :src="'https://images.weserv.nl/?url='+item.pic"
                                					style="width: 100%; height: 100%;border-radius: 20rpx;" />
                                			</view>
                                
                                			<view class="v-left-word">
                                				{{item.title}}
                                			</view>
                                		</view>
                                	</view>
                                
                                	<view class="videos-right" v-for="(item,index) in videoUrl2" :key="index">
                                		<view class="v-right" @click="gotovideo(item.aid)">
                                			<view class="v-right-img">
                                				<image :src="'https://images.weserv.nl/?url='+item.pic"
                                					style="width: 100%; height: 100%;border-radius: 20rpx;" />
                                			</view>
                                
                                			<view class="v-right-word">
                                				{{item.title}}
                                			</view>
                                		</view>
                                	</view>
                                
                                </view>
                                    
                                
                            
                            
                        
                    </scroll-view>
                </swiper-item>
                <swiper-item class="swiper-item">
                    <scroll-view scroll-y style="height: 100%;width: 100%;"   >
                        
                            
                                
                                 
                                
                                    
                                    <view >代发货</view>
                                    
                                
                            
                            
                    </scroll-view>
                </swiper-item>
                <swiper-item class="swiper-item">
                    <scroll-view scroll-y style="height: 100%;width: 100%;">
                        
                            
                                    <view >待收货</view>
                                
                    </scroll-view>
                </swiper-item>
                <swiper-item class="swiper-item">
                    <scroll-view scroll-y style="height: 100%;width: 100%;"   >
                        
                            
                                    
                                    <view >待评价</view>
                            
                            
                        
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
            videoUrl1: [],
            videoUrl2: [],
            
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
            imgUrl: [{
            		image: '/static/lunbo/1.PNG',
            		title: '111'
            	},
            	"/static/lunbo/2.JPG",
            	"/static/lunbo/3.png",
            	"/static/lunbo/4.png"
            ]
        };
    },
	mounted() {
		uni.request({
			url: 'http://api.bilibili.cn/recommend',
			method: 'GET',
			data: {
				page: Math.random() * 50 + 10,
				pagesize: 3
			},
			success: (res) => {
				this.videoUrl1 = res.data.list;
				console.log(this.videoUrl1);
			}
		})
		
		
		uni.request({
			url: 'http://api.bilibili.cn/recommend',
			method: 'GET',
			data: {
				page: Math.random() * 50 + 10,
				pagesize: 3
			},
			success: (res) => {
				this.videoUrl2 = res.data.list;
				console.log(this.videoUrl2);
			}
		})
	},
    
    
    methods: {
        
        
        
        // tab栏切换
        change(index) {
            this.swiperCurrent = index;
            
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

.wrap {
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--window-top));
    width: 100%;
    
}

/* 视频列表 */
	.videos {
		width: 100%;
		margin-top: -20px;
	}

	.videos-left {
		width: 50%;
		float: left;
	}

	.v-left {
		width: 85%;
		height: 270rpx;
		// background-color: pink; 
		border-radius: 20rpx;
		margin-left: 15px;
		margin-top: 10px;
		overflow: hidden;
	}

	.v-left-img {
		height: 190rpx;
	}

	.v-left-word {
		font-size: 25rpx;
	}

	.videos-right {
		width: 50%;
		float: left;
	}

	.v-right {
		width: 85%;
		height: 270rpx;
		// background-color: skyblue; 
		border-radius: 20rpx;
		margin-left: 15px;
		margin-top: 10px;
		overflow: hidden;
	}

	.v-right-img {
		height: 190rpx;
	}

	.v-right-word {
		width: 100%;
		font-size: 25rpx;
		/* background-color: pink; */
	}

</style>