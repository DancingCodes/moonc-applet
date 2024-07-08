Page({
    data: {
        show: false,
        message: ''
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