<template>
    <view class="query-content">
        <view class="query-navbar">
            <!-- 首页navbar左侧图标 -->
            <view class="navbar-icon flex-center">
                <starIcon name="bars" size="32" />
            </view>
            <!-- 首页navbar中间tab -->
            <view class="navbar-tab flex-center">
                <view
                    :class="[
                        'tab-box',
                        currentKey === item.key && [
                            'action-color',
                            'tab-action',
                        ],
                    ]"
                    v-for="item in navBar"
                    :key="item.key"
                    @click="handlerTab(item.key)"
                >
                    {{ item.label }}
                </view>
            </view>
            <!-- 首页navbar有侧图标 -->
            <view class="navbar-icon flex-center">
                <starIcon name="search" size="32" />
            </view>
        </view>
        <view class="query-container"> </view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
export default {
    components: {
        starIcon,
    },
    data() {
        return {
            currentKey: 'find',
            navBar: [
                { label: '我的', key: 'myed' },
                { label: '发现', key: 'find' },
                { label: '排行榜', key: 'top' },
                { label: '视频', key: 'mv' },
            ],
        }
    },
    methods: {
        handlerTab(key) {
            if (this.currentKey === key) return
            this.currentKey = key
            this.$emit('handlerTab', this.currentKey)
        },
    },
}
</script>
<style lang="less">
.query-content {
    width: 100%;
    .query-navbar {
        height: 90rpx;
        display: flex;
        .navbar-icon {
            width: 90rpx;
            height: 90rpx;
            justify-content: center;
        }
        .navbar-tab {
            width: calc(100% - 180rpx);
            height: 100%;
            padding: 0 30rpx;
            box-sizing: border-box;
            .tab-box {
                width: calc(100% / 4);
                text-align: center;
                transition-duration: 0.2s;
            }
            .tab-action {
                font-size: 16px;
                font-weight: bold;
            }
        }
    }
    .query-container {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        overflow-x: hidden;
    }
}
</style>
