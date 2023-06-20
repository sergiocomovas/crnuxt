<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-purple-9 text-white">
      <q-toolbar class="bg-purple-10 glossy text-white shadow-2">
        <q-avatar>
          <img
            src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          /> </q-avatar
        ><q-btn flat :label="tab" />
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs v-model="tab" shrink stretch>
          <q-route-tab
            to="/"
            @click="setActiveTab('tab1')"
            name="tab1"
            label="Tab 1"
          />
          <q-route-tab
            to="/pagina2"
            @click="setActiveTab('tab2')"
            name="tab2"
            label="Tab 2"
          />
          <q-route-tab
            to="/pagina3"
            @click="setActiveTab('tab3')"
            name="tab3"
            label="Tab 3"
          />
          <q-route-tab
            to="/productos"
            @click="setActiveTab('productos')"
            name="productos"
            label="Prodt"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <NuxtLayout>
        <NuxtPage
          :transition="{
            name: 'slide-right',
            mode: 'out-in',
          }"
        />
      </NuxtLayout>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tab = ref("Patata");
    const setActiveTab = (valor) => {
      tab.value = valor;
    };
    return {
      setActiveTab,
      tab,
    };
  },
};
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
