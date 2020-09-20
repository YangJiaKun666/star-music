<template>
    <view class="sign-up">
        <star-input
            iconName="phone"
            type="number"
            placeholder="手机号"
            v-model="phoneNumber"
        />
        <star-input
            iconName="lock"
            type="password"
            placeholder="密码"
            v-model="password"
        />
        <star-button
            background="linear-gradient(90deg, #d66a5d, #95444b)"
            @click="goHome"
        >
            登录
        </star-button>
    </view>
</template>
<script>
import starInput from '@/components/star-input.vue'
import starButton from '@/components/star-button.vue'
import apis from '@/apis/index'
import md5 from '@/utils/md5'
export default {
    components: {
        starInput,
        starButton,
    },
    data() {
        return {
            phoneNumber: '',
            password: '',
        }
    },
    methods: {
        async goHome() {
            if (!this.phoneNumber)
                return uni.showToast({
                    title: '请输入手机号',
                    icon: 'none',
                })
            let loginRes = await apis.loginByPhoneNumber({
                phone: this.phoneNumber,
                md5_password: md5.hex_md5(this.password),
            })
            if (loginRes.code !== 200) {
                uni.showToast({
                    title: loginRes.message,
                    icon: 'none',
                })
            } else {
                uni.showToast({
                    title: '登录成功',
                    icon: 'success',
                }).then(() => {
                    this.$store.commit('setUserInfo', {
                        cookie: loginRes.cookie,
                        token: loginRes.token,
                        ...loginRes.profile,
                    })
                    setTimeout(() => {
                        uni.redirectTo({
                            url: '/pages/home/index',
                        })
                    }, 1500)
                })
            }
        },
    },
}
</script>
<style lang="less" scoped>
.sign-up {
    padding: 15px 10px;
    border-radius: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
