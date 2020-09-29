<template>
    <scroll-view scroll-y @scrolltolower="scrollBottom" class="single">
        <star-song-item
            v-for="(item, index) of singleData"
            :key="index"
            :item="item"
        >
            <template #rightIcon>
                <view @click.stop class="check-box">
                    <star-icon name="ellipsis-v" size="34" />
                </view>
            </template>
        </star-song-item>
        <star-loading v-show="hasMore" />
    </scroll-view>
</template>
<script>
import starSongItem from '@/components/star-song-item'
import starIcon from '@/components/star-icon'
import starLoading from '@/components/star-loading'
export default {
    props: {
        isRunLoading: Boolean,
        serchFun: Function,
    },
    components: {
        starSongItem,
        starIcon,
        starLoading,
    },
    data() {
        return {
            singleData: [],
            hasMore: true,
            limit: 30,
            offset: 1,
        }
    },
    watch: {
        isRunLoading: {
            async handler(val) {
                if (val && this.singleData.length === 0) {
                    this.getSingleData()
                }
            },
            immediate: true,
        },
    },
    methods: {
        onCheckAll() {
            if (this.isAll) {
                for (const i of this.singleData) {
                    this.$set(i, 'isChecked', false)
                }
            } else {
                for (const i of this.singleData) {
                    this.$set(i, 'isChecked', true)
                }
            }
        },
        scrollBottom() {
            if (!this.hasMore) return
            this.offset++
            this.getSingleData()
        },
        async getSingleData() {
            let data = {
                type: 1,
                limit: this.limit,
                offset: (this.offset - 1) * this.limit,
            }
            let res = await this.serchFun(data)
            if (!res.result.songs) return
            this.hasMore = res.result.hasMore
            let singleData = res.result.songs.map((ele) => {
                return {
                    id: ele.id,
                    name: ele.name,
                    isChecked: false,
                    hideImg: true,
                    song: {
                        alias: ele.alias,
                        artists: ele.artists,
                        album: ele.album,
                    },
                }
            })
            this.singleData = this.singleData.concat(singleData)
        },
    },
}
</script>
<style lang="less" scoped>
.single {
    .checked {
        height: 80rpx;
        height: 80rpx;
        width: 100%;
    }
    .handler {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .check-box {
        width: 80rpx;
        height: 80rpx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .check-action {
        opacity: 1 !important;
    }
    .check {
        width: 24rpx;
        height: 24rpx;
        box-sizing: border-box;
        position: relative;
        border-radius: 6rpx;
        .check-icon {
            position: absolute;
            opacity: 0;
            transition-duration: 200ms;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
