<template>
  <div class="min-h-screen" :class="'bg-' + $store.getters['setting/get'].theme.color.background">
    <Header />
  </div>
</template>
<script>
  import Header from "@/pages/components/header.vue";
  export default {
    components: {
      Header,
    }
  };
</script>
