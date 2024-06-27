import { createDriftBottle, updataDriftBottle, getRandomDriftBottle } from '@/api/driftBottle/index'
import { toast } from '@/utils/toast/index'

Page({
    data: {
        // 投放弹窗
        popupShow: false,
        // 投放内容
        popupMsg: '',
        // 是否正在打捞
        isSalvage: false,
        // 瓶子显示状态
        driftBottleShow: false,
        // 瓶子信息
        driftBottleInfo: {}
    },
    // 显示瓶子
    showDriftBottle() {
        this.setData({ isSalvage: true });
        setTimeout(() => {
            this.setData({ isSalvage: false });
            this.setData({ driftBottleShow: true });
        }, 3000)
    },
    // 捕捉漂流瓶
    getDriftBottle() {
        getRandomDriftBottle().then((res) => {
            if (!res.data) {
                toast('瓶子是空的')
                this.setData({ driftBottleShow: false });
                return
            }


            this.setData({ driftBottleInfo: res.data });
            this.showPopup()
        })
    },
    // 打开投放
    showPopup() {
        this.setData({ popupShow: true });
    },
    // 关闭投放
    hidePopup() {
        this.setData({ popupShow: false });
        this.setData({ driftBottleInfo: {} });
        this.setData({ driftBottleShow: false });
    },
    // 确认投放
    submit() {
        if (!this.data.popupMsg) {
            toast('留言不能为空')
            return
        }

        let api = null
        let sendObj = {
            msg: this.data.popupMsg
        }
        if (this.data.driftBottleInfo.id) {
            api = updataDriftBottle
            sendObj.id = this.data.driftBottleInfo.id
        } else {
            api = createDriftBottle
        }

        api(sendObj).then(() => {
            toast('漂流瓶已开始旅行')
            this.hidePopup()
            this.setData({ popupMsg: '' });
        }).finally(() => {
            this.setData({
                submitLoading: false
            })
        })


    }
})