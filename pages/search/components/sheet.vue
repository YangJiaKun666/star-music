<template>
    <scroll-view scroll-y @scrolltolower="scrollBottom" class="sheet">
        <view
            class="flex-center sheet-list"
            :style="{ flexWrap: 'wrap', marginTop: '10px' }"
        >
            <star-song-sheet
                v-for="(item, index) of sheetData"
                :key="index"
                :item="item"
            />
        </view>
        <star-loading v-show="hasMore" />
    </scroll-view>
</template>
<script>
import starSongSheet from '@/components/star-song-sheet'
import starLoading from '@/components/star-loading'
export default {
    props: {
        isRunLoading: Boolean,
        serchFun: Function,
    },
    components: {
        starLoading,
        starSongSheet,
    },
    data() {
        return {
            sheetData: [],
            hasMore: true,
            limit: 30,
            offset: 1,
        }
    },
    watch: {
        isRunLoading: {
            async handler(val) {
                if (val && this.sheetData.length === 0) {
                    this.getSheetData()
                }
            },
            immediate: true,
        },
    },
    methods: {
        scrollBottom() {
            if (!this.hasMore) return
            this.offset++
            this.getSheetData()
        },
        async getSheetData() {
            let data = {
                type: 1000,
                limit: this.limit,
                offset: (this.offset - 1) * this.limit,
            }
            let res = await this.serchFun(data)
            if (!res.result.playlists) return
            this.hasMore = res.result.hasMore
            let sheetData = res.result.playlists.map((ele) => {
                return {
                    picUrl: ele.coverImgUrl,
                    ...ele,
                }
            })
            this.sheetData = this.sheetData.concat(sheetData)
        },
    },
}
</script>
<style lang="less" scoped>
.sheet-list {
    width: 100%;
}
</style>
