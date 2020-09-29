<template>
    <view
        class="login-layout flex-center"
        :style="{ height: windowHeight + 'px' }"
    >
        <transition name="sigin-signup">
            <!-- logo -->
            <view
                :class="[
                    'login-top-logo',
                    'flex-center',
                    logoShow && 'logo-transition',
                ]"
            >
                <image mode="aspectFill" lazy-load class="login-logo" src="@/static/images/logo.png" />
                <text>welcome to star music</text>
            </view>
        </transition>
    </view>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['windowHeight']),
    },
    data() {
        return {
            logoShow: false,
        }
    },
    onShow() {
        this.$nextTick(() => {
            console.log('haj')
            this.logoShow = true
            setTimeout(() => {
                // 取出用户信息，如果不存在曾视为未登录
                let userInfo = this.$store.state.userInfo
                if (!userInfo) {
                    console.log('go login')
                    uni.redirectTo({
                        url: '/pages/login/index',
                    })
                } else {
                    console.log('go home')
                    uni.switchTab({
                        url: '/pages/home/index',
                    })
                }
            }, 3900)
        })
    },
}
</script>
<style lang="less" scoped>
.login-layout {
    width: 100%;
    background: url('../../static/images/login-bg.png') no-repeat;
    background-size: 100%;
    justify-content: center;
    padding: 100rpx 24rpx 60rpx;
    box-sizing: border-box;
    color: #fff;
    position: relative;
    .login-top-logo {
        transform: translateY(-180rpx);
        flex-direction: column;
        .login-logo {
            width: 300rpx;
            height: 300rpx;
        }
        text {
            font-size: 48rpx;
            font-weight: bold;
            font-style: italic;
        }
    }
}
.login-layout::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1;
}
</style>
