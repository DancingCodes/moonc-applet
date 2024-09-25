Component({
    data: {
        minDate: new Date().getTime(),
        currentDate: new Date().getTime(),
    },
    methods: {
        onInput(event) {
            this.setData({
                currentDate: event.detail,
            });
        },
        onConfirm() {
            this.triggerEvent('OnConfirm', this.data.currentDate)
        },
        onCancel() {
            this.triggerEvent('OnCancel')
        },
    }
})