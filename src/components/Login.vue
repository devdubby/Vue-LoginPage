<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field 
                  prepend-icon="person"
                  name="login" 
                  label="이메일" 
                  :rules="emailRules" 
                  v-model="email" 
                  required>
                  </v-text-field>
                  <v-text-field 
                  id="password" 
                  prepend-icon="lock" 
                  name="password" 
                  label="비밀번호" 
                  :append-icon="e1 ? 'visibility' : 'visibility_off'" 
                  :append-icon-cb="() => (e1 = !e1)" 
                  :rules="passwordRules" 
                  :type="e1 ? 'text' : 'password'" 
                  min="8" 
                  counter 
                  v-model="password"
                  v-on:keyup.enter="loginUser" 
                  required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="loginUser">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    e1: false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || '비밀번호를 입력해주세요.',
      v =>
        /^.*(?=.{8,25})(?=.*[0-9])(?=.*[a-zA-Z]).*$/.test(v) ||
        '문자+숫자 8자리 이상 입력해주세요.'
    ]
  }),
  props: {
    source: String
  },
  methods: {
    loginUser: function () {
      this.$root.fireRef
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
        })
        .catch(error => {
          console.log(error)
          if (error.code === 'auth/wrong-password') alert('비밀번호가 틀렸습니다.')
          else if (error.code === 'auth/user-not-found') alert('가입 된 이메일이 없습니다.')
        })
    }
  }
}
</script>