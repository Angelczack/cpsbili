// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
listUrl:["账号资料","安全隐私","收货信息"],
list1Url:["播放设置","缓存设置","追番/追剧设置"],
list2Url:["消息设置","推送设置","其他设置"],
list3Url:["用户协议","隐私政策","隐私权限设置","个人信息收集清单","第三方信息共享清单"]
  },


//退出登录到登录页
gotologin:function(){
 wx.redirectTo({
   url: '/pages/login/login'
 })
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