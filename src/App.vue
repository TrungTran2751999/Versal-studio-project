<template>
  <RouterView></RouterView>
</template>

<script>
import { param } from 'jquery';


export default {
  data: () => ({
    //
  }),

  name: 'App',

  components: {
   
  },

  mounted(){
    this.redirectAllowRouter();
  },
  methods:{
    redirectAllowRouter(){
      if(localStorage.getItem("PreUrl")){
        let preUrl = localStorage.getItem("PreUrl");
        this.$router.push(preUrl)
        history.pushState({}, '', preUrl);
        localStorage.removeItem("PreUrl");
      }
    }
  }

}
</script>
