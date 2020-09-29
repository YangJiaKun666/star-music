<template>
    <view class="searched" :style="{ height: windowHeight - customBar + 'px' }">
        <view class="searched-tabs flex-center">
            <view
                :class="[
                    'button-action',
                    'tab',
                    currentKey === index && 'check-color',
                ]"
                v-for="(item, index) of tabs"
                :key="index"
                @click="toggleTab(index)"
                >{{ item.label }}</view
            >
            <view
                class="check-box button-color"
                :style="{ transform: `translateX(${currentKey * 100}%)` }"
            ></view>
        </view>
        <swiper
            class="swiper"
            :duration="300"
            :current="currentKey"
            @change="changeTab"
        >
            <swiper-item v-for="(item, index) of tabs" :key="index">
                <component
                    class="content"
                    :serchFun="serchFun"
                    :isRunLoading="currentKey === index"
                    :is="item.component"
                />
            </swiper-item>
        </swiper>
    </view>
</template>
<script>
import single from './single'
import songer from './songer'
import sheet from './sheet'
import mv from './mv'
import { mapState } from 'vuex'
import apis from '@/apis/index'
export default {
    components: {
        single,
        songer,
        sheet,
        mv,
    },
    props: {
        searchValue: String,
    },
    computed: {
        ...mapState(['customBar', 'windowHeight']),
    },
    data() {
        return {
            tabs: [
                { label: '单曲', component: 'single' },
                { label: '歌手', component: 'songer' },
                { label: '歌单', component: 'sheet' },
                { label: 'MV', component: 'mv' },
            ],
            currentKey: 0,
        }
    },
    methods: {
        toggleTab(index) {
            this.currentKey = index
        },
        changeTab(event) {
            this.currentKey = event.detail.current
        },
        async serchFun(putData) {
            let data = {
                keywords: this.searchValue,
                ...putData,
            }
            let searRes = await apis.goSearchData(data)
            return searRes
        },
    },
}
</script>
<style lang="less" scoped>
.searched {
    padding-top: 10px;
    box-sizing: border-box;
    .searched-tabs {
        height: 70rpx;
        width: 100%;
        position: relative;
        box-sizing: border-box;
        border-bottom: 2rpx solid #eaeaea;
        .tab {
            height: 70rpx;
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition-duration: 300ms;
        }
        .check-box {
            position: absolute;
            bottom: -1px;
            left: 0;
            height: 2px;
            width: 25%;
            transition-duration: 300ms;
            border-radius: 20rpx;
        }
        .action-color {
            font-weight: bold;
        }
    }
    .swiper {
        height: calc(100% - 70rpx);
        .content {
            height: 100%;
            padding: 0 12px;
            box-sizing: border-box;
        }
    }
}
</style>
