//状态管理

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)



var store =new Vuex.Store({
	state:{//存储数据的选项
		rangArr:[0,0,0],//存储评分数据的地方  分数
		tagInfo:''//存储评分数据的地方  评价
	},
	mutations:{//唯一能改变状态管理里面的数据，也是一个选项参数，里面放函数
		 changRangArr(state,obj) {//改变存储数据里的数据的函数，obj代表上面数组里的下标
		 	state.rangArr[obj.id]=obj.value;
		 },
		 changTagInfo(state,info){
		 	state.tagInfo=info;
		 }
	}
})


export default store
           