<template>
    <view :style="{ height: showSecurity ? customBar + 'px' : '' }">
        <view
            class="query-header flex-center"
            :style="{ height: customBar + 'px', paddingTop: statusBar + 'px' }"
        >
            <star-blur
                class="sheet-bg"
                :style="{ opacity }"
                :params="{
                    width: '100%',
                    height: '45px',
                    image,
                    blur: 's',
                }"
            />
            <view class="header-back-btn">
                <view class="button-action flex-center" @click="onBack">
                    <star-icon name="angle-left" size="60" :style="{ color }" />
                </view>
            </view>
            <view class="header-content" :style="{ color }">
                <slot name="centerContent">
                    <view class="center-text text-oneline">{{ title }}</view>
                </slot>
            </view>
            <view class="header-back-btn">
                <slot name="rightButton" />
            </view>
        </view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
import starBlur from '@/components/helang-blur'
import { mapState } from 'vuex'
export default {
    components: {
        starIcon,
        starBlur,
    },
    props: {
        title: String,
        showSecurity: Boolean,
        color: {
            type: String,
            default: '#000',
        },
        opacity: {
            type: [String,Number],
            default: 0
        },
        image: String
    },
    computed: {
        ...mapState(['statusBar', 'customBar']),
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
    box-sizing: border-box;
    .sheet-bg {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        height: 45px;
        z-index: -1;
    }
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
        height: 100%;
    }
}
</style>
