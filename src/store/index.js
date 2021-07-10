import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentsList(state, payload) {
      state.paymentsList.push(payload)
    },
    setCategoryList(state, payload) {
      state.categoryList = payload
    }
    // updateItem(state, payload) {
    //   // Vue.set(state.paymentsList, 0, payload)
    //   //
    //   // state.paymentsList = [...state.paymentsList]
    // }
  },
  actions: {
    fetchData({commit,}) {
      return new Promise((resolve)=> {
        setTimeout(() =>{
          const items = []
          for(let i=1; i<10; i++){
            items.push({
              date: '10.07.2021',
              category: 'Sport',
              value: i
            })
          }
          resolve(items)
        }, 2000)
      }).then(res=>{
        commit('setPaymentListData', res)
      })
    },
    fetchCategory({commit}) {
      return new Promise ((resolve)=>{
        setTimeout(()=>{
          resolve(['Food', 'Sport', 'Education', 'Auto', 'Health', 'Family'])
        }, 0)
      }).then(res=>{
        commit('setCategoryList', res)
      })
    }
  },
  getters: {
    getPaymentList: state => state.paymentsList,
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
    },
    getCategoryList: state=>state.categoryList
  }
})
