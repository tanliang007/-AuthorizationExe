/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import store from './store/store'
import * as types from './store/types'
import router from './router'

// axios 配置
axios.defaults.baseURL='https://api.github.com';
axios.defaults.timeout = 10000;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	if(store.state.token){
		config.headers.Authorization=`token ${store.state.token}`
	}
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	return response;
}, function (error) {
	// 对响应错误做点什么
	console.log(error.response.status)
	if(error.response.status==401){
		alert('token不正确')
		 store.commit(types.LOGOUT);
		 console.log(router )
		 router.replace({
			path: 'login',
			query: {redirect: router.currentRoute.fullPath}
		})
	}
	return Promise.reject(error);
});

// `token ${store.state.token}`


export default axios;
