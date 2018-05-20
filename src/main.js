// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC9bMSrOA9KV--QOOKarFY56WY_FeVBZAE',
  authDomain: 'jun-vue-project.firebaseapp.com',
  databaseURL: 'https://jun-vue-project.firebaseio.com',
  projectId: 'jun-vue-project',
  storageBucket: 'jun-vue-project.appspot.com',
  messagingSenderId: '85565491790'
}
var myfirebase = firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data () {
    return {
      fireRef: myfirebase
    }
  }
})
