var common = require('./common')
var tabbar = {
    initComponent: function (app, data) {
        var data = this.initData(app, data)
        if (!app.data) app.data = {}
        if (!app.data.tabbar) app.data.tabbar = data
        if (this.verifyDataFormat(data)) app.data.tabbar.isShow = true
        app.tabbar = {
            init: this.initTabbar.bind(this),
            switchTab: this.switchTab.bind(this),
            setReminder: this.setReminder.bind(this),
            removeReminder: this.removeReminder.bind(this)
        }
    },
    initData: function (app, data) {
        var initTabData = {
            color: 'white',
            selectedColor: 'grey',
            isReminder: false,
            list: [],
            isShow: false
        }
        var initItemData = {
            tabName: '',
            pagePath: [],
            text: '',
            iconPath: '',
            selectedIconPath: '',
            url: '',
            isActive: false,
            isReminder: false
        }
        var tabData = Object.assign({}, initTabData, data)
        for (var a = 0; a < tabData.list.length; a++) {
            var itemData = tabData.list[a]
            itemData = Object.assign({}, initItemData, itemData)
        }
        return tabData
    },
    verifyDataFormat: function (data) {
        var listData = data.list
        var listDataLength = listData.length
        var tabListData = data.list
        var same = false
        var judge = true
        if (listDataLength < 2 || listDataLength > 5) {
            console.error('tab list length expect 2~5')
            judge = false
        }
        for (var a = 0; a < tabListData.length; a++) {
            for (var b = a + 1; b < tabListData.length - 1; b++) {
                if (tabListData[a].tabName == tabListData[b].tabName) {
                    same = true
                    judge = false
                }
            }
        }
        if (same) console.error('tab name expect different')
        return judge
    },
    initTabbar: function () {
        var currentPage = common.getCurrentPage()
        var data = this.getConfig()
        var listData = data.list
        var currentPath = common.getCurrentPath()
        for (var a = 0; a < listData.length; a++) {
            var itemData = listData[a]
            itemData.iconPath = common.getRelativePath(currentPath, itemData.iconPath)
            itemData.selectedIconPath = common.getRelativePath(currentPath, itemData.selectedIconPath)
            for (var b = 0; b < itemData.pagePath.length; b++) {
                var pagePath = itemData.pagePath[b]
                if (pagePath == currentPath) {
                    itemData.isActive = true
                    break
                }
            }
        }
        currentPage.setData({
            'tabbar': data
        })
        currentPage.redirectTab = this.redirectTab.bind(this)
    },
    redirectTab: function (e) {
        var currentPath = common.getCurrentPath()
        var data = this.getData()
        var listData = data.list
        var index = e.currentTarget.dataset.index
        var targetPath = listData[index].pagePath[0]
        var relativePath = common.getRelativePath(currentPath, targetPath)
        wx.redirectTo({
            url: relativePath
        })

    },
    switchTab: function (tabName) {
        var currentPath = common.getCurrentPath()
        var tabData = this.getTabData(tabName)
        var targetPath = tabData.pagePath[0]
        var relativePath = common.getRelativePath(currentPath, targetPath)
        wx.redirectTo({
            url: relativePath
        })
    },
    setReminder: function () {
        var currentPage = common.getCurrentPage()
        var data = this.getData()
        var listData = data.list
        var arg = arguments
        if (!data.isReminder) return console.error('expect isReminder config is true')
        for (var a = 0; a < listData.length; a++) {
            var tabData = listData[a]
            for (var b = 0; b < arg.length; b++) {
                var tabName = arg[b]
                if (tabName == tabData.tabName) {
                    tabData.isReminder = true
                    break
                }
            }
        }
        currentPage.setData({
            'tabbar': data
        })
    },
    removeReminder: function () {
        var currentPage = common.getCurrentPage()
        var data = this.getData()
        var listData = data.list
        var arg = arguments
        if (!data.isReminder) return console.error('expect isReminder config is true')
        for (var a = 0; a < listData.length; a++) {
            var tabData = listData[a]
            for (var b = 0; b < arg.length; b++) {
                var tabName = arg[b]
                if (tabName == tabData.tabName) {
                    tabData.isReminder = false
                    break
                }
            }
        }
        currentPage.setData({
            'tabbar': data
        })
    },
    getTabData: function (tabName) {
        var data = this.getData()
        var listData = data.list
        for (var a = 0; a < listData.length; a++) {
            var tabData = listData[a]
            if (tabData.tabName == tabName) return tabData;
        }
        console.error('expect tab name not found')
    },
    getConfig: function () {
        var app = common.getApp()
        var config = JSON.parse(JSON.stringify(app.data.tabbar))
        return config
    },
    getData: function () {
        var currentPage = common.getCurrentPage()
        var data = currentPage.data.tabbar
        return data
    },
}

module.exports = tabbar