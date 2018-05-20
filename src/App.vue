<template>
  <div id="app">
    <v-app>
      <v-toolbar class="blue lighten-2">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            <span class="group pa-2">
              <v-icon large>home</v-icon>
            </span>Jun's Web Application
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to='/login'>Login</v-btn>
          <v-btn flat to='/about'>about</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <main>
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>




