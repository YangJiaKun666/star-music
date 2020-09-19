<template>
    <view class="query-content" :style="{ height: windowHeight + 'px' }">
        <view class="query-navbar" :style="{ paddingTop: statusBar + 'px' }">
            <!-- 首页navbar左侧图标 -->
            <view class="navbar-icon flex-center">
                <starIcon name="bars" size="32" />
            </view>
            <!-- 首页navbar中间tab -->
            <view class="navbar-tab flex-center">
                <view
                    :class="[
                        'tab-box',
                        currentKey === index && ['action-color', 'tab-action'],
                    ]"
                    v-for="(item, index) in navBar"
                    :key="index"
                    @click="handlerTab(index)"
                >
                    {{ item.label }}
                </view>
            </view>
            <!-- 首页navbar有侧图标 -->
            <view class="navbar-icon flex-center">
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
            <view
                class="query-box"
                :style="{
                    transform: `translateX(-${transform}px)`,
                    transitionDuration: duration + 'ms',
                }"
                v-for="(item, index) in navBar"
                :key="index"
            >
                <component :is="item.componentName" />
            </view>
        </view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
import homeMyed from './components/myed'
import homeFind from './components/find'
import homeTop from './components/top'
import homeVideos from './components/videos'
export default {
    components: {
        starIcon,
        homeMyed,
        homeFind,
        homeTop,
        homeVideos,
    },
    data() {
        return {
            statusBar: getApp().globalData.statusBar,
            windowHeight: getApp().globalData.windowHeight,
            windowWidth: getApp().globalData.windowWidth,
            duration: 300,
            currentKey: 1,
            navBar: [
                { label: '我的', componentName: 'home-myed' },
                { label: '发现', componentName: 'home-find' },
                { label: '排行榜', componentName: 'home-top' },
                { label: '视频', componentName: 'home-videos' },
            ],
            moveStart: 0,
            moveIng: 0,
        }
    },
    computed: {
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
            if (this.moveStart - move > 50 || this.moveStart - move < -50) {
                this.moveIng = this.moveStart - move
            }
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
                transform: scale(1.1);
                font-weight: bold;
            }
        }
    }
    .query-container {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        overflow-x: hidden;
        .query-box {
            width: 100%;
            flex-shrink: 0;
            overflow-y: auto;
        }
    }
}
</style>
