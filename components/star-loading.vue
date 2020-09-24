<template>
    <view class="loading">
        <view
            class="loading-line"
            v-for="(item, index) of 4"
            :key="index"
        ></view>
        <view class="loading-text">努力加载中...</view>
    </view>
</template>
<style lang="less" scoped>
.loading {
    height: 14px;
    width: 100%;
    margin: 14px 0;
    display: flex;
    align-items: baseline;
    justify-content: center;
    .loading-line {
        height: 16px;
        width: 2px;
        border-radius: 6px;
        background: red;
        margin-right: 4px;
        transform-origin: 50% 100%;
        transform: translateY(1px);
        animation: loading 0.8s linear infinite;
    }
    .loading-line:nth-child(2n) {
        animation-delay: 0.4s;
    }
}
@keyframes loading {
    0% {
        transform: scaleY(0.3);
    }
    50% {
        transform: scaleY(1);
    }
    100% {
        transform: scaleY(0.3);
    }
}
</style>
