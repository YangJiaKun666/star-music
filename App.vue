<script>
export default {
    // 当应用首次打开时调用，只调用一次
    onLaunch: function () {
        //设置全局屏幕高度
        const { windowWidth, windowHeight } = uni.getSystemInfoSync()
        //设置全局状态栏高度
        uni.getSystemInfo({
            success: (e) => {
                // this.compareVersion(e.SDKVersion, '2.5.0')
                let statusBar = 0
                let customBar = 0

                // #ifdef MP
                statusBar = e.statusBarHeight
                customBar = e.statusBarHeight + 45
                if (e.platform === 'android') {
                    this.$store.commit('SET_SYSTEM_IOSANDROID', false)
                    customBar = e.statusBarHeight + 50
                }
                // #endif

                // #ifdef MP-WEIXIN
                statusBar = e.statusBarHeight
                // @ts-ignore
                const custom = wx.getMenuButtonBoundingClientRect()
                customBar = custom.bottom + custom.top - e.statusBarHeight
                // #endif

                // #ifdef MP-ALIPAY
                statusBar = e.statusBarHeight
                customBar = e.statusBarHeight + e.titleBarHeight
                // #endif

                // #ifdef APP-PLUS
                console.log('app-plus', e)
                statusBar = e.statusBarHeight
                customBar = e.statusBarHeight + 45
                // #endif

                // #ifdef H5
                statusBar = 0
                customBar = e.statusBarHeight + 45
                // #endif
                this.$store.commit('getSystemInfo', {
                    statusBar,
                    customBar,
                    windowWidth,
                    windowHeight,
                })
            },
        })
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
@import url('@/utils/glabel-style.less');
// 图标库
@import url('@/iconfont/less/font-awesome.less');
</style>
