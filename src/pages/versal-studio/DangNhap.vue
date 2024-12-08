<style scoped>
.bg-card {
    font-size: 20px;
    font-weight: 900;
    background-image: url("../../assets/bg-card-footer.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
}

.v-row {
    padding: 0;
    margin: 0;
}

.v-col {
    padding: 0;
    margin: 0;
}

.form {
    width: 70%;
}

@media (max-width: 900px) {
    .form {
        width: auto;
    }
}
</style>
<template v-slot:activator="{ on }">
    <div class="bg-card">
        <v-container fluid>
            <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
                <v-card-title style="text-align: center;">ĐĂNG NHẬP</v-card-title>
                <div class="text-subtitle-1 text-medium-emphasis">Tài khoản</div>

                <v-text-field density="compact" placeholder="Tên đăng nhập" prepend-inner-icon="mdi-account-outline"
                    variant="outlined"></v-text-field>

                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Mật khẩu

                    <!-- <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                        target="_blank">
                        Forgot login password?</a> -->
                </div>

                <v-text-field :append-inner-icon="isShowPass ? 'mdi-eye-off' : 'mdi-eye'" :type="isShowPass ? 'text' : 'password'"
                    density="compact" placeholder="Nhập mật khẩu" prepend-inner-icon="mdi-lock-outline"
                    variant="outlined" @click:append-inner="isShowPass = !isShowPass"></v-text-field>

                <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
                   ĐĂNG NHẬP
                </v-btn>

                <v-card-text class="text-center">
                    <RouterLink to="/dang-ky" class="text-blue text-decoration-none" rel="noopener noreferrer">
                        ĐĂNG KÝ <v-icon icon="mdi-chevron-right"></v-icon>
                    </RouterLink>
                </v-card-text>
            </v-card>
        </v-container>
        <Footer></Footer>
    </div>

</template>
<script>
import Footer from './layout/Footer.vue';

export default {
    data() {
        return {
            isShowPass: false
        }
    },
    methods: {
        
    },
    components: {
        Footer
    }
}
</script>
