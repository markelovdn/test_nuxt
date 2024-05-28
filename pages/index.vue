<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const rightDrawerOpen = ref(false);
const slide = ref("style");
const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatum obcaecati doloremque totam autem animi ipsam eveniet tempora aut.";

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>

<template>
  <q-header reveal class="bg-transparent text-black header">
    <q-toolbar>
      <q-toolbar-title> Логотип сайта </q-toolbar-title>

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

  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
            <q-img src="img/11.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
            <q-img src="img/11.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
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
