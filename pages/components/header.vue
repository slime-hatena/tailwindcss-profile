<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="h-6 mr-1 text-xl">{{ $store.getters['setting/get'].header.prefix }}</span>
      <span class="font-semibold text-xl">{{ $store.getters['setting/get'].header.title }}</span>
    </div>
    <Menu />
  </nav>
</template>
<script>
  import Menu from "@/pages/components/header/menu.vue";
  export default {
    components: {
      Menu,
    }
  };
</script>
