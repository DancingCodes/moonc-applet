import request from "@/utils/request/index"

export const createMemo = (data) => request({ url: '/memo/createMemo', method: 'post', data })

export const getMemo = (data) => request({ url: '/memo/getMemo', method: 'post', data })

export const getMemoList = (data) => request({ url: '/memo/getMemoList', method: 'post', data })