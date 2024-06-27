import request from "@/utils/request/index"

export const getUserInfo = () => request({ url: '/user/info', method: 'get' })

export const updataUserInfo = (data) => request({ url: '/user/updata', method: 'post', data })