<template>
    <i :class="['fa', `fa-${name}`]" :style="{ fontSize: size + 'rpx' }"></i>
</template>
<script>
// name：图标名称，size：图标大小
export default {
    props: {
        name: String,
        size: [String, Number],
    },
}
</script>
