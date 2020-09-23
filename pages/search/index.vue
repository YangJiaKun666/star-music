<template>
    <view class="search-box">
        <query-header showSecurity background="#fff">
            <template #centerContent>
                <input
                    class="search-input"
                    :value="searchValue"
                    @input="onInput"
                    @focus="isSearch = false"
                    @confirm="goSearch"
                    :placeholder="defaultValue"
                    type="text"
                />
            </template>
            <template #rightButton>
                <view class="clear-btn">
                    <view
                        class="clear-btn-icon button-action"
                        @click="clearValue"
                        v-show="searchValue != ''"
                        >✕</view
                    >
                </view>
            </template>
        </query-header>
        <search-before v-if="!isSearch" @handlerClick="handlerClick" />
        <searched :searchValue="searchValue" v-else />
    </view>
</template>
<script>
import queryHeader from '@/components/query-header'
import searchBefore from './components/search-before'
import searched from './components/searched'
import apis from '@/apis/index'
export default {
    components: {
        queryHeader,
        searchBefore,
        searched,
    },
    data() {
        return {
            searchValue: '',
            defaultValue: '',
            isSearch: false,
        }
    },
    async onLoad() {
        // 默认搜索
        let defaultRes = await apis.defaultSearch()
        this.defaultValue = defaultRes.data.showKeyword
    },
    onBackPress() {
        if (this.isSearch) {
            this.searchValue = ''
            this.isSearch = false
            return true
        }
    },
    methods: {
        onInput(event) {
            this.searchValue = event.target.value
        },
        handlerClick(key) {
            this.searchValue = key
            this.goSearch()
        },
        goSearch(event) {
            if (this.searchValue === '') this.searchValue = this.defaultValue
            this.$store.commit('setHistory', this.searchValue)
            this.isSearch = true
        },
        clearValue() {
            this.searchValue = ''
            this.isSearch = false
        },
    },
}
</script>
<style lang="less" scoped>
.search-box {
    .search-input {
        height: 80rpx;
        width: 100%;
        box-sizing: border-box;
        font-size: 28rpx;
        border-bottom: 2rpx solid #464646;
    }
    .clear-btn {
        width: 70%;
        height: 80rpx;
        font-size: 40rpx;
        line-height: 80rpx;
        border-bottom: 2rpx solid #464646;
        .clear-btn-icon {
            height: 100%;
            width: 100%;
            text-align: center;
        }
    }
}
</style>
