<template>
  <v-card>
      <v-card-actions style="background-color: #6b3e9e; height: 200px;">
          
      </v-card-actions>
  </v-card>
  <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg" style="margin-top: -50px;">
    <div class="text-subtitle-1 text-medium-emphasis">Tài khoản</div>
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-text-field density="compact" placeholder="Tài khoản" prepend-inner-icon="mdi-email-outline" variant="outlined"
        v-model="info.Username" :rules="[required]" :readonly="loading" clearable></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Mật khẩu
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="Mật khẩu" prepend-inner-icon="mdi-lock-outline" variant="outlined"
        :rules="[required]" :readonly="loading" @click:append-inner="visible = !visible" v-model="info.Password"
        clearable></v-text-field>

      <div v-if="!isSuccess" style="color: red; font-size: small;">Tên đăng nhập hoặc mật khẩu không chính xác</div>
      
      <v-btn class="mb-8" color="blue" size="large" variant="tonal" type="submit" block :readonly="loading"
        :disabled="!form" @click.once="onSubmit">
        <div v-if="loading">
          <v-progress-circular indeterminate></v-progress-circular>
        </div>
        <div v-else> Đăng nhập</div>
      </v-btn>
      <!-- <v-card-actions class="justify-center">
        <a href="/register">Đăng ký</a>
      </v-card-actions> -->
    </v-form>
  </v-card>
</template>
<script>
import Cookies from 'js-cookie';
import { utilController } from '@/services/Util';
import { userController } from '@/services/UserController';
export default {
  data: () => ({
    visible: false,
    form: false,
    info: {
      Username: "",
      Password: ""
    },
    loading: false,
    isSuccess: true,
  }),
  methods: {
    onSubmit() {
      if (!this.form) return
      this.loading = true
      this.isLogin = true
      let obj = {
        userName: this.info.Username,
        password: this.info.Password
      }
      userController.login(obj)
      .then(res => {
        window.location.href = "/admin"
        Cookies.set('token', res.data.token, {
            secure: true,
            sameSite: 'strict'
        })
        Cookies.set('id', res.data.id, {
            secure: true,
            sameSite: 'strict'
        })
        Cookies.set('name', res.data.name, {
            secure: true,
            sameSite: 'strict'
        })
        Cookies.set('guid', res.data.guid, {
            secure: true,
            sameSite: 'strict'
        })
        // this.loading = false
        // if (Array.isArray(res)) {
        //   this.isSuccess = false
        // } else {
        //   Cookies.set('tokenJWT', res, {
        //     secure: true,
        //     sameSite: 'strict'
        //   })
        //   window.location.href = "/"
        // }
      })
      .catch(err=>{
        window.location.href = "/"
      })
      
    },
    required(v) {
      this.isSuccess = true;
      return !!v || 'Không được bỏ trống'
    }
  },
  created: () => {
    let checkJWT = utilController.checkJWTToken();
    if (checkJWT) {
      window.location.href = "/admin"
    }
  },
}
</script>