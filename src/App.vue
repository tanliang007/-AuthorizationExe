<template>
    <div id="app">
				<span style="color:red;">{{title}}</span>
				<div class="right">
					<a @click="logout" v-show="token">退出登录</a>
				</div>
			<router-view>

			</router-view>
    </div>
</template>

<script>
    import * as types from './store/types'
    import {mapState} from 'vuex'
    export default {
        name: 'app',
        data () {
            return {  
            }       
			},
		    computed:
            mapState({
            title:(state)=>state.title  
            ,
            token:(state)=>state.token         
            })  
            ,
			methods: {
            logout(){
             this.$store.commit(types.LOGOUT);   
             this.$router.push({
              path: '/'
            })
            }
        }
    }
</script>

<style lang="scss">
    @import "../node_modules/vue-material/dist/vue-material.css";
    @import "assets/css.css";
    @import "assets/icon.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .container {
        width: 1000px;
        margin: 0 auto;
    }
    .left {
        float: left;
        text-align: left;
    }
    .right{
        float: right;
    }

    .md-toolbar .title {
        vertical-align: text-top;
        margin-left: 5px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
