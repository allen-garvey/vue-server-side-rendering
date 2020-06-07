import Vue from 'vue';
import App from './components/app.vue';

const app = new Vue({
    render: h => h(App)
});

app.$mount('#app');