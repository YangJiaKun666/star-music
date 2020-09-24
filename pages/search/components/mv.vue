<template>
    <scroll-view
        scroll-y
        @scrolltolower="scrollBottom"
        :style="{ marginTop: '20rpx' }"
    >
        <star-mv-item
            v-for="(item, index) of mvData"
            :key="index"
            :item="item"
        />
        <star-loading
            v-show="
                this.mvData.length === 0 || this.mvData.length < this.mvCount
            "
        />
    </scroll-view>
</template>
<script>
import starMvItem from '@/components/star-mv-item'
import starLoading from '@/components/star-loading'
export default {
    props: {
        isRunLoading: Boolean,
        serchFun: Function,
    },
    components: {
        starLoading,
        starMvItem,
    },
    data() {
        return {
            mvData: [],
            mvCount: 0,
            limit: 30,
            offset: 1,
        }
    },
    watch: {
        isRunLoading: {
            async handler(val) {
                if (val && this.mvData.length === 0) {
                    this.getMvData()
                }
            },
            immediate: true,
        },
    },
    methods: {
        scrollBottom() {
            if (this.mvData.length >= this.mvCount) return
            this.offset++
            this.getMvData()
        },
        async getMvData() {
            let data = {
                type: 1004,
                limit: this.limit,
                offset: (this.offset - 1) * this.limit,
            }
            let res = await this.serchFun(data)
            if (!res.result.mvs) return
            this.mvCount = res.result.mvCount
            this.mvData = this.mvData.concat(res.result.mvs)
        },
    },
}
</script>
<style lang="less" scoped>
.mv {
    padding-top: 20rpx;
}
</style>
