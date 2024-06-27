export const toast = (msg) => {
    wx.showToast({
        title: msg,
        icon: 'none',
        duration: 2000
    })
}