<template>
    <div class="main">
        <main_view></main_view>
    </div>
</template>

<script>
import main_view from '@/components/main_page.vue';


import cookies from "vue-cookies";
export default {
    name: 'MainView',
    components: {
        main_view
    },
    mounted() {
        if (cookies.get(`token`) === null) {
            this.$router.push(`/`);
        }

    }
}
</script>