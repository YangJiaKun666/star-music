<template>
    <scroll-view
        scroll-y
        @scrolltolower="onLoadMore"
        :style="{ height: windowHeight - customBar + 5 + 'px' }"
        class="mv-list"
    >
        <star-mv-item
            v-for="(item, index) of mvData"
            :key="index"
            :item="item"
        />
        <star-loading v-show="hasMore" />
    </scroll-view>
</template>
<script>
import starMvItem from '@/components/star-mv-item'
import starLoading from '@/components/star-loading'
import apis from '@/apis/index'
import { mapState } from 'vuex'
export default {
    components: {
        starMvItem,
        starLoading,
    },
    data() {
        return {
            mvData: [],
            offset: 1,
            limit: 20,
            hasMore: true,
        }
    },
    computed: {
        ...mapState(['windowHeight', 'customBar']),
    },
    async onLoad() {
        this.getData()
    },
    methods: {
        onLoadMore() {
            this.getData()
        },
        async getData() {
            let res = await apis.getTopMv({
                limit: this.limit,
                offset: (this.offset - 1) * this.limit,
            })
            this.mvData = this.mvData.concat(res.data)
            this.hasMore = res.hasMore
        },
    },
}
</script>
//
<style lang="less" scoped>
.mv-list {
    padding: 0 12px;
}
</style>
