<template>
  <v-col cols="12">
    <div class="d-flex justify-center">
      <card-component />
    </div>
    <calendar-component />
  </v-col>
</template>

<script setup>
import CardComponent from "./components/CardComponent.vue";
import CalendarComponent from "./components/CalendarComponent.vue";
</script>
