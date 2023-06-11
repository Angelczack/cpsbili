// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    flag:0,
    currentTab:0,
    imgUrl:[
      "/images/lunbo/1.PNG",
      "/images/lunbo/2.JPG",
      "/images/lunbo/3.png",
      "/images/lunbo/4.png",
      "/images/lunbo/5.png"
    ],
    videoUrl:[{
      src1:"https://i1.hdslb.com/bfs/archive/f3c919cb64825bdf59ebd9bfdf24d0ba343d761a.jpg@672w_378h_1c_!web-home-common-cover.webp",
      word1:"原来 靠时间放下的人 是经不起再一次见面的",
      src2:"https://i2.hdslb.com/bfs/archive/49f906f9e0778720bfd097d05afa30d4422fffb2.jpg@672w_378h_1c_!web-home-common-cover.webp",
      word2:"这一届的学生脑洞怎么这么大"
    },{
      src1:"https://i2.hdslb.com/bfs/archive/81b598755898449ec628f8c8e743ada3fcae4348.jpg@672w_378h_1c_!web-home-common-cover.webp",
      word1:"鸡你．但是是《Da Capo 》",
      src2:"https://i1.hdslb.com/bfs/archive/bb84221b9495813b657fca868f84dcafc59f46d7.jpg@672w_378h_1c_!web-home-common-cover.webp",
      word2:"制作烧了两个亿！这些F1够你玩到GTA6！"
    },{
      src1:"https://i1.hdslb.com/bfs/archive/138c6a95b92ae9271fc3dcd8a97534f02b7ed64c.jpg@672w_378h_1c_!web-home-common-cover.webp",
      word1:"【PR转场】无需任何插件！够你用一辈子的50个无缝丝滑转场！",
      src2:"https://i2.hdslb.com/bfs/archive/97f69a4c7258709309c87cf37044780a0f689177.jpg@672w_378h_1c_!web-home-common-cover.webp",
      word2:"【2023年最新免费加速器】我们决定从付费转为免费！"
    },{
      src1:"https://i0.hdslb.com/bfs/live/new_room_cover/ba016151bb68847f388a90ab0e7cff45fb0cac59.jpg@412w_232h_1c.webp",
      word1:"【新v】电竞少女，人间四月",
      src2:"https://i0.hdslb.com/bfs/archive/b3e56e6ea726fcf64b8605c328dbe22287a9da27.jpg@672w_378h_1c_!web-home-common-cover.webp",
      word2:"水果忍者爆杀dinner特效"
    },{
      src1:"https://i2.hdslb.com/bfs/archive/7311dcb5c2163a09b34bdf358d66b9ef6e145c9e.jpg@672w_378h_1c_!web-home-common-cover.webp",
      word1:"本来还挺喜欢玩王者荣耀的……",
      src2:"https://i1.hdslb.com/bfs/archive/ad675b47b656f6517750193babfb72abd12415e9.jpg@672w_378h_1c_!web-home-common-cover.webp",
      word2:"若不是你突然闯进我鸡窝……"
    }],
    sUrl:[{
      src:"/images/fanju/s1.jpg",
      word:"hellow"
    },{
      src:"/images/fanju/s2.jpg",
      word:"hellow"
    },{
      src:"/images/fanju/s3.jpg",
      word:"hellow"
    }],
    navUrl:[{
      src:"/images/fanju/nav icon/1.png",
      word:"全部内容"
    },{
      src:"/images/fanju/nav icon/2.png",
      word:"番剧"
    },{
      src:"/images/fanju/nav icon/3.png",
      word:"国创"
    },{
      src:"/images/fanju/nav icon/4.png",
      word:"时间表"
    }],
    // 正在追剧 from 番剧 数据列表
    reachUrl:[{
      src:"https://i0.hdslb.com/bfs/bangumi/image/7f0281bff65bf957cf32583d35f272732db8a9ad.png@460w_250h_!web-ogv-anime-banner-thumb.webp",
      word:"致不灭的你2"
    },{
      src:"https://i0.hdslb.com/bfs/bangumi/image/b80999e7504719a39949b52b267c4e6c42acf50c.png@460w_250h_!web-ogv-anime-banner-thumb.webp",
      word:"关于林家天使大人不知不觉把我养成废人这件事"
    },{
      src:"https://i0.hdslb.com/bfs/archive/0dbd4c7e6915d6fc7c502145d46789849c671603.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
      word:"公主连接 第二季"
    },{
      src:"https://i0.hdslb.com/bfs/archive/244bd5c083be56c4122dbb7b5123bf902f0882bd.png@560w_312h_!web-ogv-anime-horizontal-card.webp",
      word:"Fate/EXTRA Last Encore"
    },{
      src:"https://i0.hdslb.com/bfs/bangumi/image/52f7bd354b28be0f30997fea410b050ef5606f33.png@460w_250h_!web-ogv-anime-banner-thumb.webp",
      word:"暗黑士兵"
    },{
      src:"https://i0.hdslb.com/bfs/archive/61f773accfc61e73bb10f7b21c5788ca8d45801b.jpg@1128w_720h_!web-ogv-anime-ranking-card-hover.webp",
      word:"博人传 火影忍者新世代"
    },{
      src:"https://i1.hdslb.com/bfs/archive/8d77e5918c03cc4fc1b2c9d87392e8c947758b51.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
      word:"属性咖啡厅"
    }],
    reboUrl:[{
      src1:"https://i0.hdslb.com/bfs/archive/fd1a127c594aa99a960fdcf42878d6a0d18edd3d.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
      word1:"辉夜大小姐想让我告白 -究极浪漫-",
      src2:"https://i0.hdslb.com/bfs/archive/c850f71d4f150fe64bda2987e48ae2d8a5968b07.png@560w_312h_!web-ogv-anime-horizontal-card.webp",
      word2:"JOJO的奇妙冒险 石之海"
    },{
      src1:"https://i0.hdslb.com/bfs/archive/1c43cf09f3b9db7cd149f6881786dfc2b087e087.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
      word1:"名侦探柯南 零的日常",
      src2:"https://i0.hdslb.com/bfs/archive/15a8ca239dc749ec238609a415a7a72ee3dffdd4.png@560w_312h_!web-ogv-anime-horizontal-card.webp",
      word2:"盾之勇者成名录 第二季"
    },{
      src1:"https://i0.hdslb.com/bfs/archive/b022c71d8e0a9eea191a73454dca112168faf50c.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
      word1:"约会大作战 第四季",
      src2:"https://i0.hdslb.com/bfs/archive/f9b7f81ca611cd4cff739ba7a28c59522807f703.jpg@560w_312h_!web-ogv-anime-horizontal-card.webp",
      word2:"小林家的龙女仆 第二季"
    }]
  },
  // 事件处理函数

  change:function(e){
    var current = e.currentTarget.dataset.current;
    var id = e.target.id;
    var page = this;
    if(this.data.flag == id){
      return false;
    }else{
      page.setData({flag:id})
    }
    this.setData({
      currentTab:current
    })
  },
  onLoad() {
   
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
