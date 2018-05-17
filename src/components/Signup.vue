<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Sign Up</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>>

                </v-tooltip>
                <v-tooltip right>

                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                  <v-text-field v-model="password" :rules="passwordRules" label="password" type="password" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>