//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {


}
//准备mutations——用于操作数据（state）
const mutations = {
	userLogin(state,value){
		console.log('mutations中的userLogin被调用了')
		state.userName =value
	},
	setS3Data(state,value){
		state.s3Data=value
	}
}
//准备state——用于存储数据
const state = {
	userName:"", //当前的和
	s3Data:'',
	api_list:''
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})
