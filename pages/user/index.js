import { getUserInfo } from '@/api/user/index'

Page({
    data: {
        userInfo: {
            name: '',
            picture: '',
        }
    },
    onShow() {
        getUserInfo().then(res => {
            // 数据不相同时才去更新
            for (let k in this.data.userInfo) {
                if (this.data.userInfo[k] !== res.data[k]) {
                    this.setData({
                        userInfo: {
                            ...this.data.userInfo,
                            [k]: res.data[k],
                        }
                    })
                }
            }
        })
    },
    editUserInfo: () => {
        wx.navigateTo({ url: '/pages/user/editUser/index' })
    },
    goDriftBottle: () => {
        wx.navigateTo({ url: '/pages/driftBottle/index' })
    }
})