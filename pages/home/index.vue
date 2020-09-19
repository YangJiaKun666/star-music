<template>
    <view class="query-navbar">
        <!-- 首页navbar左侧图标 -->
        <view class="navbar-icon flex-center">
            <starIcon name="bars" />
        </view>
        <!-- 首页navbar中间tab -->
        <view class="navbar-tab flex-center">
			
		</view>
        <!-- 首页navbar有侧图标 -->
        <view class="navbar-icon flex-center">
            <starIcon name="search" />
        </view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
export default {
    components: {
        starIcon,
    },
}
</script>
<style lang="less">
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
    }
}
</style>
