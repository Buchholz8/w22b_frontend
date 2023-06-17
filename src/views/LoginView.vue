<template>
  <div class="login">
    <login_page></login_page>
  </div>
</template>

<script>
import login_page from "@/components/login_page.vue"

export default {
  name: 'LoginView',
  components: {
    login_page
  }
}
</script>
