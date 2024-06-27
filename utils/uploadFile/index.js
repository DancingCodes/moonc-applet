import { requestRootPath } from '@/utils/request/index'
import { getHeader } from '@/utils/getHeader/index'
import { toast } from '@/utils/toast/index'

export const uploadImage = (file, cb) => {
    wx.uploadFile({
        url: `${requestRootPath}/uploadFile/image`,
        filePath: file.url,
        name: 'file',
        header: getHeader(),
        success(res) {
            const data = JSON.parse(res.data)
            if (data.status === 500) {
                toast(data.message)
            }
            cb(data)
        },
    });
}