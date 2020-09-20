<template>
    <view class="title-box flex-center">
        <view class="title-text action-color">{{ title }}</view>
        <view class="select-more border-line" v-if="buttonLabel" @click="$emit('button-click')">{{
            buttonLabel
        }}</view>
    </view>
</template>
<script>
export default {
    props: {
        title: String,
        buttonLabel: String,
    },
}
</script>
<style lang="less" scoped>
.title-box {
    justify-content: space-between;
    .title-text {
        font-size: 34rpx;
        font-weight: bold;
        line-height: 80rpx;
    }
    .select-more {
        padding: 0 18rpx;
        font-size: 24rpx;
        line-height: 46rpx;
        border-radius: 50rpx;
    }
}
</style>
