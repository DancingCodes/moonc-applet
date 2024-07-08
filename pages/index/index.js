Page({
    data: {
        show: false
    },
    addItem: function () {
        this.setData({
            show: true
        })
    },
    hideOverlay: function () {
        this.setData({
            show: false
        })
    }
})