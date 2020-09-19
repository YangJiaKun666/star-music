<template>
    <view>
        <query-navbar></query-navbar>
    </view>
</template>
<script>
import queryNavbar from './components/query-navbar'
export default {
    components: {
        queryNavbar,
    },
    onShow: function() {
        console.log(getApp().globalData)
    }
}
</script>
