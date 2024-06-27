export const getHeader = () => {
    return {
        Authorization: `Bearer ${wx.getStorageSync("token")}`
    }
}