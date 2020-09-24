<template>
    <scroll-view scroll-y @scrolltolower="scrollBottom" class="songer">
        <star-songer-item
            v-for="(item, index) of songerData"
            :key="index"
            :item="item"
        />
        <star-loading v-show="hasMore" />
    </scroll-view>
</template>
<script>
import starSongerItem from '@/components/star-songer-item'
import starLoading from '@/components/star-loading'
export default {
    props: {
        isRunLoading: Boolean,
        serchFun: Function,
    },
    components: {
        starLoading,
        starSongerItem,
    },
    data() {
        return {
            songerData: [],
            hasMore: true,
            limit: 30,
            offset: 1,
        }
    },
    watch: {
        isRunLoading: {
            async handler(val) {
                if (val && this.songerData.length === 0) {
                    this.getSongerData()
                }
            },
            immediate: true,
        },
    },
    methods: {
        scrollBottom() {
            if (!this.hasMore) return
            this.offset++
            this.getSongerData()
        },
        async getSongerData() {
            let data = {
                type: 100,
                limit: this.limit,
                offset: (this.offset - 1) * this.limit,
            }
            let res = await this.serchFun(data)
            if (!res.result.artists) return
            this.hasMore = res.result.hasMore
            this.songerData = this.songerData.concat(res.result.artists)
        },
    },
}
</script>
