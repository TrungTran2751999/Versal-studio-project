<template>
    <v-card style="background-color: white;">
            <v-card-actions class="pa-8 justify-center">
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-row>
                            <v-col cols="12" sm="3">
                                <div style="color: rgb(42,42,42); font-size: 20px;">
                                    <v-img src="@/assets/logo-2.png" max-height="70"></v-img>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="9" style="margin-top: 18px;">
                                <div style="color: rgb(42,42,42); font-size: 14px; font-weight: bold">CTY TNHH VERSAL STUDIO VIETNAM</div>
                                <div style="color: rgb(42,42,42); font-size: 14px;">TP.HCM: PARC MALL, Tạ Quang Bửu, Q8</div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" sm="6" style="margin-top: 18px;">
                        <v-row>
                            <v-col cols="12" sm="10"></v-col>
                            <v-col cols="12" sm="2">
                                <v-row>
                                    <v-col cols="4">
                                        <div style="color: rgb(42,42,42); font-size: larger;"><v-icon>mdi-discord</v-icon></div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div style="color: rgb(42,42,42); font-size: larger;"><v-icon>mdi-facebook</v-icon></div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div style="color: rgb(42,42,42); font-size: larger;"><v-icon>mdi-youtube</v-icon></div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
</template>

<script>
     export default{
        data(){
            return{
                config : {
                    itemsToShow: 4.5,
                    snapAlign: 'center',
                    autoplay: 2000,
                    wrapAround: true,
                    pauseAutoplayOnHover: true
                }
            }
        }
    }
</script>