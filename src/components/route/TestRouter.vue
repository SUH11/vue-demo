<template>
    <div>
        user
        {{ id }}
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>