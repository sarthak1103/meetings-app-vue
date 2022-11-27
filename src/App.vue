<template>
  <div>
   <AppMenu/>
   <b-container class="my-4">
    <router-view></router-view>
  </b-container>
  </div>
</template>

<script>

import AppMenu from '@/components/AppMenu.vue'
export default {
  name: 'App',
  components: {
     AppMenu,
  }
}
</script>

<style>

</style>
