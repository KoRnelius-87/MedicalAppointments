<template>
  <v-app>
    <navigation-drawer />
    <app-bar />
    <main-content />
  </v-app>
</template>

<script setup>
import NavigationDrawer from "./NavigationDrawer.vue";
import AppBar from "./AppBar.vue";
import MainContent from "./MainContent.vue";
</script>
