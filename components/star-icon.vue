<template>
    <i :class="['fa', `fa-${name}`]" :style="{ fontSize: size + 'rpx' }" @click="$emit('click')"></i>
</template>
<script>
// name：图标名称，size：图标大小，click：向外emit的点击事件
export default {
    props: {
        name: String,
        size: [String, Number],
    },
}
</script>
