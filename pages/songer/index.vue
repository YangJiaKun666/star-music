<template>
    <scroll-view
        scroll-y
        @scrolltolower="onLoadMore"
        :style="{ height: windowHeight - customBar + 5 + 'px' }"
        class="songer-list"
    >
        <star-tabs
            v-model="current"
            :tabs="tabs"
            :scroll="false"
            @change="changeTab"
            lineHeight="2px"
            lineColor="#d81e06"
            activeColor="#d81e06"
            fixed
            field="name"
            paddingItem="0 14px"
        />
        <star-songer-item
            v-for="(item, index) of songerData"
            :key="index"
            :item="item"
        />
        <star-loading v-show="hasMore" />
    </scroll-view>
</template>
<script>
import starTabs from '@/components/star-tabs'
import starLoading from '@/components/star-loading'
import starSongerItem from '@/components/star-songer-item'
import apis from '@/apis/index'
import { mapState } from 'vuex'
export default {
    components: {
        starTabs,
        starLoading,
        starSongerItem,
    },
    data() {
        return {
            current: 0,
            tabs: [
                { name: '全部', area: -1 },
                { name: '华语', area: 7 },
                { name: '欧美', area: 96 },
                { name: '日本', area: 8 },
                { name: '韩国', area: 16 },
                { name: '其他', area: 0 },
            ],
            songerData: [],
            limit: 20,
            offset: 1,
            hasMore: true,
        }
    },
    async onLoad() {
        await this.getSongerData()
    },
    computed: {
        ...mapState(['windowHeight', 'customBar']),
    },
    methods: {
        changeTab(index) {
            this.current = index
            this.hasMore = true
            this.songerData = []
            this.offset = 1
            this.getSongerData()
        },
        onLoadMore() {
            this.offset++
            this.getSongerData()
        },
        async getSongerData() {
            let res = await apis.getSongerList({
                area: this.tabs[this.current].area,
                limit: this.limit,
                offset: (this.offset - 1) * this.limit,
            })
            this.songerData = this.songerData.concat(res.artists)
            this.hasMore = res.more
        },
    },
}
</script>
<style lang="less" scoped>
.songer-list {
    padding: 0 12px;
}
</style>
