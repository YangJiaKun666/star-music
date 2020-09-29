<template>
    <view class="search-box">
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
            searchView: null,
        }
    },
    async onLoad() {
        this.searchView = this.$mp.page.$getAppWebview()
        // 默认搜索
        let defaultRes = await apis.defaultSearch()
        // 动态设置原生app的导航栏搜索占位符
        this.searchView.setStyle({
            titleNView: {
                searchInput: {
                    placeholder: defaultRes.data.showKeyword,
                },
            },
        })
    },
    onBackPress() {
        if (this.isSearch) {
            this.searchValue = ''
            this.isSearch = false
            return true
        }
    },
    // 原生输入框内容发生变化时
    onNavigationBarSearchInputChanged(event) {
        if (event.text === '') {
            this.clearValue()
        }
    },
    // 原生输入框点击软键盘完成时
    onNavigationBarSearchInputConfirmed(event) {
        this.searchValue = event.text
        // 原生输入框失去焦点
        this.searchView.setTitleNViewSearchInputFocus(false)
        this.goSearch()
    },
    methods: {
        handlerClick(key) {
            this.searchValue = key
            this.goSearch()
        },
        goSearch() {
            if (this.searchValue === '') this.searchValue = this.defaultValue
            this.searchView.setTitleNViewSearchInputText(this.searchValue)
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
