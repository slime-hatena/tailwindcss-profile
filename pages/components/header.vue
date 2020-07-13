<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap p-6" :class="'bg-' + $store.getters['setting/get'].theme.color.primary">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="h-6 mr-1 text-xl">{{ $store.getters['setting/get'].header.prefix }}</span>
        <span class="font-semibold text-xl">{{ $store.getters['setting/get'].header.title }}</span>
      </div>
      <Menu />
    </nav>
  </header>
</template>
<script>
  import Menu from "@/pages/components/header/menu.vue";
  export default {
    components: {
      Menu,
    }
  };
</script>
