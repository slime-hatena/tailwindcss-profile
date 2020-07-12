<template>
  <div>
    <Header />
    <pre>
      {{ $store.getters['setting/get'].name }}
    </pre>
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
