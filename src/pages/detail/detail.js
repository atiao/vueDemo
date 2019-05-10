import Vue from 'vue';
import DetailView from './detail.vue';

new Vue({
    el: '#app',
    render: (h) => h(DetailView),
    mounted() {
        window._vm = this;
        console.log('js vm',window, this)
    },
});
