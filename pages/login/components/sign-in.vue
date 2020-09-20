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
        goHome() {
            uni.redirectTo({
                url: '/pages/home/index',
            })
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
