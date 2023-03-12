<template>
  <v-card class="rounded-lg"  width="1200">
    <div class="d-flex flex-no-wrap">
      <v-card
        class="d-flex flex-no-wrap justify-space-between v-col-3 align-center"
        color="primary"
      >
        <v-avatar class="ma-3" size="125" rounded="1">
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-avatar>
        <div class="d-flex flex-md-column">
          <v-card-title class="bold">Paciente </v-card-title>

          <v-card-subtitle>30 años</v-card-subtitle>
        </div>
      </v-card>
      <v-card class="d-flex v-col-9 justify-space-around align-center" color="#E3F2FD">
        <div>
          <v-card-subtitle> Phone Number</v-card-subtitle>
          <v-card-text class="mb-6 bold">664-168-16-15</v-card-text>

          <v-card-subtitle> Email</v-card-subtitle>
          <v-card-text>hpave@gmail.com</v-card-text>
        </div>

        <div>
          <v-card-subtitle> Address</v-card-subtitle>
          <v-card-text class="mb-6">Av. 5 de Mayo 123</v-card-text>

          <v-card-subtitle> Alergias</v-card-subtitle>
          <v-card-text>Polen</v-card-text>
        </div>
      </v-card>
    </div>
  </v-card>
</template>
