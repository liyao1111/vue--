// 该文件创建vuex中最核心的store
import Vue from 'vue'
import Vuex from 'vuex'

// 准备actions——用于响应组件中的动作
const actions = {
    inc(context, value) {
        context.commit('INC', value)
    },
    dec(context, value) {
        context.commit('DEC', value)
    },
    odd(context, value) {
        console.log(context)
        if (context.state.sum % 2)
            context.commit('INC', value)
    },
    delay(context, value) {
        setTimeout(() => {
            context.commit('INC', value)
        }, 1000);
    },
}
// 准备mutations——用于操作数据(state)
const mutations = {
    INC(state, value) {
        console.log('mutation INC调用', state, value)
        state.sum += value
        console.log('sum:', state.sum)
    },
    DEC(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.push(value)
    }
}
// 准备state——用于存储数据
const state = {
    sum: 0,
    school:'atguigu',
    subject:'math',
    personList:[
    {id:'001',name:'tom'}
    ]
}
// 准备getters ——用于将state中的数据加工
const getters= {
    bigSum(state){
        return state.sum * 10
    }
}
// 应用vue插件
Vue.use(Vuex)
//导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

