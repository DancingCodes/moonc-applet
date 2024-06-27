import { getUserInfo, updataUserInfo } from '@/api/user/index'
import { uploadImage } from '@/utils/uploadFile/index';
import { toast } from '@/utils/toast/index'

Page({
    data: {
        userName: '',
        userPicture: [],
        submitLoading: false
    },
    onLoad() {
        getUserInfo().then(res => {
            this.setData({
                userName: res.data.name
            })
            this.setData({
                userPicture: [{ url: res.data.picture }]
            })
        })
    },
    // 图片上传完成
    imageRead(event) {
        const { file } = event.detail;
        uploadImage(file, (data) => {
            this.setData({
                userPicture: [{ url: data.data.imageUrl }]
            })
        })
    },
    // 图片删除
    imageDel() {
        this.setData({
            userPicture: []
        })
    },
    // 修改
    submit() {
        if (!this.data.userPicture.length) {
            toast('用户头像不能为空')
            return
        }
        if (!this.data.userName) {
            toast('用户名不能为空')
            return
        }

        this.setData({
            submitLoading: true
        })
        updataUserInfo({
            name: this.data.userName,
            picture: this.data.userPicture[0].url
        }).then(() => {
            wx.switchTab({
                url: '/pages/user/index'
            })
        }).finally(() => {
            this.setData({
                submitLoading: false
            })
        })
    }
})