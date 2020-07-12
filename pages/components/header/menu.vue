<template>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <span v-for="item in $store.getters['setting/get'].header.menu.left" :key="item.title" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 last:mr-0">
        <a :href="item.url" :target="item.target">{{ item.title }}</a>
      </span>
    </div>
    <div>
      <span v-for="item in $store.getters['setting/get'].header.menu.right" :key="item.title" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2 lg:mr-4 last:mr-0">
        <a :href="item.url" :target="item.target">{{ item.title }}</a>
      </span>
    </div>
  </div>
</template>
