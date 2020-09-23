<template>
    <view class="search-before">
        <view v-if="historySearch.length > 0">
            <star-title title="历史">
                <template #rightButton>
                    <star-icon
                        name="trash-o"
                        class="button-action"
                        size="34"
                        @click="clearHistory"
                    />
                </template>
            </star-title>
            <view class="history-list flex-center">
                <view
                    class="history-box button-action"
                    v-for="(item, index) of historySearch"
                    :key="index"
                    @click="handlerClick(item)"
                >
                    {{ item }}
                </view>
            </view>
        </view>
        <star-title title="热搜榜" />
        <view class="hot-list flex-center">
            <view
                class="hot-box flex-center button-action"
                v-for="(item, index) of hotSearchList"
                :key="index"
                @click="handlerClick(item.searchWord)"
            >
                <view
                    class="hot-id"
                    :style="{ color: index <= 2 ? '#ff3a3a' : '#999' }"
                    >{{ index + 1 }}</view
                >
                <view
                    :style="{ fontWeight: index <= 2 ? 'bold' : '' }"
                    class="hot-name text-oneline"
                    >{{ item.searchWord }}</view
                >
                <image
                    mode="aspectFit"
                    class="hot-img"
                    v-if="item.iconUrl"
                    :src="item.iconUrl"
                />
            </view>
        </view>
    </view>
</template>
<script>
import starIcon from '@/components/star-icon'
import starTitle from '@/components/star-title'
import apis from '@/apis/index'
import { mapState } from 'vuex'
export default {
    components: {
        starIcon,
        starTitle,
    },
    data() {
        return {
            hotSearchList: [],
        }
    },
    computed: {
        ...mapState(['historySearch']),
    },
    async mounted() {
        // 热搜列表
        let hotRes = await apis.hotSearch()
        this.hotSearchList = hotRes.data
    },
    methods: {
        handlerClick(key) {
            this.$emit('handlerClick', key)
        },
        clearHistory() {
            this.$store.commit('clearHistory')
        },
    },
}
</script>
<style lang="less" scoped>
.search-before {
    padding: 0 24rpx;
    box-sizing: border-box;
}
.history-list {
    flex-wrap: wrap;
    width: 100%;
    .history-box {
        line-height: 60rpx;
        padding: 0 16rpx;
        margin-right: 20rpx;
    }
}
.hot-list {
    width: 100%;
    flex-wrap: wrap;
    .hot-box {
        width: calc(100% / 2 - 5px);
        height: 60rpx;
        margin-right: 10px;
        flex-shrink: 0;
        .hot-id {
            width: 34rpx;
            margin-right: 10rpx;
            text-align: center;
        }
        .hot-name {
            width: calc(100% - 110rpx);
            margin-right: 10rpx;
        }
        .hot-img {
            width: 56rpx;
            height: 30rpx;
        }
    }
    .hot-box:nth-child(2n) {
        margin-right: 0;
    }
}
</style>
