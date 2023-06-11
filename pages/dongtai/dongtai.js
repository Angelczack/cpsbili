// pages/dongtai/dongtai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:0,
    btnUrl:["全部","未观看","继续观看","视频","直播"],
    contUrl:[{
      src:"/images/dongtai/s7.JPG",
      word:"Angelcfax"
    },{
      src:"/images/dongtai/s1.JPG",
      word:"price"
    },{
      src:"/images/dongtai/s2.JPG",
      word:"喵露朵喵喵"
    },{
      src:"/images/dongtai/s4.JPG",
      word:"Angelczack"
    },{
      src:"/images/dongtai/s3.JPG",
      word:"Iwan"
    },{
      src:"/images/dongtai/s6.JPG",
      word:"wilkston"
    },{
      src:"/images/dongtai/s5.JPG",
      word:"gray"
    }],
    idUrl:[{
      info:true,
      title:"失踪人口回归",
      pic:true,
      src:"/images/lunbo/2.JPG",
      ct:true,
      text:"nihao",
      
    },{
      info:true,
      title:"明天是一个好天气",
      pic:true,
      src:"/images/lunbo/2.JPG",
      ct:false,
      text:"hello"
    },{
      info:false,
      title:"三年之约已到，还没有看新海诚的新作吗",
      pic:false,
      src:"/images/dongtai/info pic/4.png",
      ct:false,
      text:"日本著名动画导演新海诚继《你的名字》及《天气之子》之后，又带来了“现象级”新作。该片去年11月在日本上映，累积票房已达到140亿日元，成为新海诚导演又一卖座电影。"
    },{
      info:false,
      title:"溜走の时间",
      pic:false,
      src:"/images/dongtai/info pic/1.DNG",
      ct:true,
      text:"回家的路"
    }]
  },
  change:function(e){
    console.log(e.detail.value)
    var id = e.target.id;
    var page = this;
    if(this.data.flag == id)
    return false
    else
    page.setData({flag:id})
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})