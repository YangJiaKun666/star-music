import { BASE_URL } from '@/utils/base-url.js'
import store from '@/store/index'
const COOKIE = store.state.userInfo ? store.state.userInfo.cookie : null
const TIME_OUT = 30000

export function httpRequest(url, method, data) {
    let queryUrl =
        url === '/login/cellphone'
            ? BASE_URL + url
            : BASE_URL + url + `?cookie=${COOKIE}`
    return new Promise((resolve) => {
        uni.request({
            url: queryUrl,
            method,
            timeout: TIME_OUT,
            data,
            success: (res) => {
                if (res.data.code !== 301) {
                    resolve(res.data)
                } else {
                    uni.redirectTo({
                        url: '/pages/login/index',
                    })
                }
            },
        })
    })
}
