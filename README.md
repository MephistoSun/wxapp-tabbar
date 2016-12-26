#微信小程序自定义tabbar组件

##如何使用
####1.配置导航config并初始化组件
```js
var tabbar = require('./tabbar/tabbar')
var data = {
  color: 'darkgrey',
  selectedColor: '#479de6',
  isReminder: true,
  list: [
    {
      tabName: 'Home',
      pagePath: ['pages/home/home', 'pages/home-content/home-content'],
      text: '首页',
      iconPath: 'images/iconfont-home.png',
      selectedIconPath: 'images/iconfont-home-active.png',
    },
    {
      tabName: 'List',
      pagePath: ['pages/list/list'],
      text: '分类',
      iconPath: 'images/iconfont-list.png',
      selectedIconPath: 'images/iconfont-list-active.png',
    },
    {
      tabName: 'Cart',
      pagePath: ['pages/cart/cart'],
      text: '购物车',
      iconPath: 'images/iconfont-cart.png',
      selectedIconPath: 'images/iconfont-cart-active.png',
    },
    {
      tabName: 'User',
      pagePath: ['pages/user/user'],
      text: '个人中心',
      iconPath: 'images/iconfont-user.png',
      selectedIconPath: 'images/iconfont-user-active.png',
    },
  ]
}

App({
  onLaunch: function () {
    tabbar.initComponent(this, data)
  },
  onShow: function () {
  }
})
```
####2.引入wxss样式表
```wxss
@import './tabbar/tabbar.wxss'
```
####3.引入wxml模板
```wxml
<import src="../../tabbar/tabbar.wxml" />
<template is="tabbar" data="{{ tabbar }}" />
```

##如何配置
```js
var data = {
  color: 'darkgrey',//默认tab字体颜色
  selectedColor: '#479de6',//选中tab字体颜色
  isReminder: true,//是否启用提醒功能，可不添加该字段，默认不启用，不启用则无法使用setReminder与removeReminder方法
  list: [// tab list最多5个最少2个
    {
      tabName: 'Home',//tabName，必填，类似tabID
      pagePath: ['pages/home/home', 'pages/home-content/home-content'],//tab下所属路径，默认会自动根据此此段来匹配是否为选中状态，首项为主页
      text: '首页',//tab文字
      iconPath: 'images/iconfont-home.png',//tab默认图标
      selectedIconPath: 'images/iconfont-home-active.png',//tab选中图标
    },
    {
      tabName: 'List',
      pagePath: ['pages/list/list'],
      text: '分类',
      iconPath: 'images/iconfont-list.png',
      selectedIconPath: 'images/iconfont-list-active.png',
    },
    {
      tabName: 'Cart',
      pagePath: ['pages/cart/cart'],
      text: '购物车',
      iconPath: 'images/iconfont-cart.png',
      selectedIconPath: 'images/iconfont-cart-active.png',
    },
    {
      tabName: 'User',
      pagePath: ['pages/user/user'],
      text: '个人中心',
      iconPath: 'images/iconfont-user.png',
      selectedIconPath: 'images/iconfont-user-active.png',
    },
  ]
}
```

##如何使用
####在需要引用的页面初始化tabbar
app.tabbar.init()//无参数
```js
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
  }
})
```

####手动切换tab页面
app.tabbar.switchTab(tabName)//单一参数，跳转到tabName的tab主页
```js
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
    // 跳转到tabName为List的tab主页面
    app.tabbar.switchTab('List')
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
```

####设置提示
app.tabbar.setReminder(tabName1, tabName2,...)//多参数，参数为tabName
```js
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
    // 设置tabName为List的tab提醒
    app.tabbar.setReminder('List')
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
```

####取消提醒
app.tabbar.removeReminder(tabName1, tabName2,...)//多参数，参数为tabName
```js
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
    // 取消tabName为List的tab提醒
    app.tabbar.removeReminder('List')
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
```

##PS
####PS作者鼓励修改源文件来自定义tabbar或者添加动画等
####暂时只有es5版本，es6版本待定中

##Enjoy it
