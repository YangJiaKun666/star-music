import { httpRequest } from './request'
export default {
    // 手机号登录
    loginByPhoneNumber: async (data) => {
        let res = await httpRequest('/login/cellphone', 'GET', data)
        return res
    },
}
