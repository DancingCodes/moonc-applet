App({
    onLaunch() {
        wx.getUpdateManager().onUpdateReady(() => {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: (res) => {
                    if (res.confirm) {
                        updateManager.applyUpdate()
                    }
                }
            })
        })
    }
})