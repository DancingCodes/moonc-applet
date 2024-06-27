import setToken from "@/utils/setToken/index";
export const requestRootPath = 'http://127.0.0.1:3001'
// export const requestRootPath = 'https://appletapi.moonc.love'
import { getHeader } from '@/utils/getHeader/index'
import { toast } from '@/utils/toast/index'


const request = async ({ url, method, data }, isNeedToken = true) => {
    if (isNeedToken && !wx.getStorageSync("token")) {
        // 获取Token
        await setToken()
        // 重新请求当前接口
        return request({ url, method, data })
    } else {
        return new Promise((resolve, reject) => {
            wx.request({
                url: `${requestRootPath}${url}`,
                method,
                data,
                header: getHeader(),
                success(res) {
                    if (res.data.status === 500) {
                        toast(res.data.message)
                    }
                    resolve(res.data);
                },
                fail(error) {
                    reject(error);
                }
            });
        })
    }
}

export default request