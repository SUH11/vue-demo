<template>
    <li>
        <div @click="toggle">
            {{ model.title}}
            <span v-if="isFolder">{{ open ? '-' : '+' }}</span>
        </div>
        <ul v-if="isFolder" v-show="open">
            <node v-for="item in model.children" :model="item" :key="item.title"></node>
        </ul>
    </li>
</template>

<script>
    export default {
        props: {
            model: {
                type: Object
            },
        },
        name: 'Node',
        data() {
            return {
                open: false
            }
        },
        computed: {
            isFolder() {
                return this.model.children && this.model.children.length;
            }
        },
        methods: {
            toggle() {
                this.open = !this.open;
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>