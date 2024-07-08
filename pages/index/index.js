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
    submit: function () {
        console.log(2);
    }
})