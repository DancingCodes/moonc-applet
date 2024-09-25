import { createMemoItem } from '@/api/memo/index'
import { toast } from '@/utils/toast/index'

Page({
    data: {
        content: ''
    },
    onLoad() {
    },
    submit() {
        if (this.data.content.trim().length === 0) {
            return toast('内容不可为空')
        }
        createMemoItem({ content: this.data.content }).then(() => {
            toast('添加成功')
        })
    }
})