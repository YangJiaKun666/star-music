<template>
<view class="scrool">
    video
    <videos v-for="(item,index) of 10" :key="index" />
</view>
</template>
<script>
	import videos from '@/components/star-video'
	export default {
		components: {
			videos
		}
	}
</script>

<style>
.scrool {
    height: 1300rpx;
    overflow: auto;
}
</style>
