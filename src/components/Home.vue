<template>
  <v-app light>
    <v-content>
      <section>
        <v-parallax src="../../static/img/parallax/hero.jpeg" height="600">
          <v-layout column align-center justify-center class="white--text">
            <img src="../../static/img/parallax/vuetify.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">VueJS Project</h1>
            <div class="subheading mb-3 text-xs-center">ToDo Web Application</div>
            <v-btn class="blue lighten-2 mt-5" dark large to='signup'>
              get started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">자기 할일을 관리할 수 있도록 도와주는 웹 어플리케이션 입니다.</h2>
              <span class="subheading">
                효율적인 방법으로 시간을 관리 해보세요.
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="../../static/img/parallax/plane.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Todo Web Application</div>
            <em>예시 프로젝트 입니다.</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes" to='signup'>
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by Choi Jun Seong.
              <a class="white--text" href="https://github.com/hengmo/Vue-TODOproject">Github</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>
