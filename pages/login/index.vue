<template>
    <view
        class="login-layout flex-center"
        :style="{ height: windowHeight + 'px' }"
    >
        <!-- 顶部logo -->
        <view class="login-top-logo flex-center">
            <image class="login-logo" src="@/static/images/logo.png" />
            <text>welcome to star music</text>
        </view>
        <!-- 底部登录 -->
        <transition name="sigin-signup">
            <signIn v-show="isShow" />
        </transition>
    </view>
</template>
<script>
import signIn from './components/sign-in'
export default {
    components: {
        signIn,
    },
    data() {
        return {
            isShow: false,
            windowHeight: getApp().globalData.windowHeight,
            timer: null,
        }
    },

    onLoad() {
    },

    onShow() {
        this.timer = setTimeout(() => {
            this.isShow = true
        }, 1000)
    },

    onHide() {
        clearTimeout(this.timer)
    },
}
</script>
<style lang="less" scoped>
.login-layout {
    width: 100%;
    background: url('../../static/images/login-bg.png') no-repeat;
    background-size: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 100rpx 24rpx 60rpx;
    box-sizing: border-box;
    color: #fff;
    position: relative;
    .login-top-logo {
        flex-direction: column;
        .login-logo {
            width: 220rpx;
            height: 220rpx;
        }
        text {
            font-size: 36rpx;
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
