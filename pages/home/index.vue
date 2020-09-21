<template>
    <keep-alive>
        <view class="query-content" :style="{ height: windowHeight + 'px' }">
            <view
                class="query-navbar"
                :style="{ paddingTop: statusBar + 'px' }"
            >
                <!-- 首页navbar左侧图标 -->
                <view class="navbar-icon button-action flex-center">
                    <starIcon name="bars" size="32" />
                </view>
                <!-- 首页navbar中间tab -->
                <view class="navbar-tab flex-center">
                    <view
                        :class="[
                            'tab-box',
                            'button-action',
                            currentKey === index && [
                                'action-color',
                                'tab-action',
                            ],
                        ]"
                        v-for="(item, index) in navBar"
                        :key="index"
                        @click="handlerTab(index)"
                    >
                        {{ item.label }}
                    </view>
                </view>
                <!-- 首页navbar有侧图标 -->
                <view class="navbar-icon button-action flex-center">
                    <starIcon name="search" size="32" />
                </view>
            </view>
            <view
                class="query-container"
                :style="{ height: `calc(100% - 90rpx - ${statusBar}px)` }"
                @touchstart="onStart"
                @touchmove="onMove"
                @touchend="onEnd"
            >
                <!-- <keep-alive> -->
                <component
                    :style="{
                        transform: `translateX(-${transform}px)`,
                        transitionDuration: duration + 'ms',
                        height: '100%',
                        width: '100%',
                        flexShrink: '0',
                        overflowY: 'auto',
                        boxSizing: 'border-box',
                    }"
                    :isRendering="currentKey === index"
                    v-for="(item, index) in navBar"
                    :key="index"
                    :is="item.componentName"
                />
                <!-- </keep-alive> -->
            </view>
        </view>
    </keep-alive>
</template>
<script>
import starIcon from '@/components/star-icon'
import homeMyed from './components/myed'
import homeFind from './components/find'
import homeTop from './components/top'
import { mapState } from 'vuex'
export default {
    components: {
        starIcon,
        homeMyed,
        homeFind,
        homeTop,
    },
    data() {
        return {
            duration: 300,
            currentKey: 1,
            navBar: [
                { label: '我的', componentName: 'home-myed' },
                { label: '发现', componentName: 'home-find' },
                { label: '排行榜', componentName: 'home-top' },
            ],
            moveStart: 0,
            moveIng: 0,
        }
    },
    computed: {
        ...mapState(['statusBar', 'windowHeight', 'windowWidth']),
        transform() {
            let num = this.currentKey * this.windowWidth + this.moveIng
            let total = (this.navBar.length - 1) * this.windowWidth
            if (num >= total) {
                this.currentKey = this.navBar.length - 1
                return total
            } else if (num <= 0) {
                this.currentKey = 0
                return 0
            } else {
                return num
            }
        },
    },
    methods: {
        handlerTab(key) {
            if (this.currentKey === key) return
            this.currentKey = key
            this.$emit('handlerTab', this.currentKey)
        },
        // 手指滑动开始
        onStart(event) {
            this.duration = 0
            this.moveStart = event.touches[0].clientX
        },
        // 手指滑动距离
        onMove(event) {
            let move = event.touches[0].clientX
            this.moveIng = this.moveStart - move
        },
        // 手指滑动结束
        onEnd(event) {
            if (this.moveIng > 100) {
                this.currentKey++
            } else if (this.moveIng < -100) {
                this.currentKey--
            }
            this.duration = 300
            this.moveIng = 0
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
        align-items: center;
        .navbar-icon {
            width: 90rpx;
            height: 90rpx;
            justify-content: center;
        }
        .navbar-tab {
            width: calc(100% - 180rpx);
            height: 100%;
            padding: 0 50rpx;
            box-sizing: border-box;
            .tab-box {
                width: calc(100% / 3);
                line-height: 90rpx;
                text-align: center;
                transition-duration: 0.2s;
            }
            .tab-action {
                transform: scale(1.1);
                font-weight: bold;
            }
        }
    }
    .query-container {
        display: flex;
        align-items: flex-start;
        flex-wrap: nowrap;
        width: 100%;
        overflow-x: hidden;
    }
}
</style>
