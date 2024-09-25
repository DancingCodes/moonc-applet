import { createMemoItem } from '@/api/memo/index'
import { toast } from '@/utils/toast/index'

Page({
    data: {
        // 内容
        content: '',
        // 订阅时间
        currentDate: '',
        // 时间选择器展示状态
        timePickerShow: false
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
            currentDate: e.detail
        })
        this.closeTimePicker()
    },
    // 取消时间选择器
    onTimePickerCancel() {
        this.setData({
            currentDate: ''
        })
        this.closeTimePicker()
    },
    // 发布
    submit() {
        if (this.data.content.trim().length === 0) {
            return toast('内容不可为空')
        }
        createMemoItem({ content: this.data.content }).then(() => {
            toast('添加成功')
        })
    },
})