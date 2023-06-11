// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

// 跳转到密码登录
gotologin:function(){
  wx.navigateTo({
    url: '/pages/mobilelogin/mobilelogin'
  })
},
// 跳转到首页
gotoindex:function(){
  wx.switchTab({
    url: '/pages/index/index'
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  }
})