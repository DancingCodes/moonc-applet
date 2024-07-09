import { createMemoItem, getMemoList } from '@/api/memo/index'
import { toast } from '@/utils/toast/index'

Page({
    data: {
        show: false,
        content: ''
    },
    onLoad() {
        getMemoList({
            pageNo: 1,
            pageSize: 10
        }).then(res => {
            console.log(res);
        })
    },
    addItem() {
        this.setData({
            show: true
        })
    },
    submit() {
        if (this.data.content.trim().length === 0) {
            return toast('内容不可为空')
        }
        createMemoItem({ content: this.data.content }).then(() => {
            toast('添加成功')
            this.setData({
                show: false
            })
        })

    }
})