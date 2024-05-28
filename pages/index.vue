<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const rightDrawerOpen = ref(false);

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>

<template>
  <q-header reveal class="bg-transparent text-black header">
    <q-toolbar>
      <q-toolbar-title> Главная страница </q-toolbar-title>

      <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="rightDrawerOpen"
    side="right"
    overlay
    behavior="mobile"
    elevated
  >
    <!-- drawer content -->
  </q-drawer>
  <div class="content-below-header">
    <q-img
      src="img/tild3035-3064-4862-b438-633135376463__119785244_6641036542.jpg"
    />
  </div>
  <div>
    <q-img src="img/11.jpg" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  z-index: 2;
}

.content-below-header {
  height: 100vh;
  background-color: #fff;
  position: relative;
  top: -50px;
  z-index: 1;
}
</style>
