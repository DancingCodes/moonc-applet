import { getMemoList } from '@/api/memo/index'
import { toast } from '@/utils/toast/index'

Page({
    data: {
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
            list: []
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
        toast('内容已刷新')
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
        wx.redirectTo({
            url: '/pages/projectMgmt/index',
        })
    },
    editItem(e) {
        const id = e.currentTarget.dataset.id
        wx.redirectTo({
            url: `/pages/projectMgmt/index?id=${id}`,
        })
    }
})