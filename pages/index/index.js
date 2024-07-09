import { createMemoItem, getMemoList } from '@/api/memo/index'
import { toast } from '@/utils/toast/index'

Page({
    data: {
        show: false,
        content: '',
        refresherTriggered: false,
        pageNo: 1,
        list: [],
        total: 0
    },
    onLoad() {
        this.getList()
    },
    resetList() {
        this.setData({
            pageNo: 1,
            list: [],
            total: 0
        })
    },
    async getList() {
        const { data } = await getMemoList({ pageNo: this.data.pageNo, pageSize: 10 })
        this.setData({
            list: [...this.data.list, ...data.list],
            total: data.total,
        })
    },
    async refresherrefresh() {
        this.resetList()
        await this.getList()
        this.setData({
            refresherTriggered: false
        })
    },
    scrolltolower() {
        if (this.data.list.length === this.data.total) {
            return
        }
        this.setData({
            pageNo: this.data.pageNo + 1
        })
        this.getList()
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
            this.resetList()
            this.getList()
        })
    }
})