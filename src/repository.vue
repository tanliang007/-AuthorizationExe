<template>
    <div class="container">
           <pre>
               {{list}}
           </pre>
    </div>
</template>

<script type="application/ecmascript">
    import api from './constant/api'
    import * as types from './store/types'
    
    export default {
        name: '',
        data () {
           return{
            list:[]   
           }
        },
        mounted(){
            this.$store.commit(types.TITLE,'仓库列表页面')
            this.getRepository()
        },
        methods: {
            getRepository(){
              this.axios.get(api.repo_list,{
              }).then(res=>{
                console.log(res)
                this.list=res
              }).catch(err=>{
                  console.log(err)
              })  
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' rel="stylesheet/scss" type="text/css">
    .repos-card {
        width: 600px;
        margin: 10px auto;
        .repo-mark {
            text-align: left;
            position: absolute;
            bottom: 15px;
        }
    }
</style>
