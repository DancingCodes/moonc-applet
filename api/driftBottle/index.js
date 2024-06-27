import request from "@/utils/request/index"

export const createDriftBottle = (data) => request({ url: '/driftBottle/createDriftBottle', method: 'post', data })

export const getRandomDriftBottle = () => request({ url: '/driftBottle/getRandomDriftBottle', method: 'get' })

export const updataDriftBottle = (data) => request({ url: '/driftBottle/updataDriftBottle', method: 'post', data })