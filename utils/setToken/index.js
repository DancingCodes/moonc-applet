import request from '@/utils/request/index'

const setToken = async () => {
    const { code } = await wx.login()

    const { data } = await request({
        url: '/user/login',
        method: 'post',
        data: { code },
    }, false)

    wx.setStorageSync('token', data.token)
}

export default setToken