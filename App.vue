<script>
export default {
    // 当应用首次打开时调用，只调用一次
    onLaunch: function () {
        // 添加主题类名
        document.body.classList.add('light-theme')
    },
    // 当引用显示时调用
    onShow: function () {
        console.log('App Show')
    },
    // 当引用隐藏时调用
    onHide: function () {
        console.log('App Hide')
    },
}
</script>
<style lang="less">
// 全局样式文件
@import url('./utils/glabel-style.less');
// 图标库
@import url('./iconfont/less/font-awesome.less');
.uni-body {
    // 全局默认字体大小，默认16px，使用的是rpx所以是32rpx
    font-size: 32rpx;
}
</style>
