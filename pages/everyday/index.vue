<template>
    <view class="every-day">
        <view class="date-time">
            <image
                lazy-load
                mode="aspectFill"
                class="date-img"
                src="@/static/images/songs-bg.jpg"
            />
            <view class="time-box">
                <text class="date">{{ date }}</text>
                <text class="mounth">/{{ mounth }}</text>
            </view>
        </view>
        <view class="every-list">
            <star-song-item
                v-for="(item, index) of songList"
                :key="index"
                :item="item"
            />
        </view>
    </view>
</template>
<script>
import apis from '@/apis/index'
import starSongItem from '@/components/star-song-item'
import starLoading from '@/components/star-loading'
export default {
    components: {
        starLoading,
        starSongItem,
    },
    data() {
        return {
            date: 0,
            mounth: 0,
            songList: [],
        }
    },
    async onLoad() {
        this.date =
            new Date().getDate() < 10
                ? '0' + new Date().getDate()
                : new Date().getDate()
        this.mounth =
            new Date().getMonth() + 1 < 10
                ? '0' + (new Date().getMonth() + 1)
                : new Date().getDate() + 1
        let res = await apis.getEveryDay()
        this.songList = res.data.dailySongs.map((ele) => {
            return {
                id: ele.id,
                name: ele.name,
                picUrl: ele.al.picUrl,
                song: {
                    alias: ele.alia,
                    artists: ele.ar,
                    album: ele.al,
                },
            }
        })
    },
}
</script>
<style lang="less" scoped>
.every-day {
    .date-time {
        height: 160px;
        width: 100%;
        color: #fff;
        display: flex;
        padding: 0 0 30px 20px;
        box-sizing: border-box;
        align-items: flex-end;
        position: relative;
        .date-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        .time-box {
            display: flex;
            align-items: baseline;
            letter-spacing: 3px;
        }
        .date {
            font-size: 40px;
        }
        .mounth {
            font-size: 26px;
        }
    }
    .every-list {
        background: #fff;
        padding: 12px;
        transform: translateY(-12px);
        border-radius: 15px;
    }
}
</style>
