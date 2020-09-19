<template>
    <div class="button-box">
        <button
            class="button"
            :disabled="disabled"
            :loading="loading"
            :style="{ background }"
            @click="$emit('click')"
            hover-class="action"
        >
            <slot />
        </button>
    </div>
</template>
<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        background: {
            type: String,
            default: '#4395ff',
        },
    },
}
</script>
<style lang="less" scoped>
.button-box {
    width: 100%;
    .button {
        height: 70rpx;
        line-height: 70rpx;
        font-size: 28rpx;
        border-radius: 50rpx;
        color: #fff;
        overflow: hidden;
    }
    .button::after {
        position: absolute;
        content: ' ';
        top: 0;
        left: 0;
        border-radius: 50rpx;
        transition-duration: 0.2s;
    }
    .action {
        position: relative;
    }
    .action::after {
        background: rgba(0, 0, 0, 0.1);
    }
}
</style>
