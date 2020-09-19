<template>
    <view class="inpot-box flex-center">
        <view class="iocn-box flex-center">
            <star-icon :name="iconName" size="32" />
        </view>
        <input
            class="input"
            :type="type"
            :placeholder="placeholder"
            :value="value"
            @input="writeValue"
        />
        <view class="iocn-box flex-center">
            <star-icon
                name="times-circle"
                size="32"
                :style="{ color: '#ccc' }"
                v-show="value !== ''"
                @click="$emit('input', '')"
            />
        </view>
    </view>
</template>
<script>
import starIcon from './star-icon'
export default {
    components: {
        starIcon,
    },
    model: {
        prop: 'value',
    },
    props: {
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        iconName: String,
        value: [String, Number],
    },
    methods: {
        writeValue(event) {
            this.$emit('input', event.target.value)
        },
    },
}
</script>
<style lang="less" scoped>
.inpot-box {
    width: 100%;
    height: 70rpx;
    background: #fff;
    border-radius: 50rpx;
    margin-bottom: 10px;
    color: #464646;
    .iocn-box {
        width: 70rpx;
        height: 70rpx;
        justify-content: center;
    }
    .input {
        height: 100%;
        padding: 10rpx 0;
        box-sizing: border-box;
        width: calc(100% - 140rpx);
        font-size: 28rpx;
        outline: none;
        border: 0;
    }
}
</style>
