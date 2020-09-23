<template>
    <view :style="{ height: showSecurity ? customBar + 'px' : '' }">
        <view
            class="query-header flex-center"
            :style="{ paddingTop: statusBar + 'px', background }"
        >
            <view class="header-back-btn">
                <view class="button-action flex-center" @click="onBack">
                    <star-icon
                        name="angle-left"
                        size="60"
                        class="action-color"
                    />
                </view>
            </view>
            <view class="header-content">
                <slot name="centerContent">
                    <view class="center-text action-color text-oneline">{{
                        title
                    }}</view>
                </slot>
            </view>
            <view class="right-button">
                <slot name="rightButton" />
            </view>
        </view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
import { mapState } from 'vuex'
export default {
    components: {
        starIcon,
    },
    props: {
        title: String,
        background: String,
        showSecurity:Boolean
    },
    computed: {
        ...mapState(['statusBar','customBar']),
    },
    methods: {
        onBack() {
            uni.navigateBack({
                delta: 1,
            })
        },
    },
}
</script>
<style lang="less" scoped>
.query-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    transition-duration: 0.3s;
    .header-back-btn {
        width: 45px;
        height: 45px;
        .button-action {
            height: 100%;
            width: 100%;
            justify-content: center;
        }
    }
    .header-content {
        width: calc(100% - 90px);
        height: 100%;
        .center-text {
            width: 100%;
            line-height: 45px;
            font-size: 36rpx;
        }
    }
    .right-button {
        width: 45px;
    }
}
</style>
