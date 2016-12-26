// pages/home/home.js
var app = getApp()

Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    app.tabbar.init()
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  setReminder: function () {
    app.tabbar.setReminder('Home', 'List', 'Cart', 'User')
  },
  removeReminder: function () {
    app.tabbar.removeReminder('Home', 'List', 'Cart', 'User')
  },
  switchTab: function () {
    app.tabbar.switchTab('List')
  },
  redirectChild: function () {
    wx.redirectTo({
      url: '../home-content/home-content',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})