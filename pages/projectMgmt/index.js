import { createMemoItem } from '@/api/memo/index'
import { toast } from '@/utils/toast/index'

Page({
    data: {
        // 内容
        content: '',
        // 提醒时间
        reminderTime: '',
        // 时间选择器展示状态
        timePickerShow: false,
        // 确定按钮loading
        btnLoading: false
    },
    onLoad() {
    },
    // 打开时间选择器
    showTimePicker() {
        this.setData({
            timePickerShow: true
        })
    },
    // 关闭时间选择器
    closeTimePicker() {
        this.setData({
            timePickerShow: false
        })
    },
    // 确认时间选择器
    onTimePickerConfirm(e) {
        this.setData({
            reminderTime: e.detail
        })
        this.closeTimePicker()
    },
    // 取消时间选择器
    onTimePickerCancel() {
        this.setData({
            reminderTime: ''
        })
        this.closeTimePicker()
    },
    // 确认
    submit() {
        if (!this.data.content) {
            return toast('内容不可为空')
        }
        if (!this.data.reminderTime) {
            return toast('提醒时间不可为空')
        }
        this.setData({
            btnLoading: true
        })
        createMemoItem({ content: this.data.content, reminderTime: this.data.reminderTime }).then(() => {
            toast('添加成功')
            wx.switchTab({
                url: '/pages/index/index',
            })
        }).finally(() => {
            this.setData({
                btnLoading: false
            })
        })
    },
})