<template>
    <div>
        <h1>Welcome to my Vue app</h1>
        <div>Hello {{ name }}!</div>
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
            name: 'John'
        };
    },
    computed: {
    },
    methods: {
    }
};
</script>