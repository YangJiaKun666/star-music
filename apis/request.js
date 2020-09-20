import { BASE_URL } from '@/utils/base-url.js'
const TIME_OUT = 30000

export function httpRequest(url, method, data) {
    return new Promise((resolve) => {
        uni.request({
            url: BASE_URL + url,
            method,
            timeout: TIME_OUT,
            data,
            success: (res) => {
                if (res.data.code !== 301) {
                    resolve(res.data)
                } else {
                    uni.redirectTo({
                        url: '/pages/home/index',
                    })
                }
            },
        })
    })
}
