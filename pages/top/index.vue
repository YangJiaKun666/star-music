<template>
    <view class="top-list flex-center">
        <view v-if="isLodingSuccess" class="recommend flex-center">
            <star-song-sheet
                v-for="(item, index) of dataList"
                :item="item"
                :key="index"
            >
                <template #top>
                    {{ item.updateFrequency }}
                </template>
            </star-song-sheet>
        </view>
        <star-loading v-else />
    </view>
</template>
<script>
import starSongSheet from '@/components/star-song-sheet'
import starLoading from '@/components/star-loading'
import apis from '@/apis/index'
export default {
    components: {
        starSongSheet,
        starLoading,
    },
    data() {
        return {
            dataList: null,
        }
    },
    computed: {
        isLodingSuccess() {
            if (this.dataList) {
                return true
            } else {
                return false
            }
        },
    },
    async onLoad() {
        let res = await apis.getTopList()
        this.dataList = res.list
        this.dataList = res.list.map((ele) => {
            return {
                id: ele.id,
                picUrl: ele.coverImgUrl,
                name: ele.name,
                updateFrequency: ele.updateFrequency,
            }
        })
    },
}
</script>
<style lang="less" scoped>
.top-list {
    padding: 0 12px;
    .recommend {
        overflow-x: hidden;
        flex-wrap: wrap;
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
