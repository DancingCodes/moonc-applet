import request from "@/utils/request/index"

export const createMemoItem = (data) => request({ url: '/memo/create', method: 'post', data })