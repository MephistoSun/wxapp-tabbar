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