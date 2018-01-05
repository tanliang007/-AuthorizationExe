<template>
  <div class="container">
    <form action="" @submit.stop.prevent="login">
       <p>请输入github的token按回车来登录</p>
      <input type="text" v-model="token">
    </form>
     <md-button href="https://github.com/settings/tokens/new" target="_blank" class="md-raised md-primary">创建你的token</md-button>
  </div>
</template>

<script type="application/ecmascript">
  import * as types from './store/types'
  export default {
    name: '',
    data () {
      return {
       token:''
      }
    },
    mounted(){
      this.$store.commit(types.TITLE,'登录页面')
    },
    methods: {
      login(){
        if(this.token){
            this.$store.commit(types.LOGIN,this.token);
            var redirect=decodeURIComponent(this.$route.query.redirect||'/')  
            this.$router.push({
              path:redirect
            })
        }
      
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' rel="stylesheet/scss" type="text/css">
  .login-form{
    width: 400px;
    margin: 50px auto;
  }
</style>
