import Vue from 'vue';
import IndexView from './index.vue';

new Vue({
    el: '#app',
    render: (h) => h(IndexView),
    mounted() {
        window._vm = this;
        console.log('js vm',window, this)
    },
});
