import request from "@/utils/request/index"

export const createMemoItem = (data) => request({ url: '/memo/create', method: 'post', data })

export const getMemoList = (data) => request({ url: '/memo/getList', method: 'post', data })