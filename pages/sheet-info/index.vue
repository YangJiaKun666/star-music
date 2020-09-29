<template>
    <scroll-view
        scroll-y
        @scrolltolower="onLoadMore"
        :style="{ height: windowHeight - customBar + 5 + 'px' }"
    >
        <view class="sheet-box">
            <star-song-sheet
                v-for="(item, index) of listData"
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
import apis from '@/apis/index'
import { mapState } from 'vuex'
export default {
    components: {
        starSongSheet,
        starLoading,
    },
    data() {
        return {
            current: 0,
            listData: [],
            before: 0,
            hasMore: true,
        }
    },
    onLoad() {
        this.getData()
    },
    computed: {
        ...mapState(['windowHeight', 'customBar']),
    },
    methods: {
        onLoadMore() {
            this.getData()
        },
        async getData() {
            let listRes = await apis.sheetList({ before: this.before,limit: 20 })
            this.hasMore = listRes.more
            this.before = listRes.lasttime
            this.listData = this.listData.concat(listRes.playlists)
        },
    },
}
</script>
<style lang="less" scoped>
.sheet-box {
    display: flex;
    flex-wrap: wrap;
    padding: 0 12px;
}
</style>
