<template>
    <div>
        <div v-if="isShow" class="notice">
            <h1>{{ title }}</h1>
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            message: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 2000
            }
        },
        data() {
            return {
                isShow: false
            };
        },
        methods: {
            show() {
                this.isShow = true;
                setTimeout(this.hide, this.duration);
            },
            hide() {
                this.isShow = false;
                this.remove;
            }
        },
    }
</script>

<style scoped>
    .notice {
        width: 230px;
        height: 100px;
        border: 10px solid yellowgreen;
        z-index: 999999;
        position: absolute;
        top: 5%;
        left: calc(50% - 115px);
        background: white;
        text-align: center
    }
</style>