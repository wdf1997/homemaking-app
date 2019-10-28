import {get,post,post_array} from '../http/axios';

export default {
  namespaced:true,
  state:{
   orders:[],
  },
  mutations:{
    refreshOrders(state,orders){
      state.orders = orders
    }
  },
  actions:{
    async findAllOrders(context){
      let response = await get("/order/query")
      context.commit("refreshOrders",response.data)
    }
  }
}