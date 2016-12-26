var common = {
    getApp: function () {
        return getApp()
    },
    getCurrentPage: function () {
        return getCurrentPages()[0]
    },
    getCurrentPath: function () {
        return this.getCurrentPage().__route__
    },
    getRelativePath: function (currentPath, targetPath) {
        var currentPathArray = currentPath.split('/')
        var targetPathArray = targetPath.split('/')
        var samePath = false
        var levelNumber = 0
        var relativePath = ''
        for (var a = 0; a < currentPathArray.length; a++) {
            var currentPathData = currentPathArray[a]
            for (var b = 0; b < targetPathArray.length; b++) {
                var targetPathData = targetPathArray[b]
                if (targetPathData == currentPathData) {
                    levelNumber = currentPathArray.length - b - 1
                    samePath = true
                    break
                }
            }
        }
        if (samePath) {
            for (var a = 0; a < levelNumber - 1; a++) {
                relativePath += '../'
            }
            for (var a = levelNumber; a > 0; a--) {
                var targetPathData = targetPathArray[a]
                if (a == 1) relativePath += targetPathData
                else relativePath += targetPathData + '/'
            }
        } else {
            levelNumber = currentPathArray.length - 1
            for (var a = 0; a < levelNumber; a++) {
                relativePath += '../'
            }
            for (var a = 0; a < targetPathArray.length; a++) {
                var targetPathData = targetPathArray[a]
                if (a == targetPathArray.length - 1) relativePath += targetPathData
                else relativePath += targetPathData + '/'
            }
        }
        return relativePath
    }
}

module.exports = common