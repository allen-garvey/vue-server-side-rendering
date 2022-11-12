<template>
    <div :class="$style.container">
        <h1>Welcome to my Vue app</h1>
        <div>Hello {{ name }}!</div>
        <button @click="buttonClicked()">Click me</button>
        <div>clicked: {{ count }}</div>
    </div>
</template>

<style lang="scss" module>
    .container {
        max-width: 1040px;
        margin: 0 auto;
    }
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        
    },
    components: {
    },
    data(){
        return {
            name: 'John',
            count: 0,
        };
    },
    computed: {
    },
    methods: {
        buttonClicked(){
            this.count++;
        }
    }
});
</script>