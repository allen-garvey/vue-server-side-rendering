<template>
    <div>
        <h1>Welcome to my Vue app</h1>
        <div>Hello {{ name }}!</div>
        <button @click="buttonClicked()">Click me</button>
        <div>clicked: {{ count }}</div>
    </div>
</template>

<script>
export default {
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
};
</script>