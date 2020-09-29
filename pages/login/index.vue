<template>
    <view
        class="login-layout flex-center"
        :style="{ height: windowHeight + 'px' }"
    >
        <!-- 顶部logo -->
        <view class="login-top-logo flex-center">
            <image mode="aspectFill" lazy-load class="login-logo" src="@/static/images/logo.png" />
        </view>
        <!-- 底部登录 -->
        <signIn />
    </view>
</template>
<script>
import signIn from './components/sign-in'
import { mapState } from 'vuex'
export default {
    components: {
        signIn,
    },
    computed: {
        ...mapState(['windowHeight']),
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
    padding: 160rpx 24rpx 60rpx;
    box-sizing: border-box;
    color: #fff;
    position: relative;
    .login-top-logo {
        flex-direction: column;
        .login-logo {
            width: 240rpx;
            height: 240rpx;
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
