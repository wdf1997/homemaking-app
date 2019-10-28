import {get, post,post_array} from '../http/axios'
export default {
  namespaced:true,
  state:{
    address:[]
  },
  mutations:{
    refreshAddress(state,address){
      state.address = address;
    }
  },
  actions:{
    //通过顾客id查地址
    async findAddressByCustomerId(context,id){
      let response = await get("/address/findByCustomerId?id="+id);
      context.commit("refreshAddress",response.data)
    },
    //保存或更新地址信息
    async saveOrUpdateAddress({commit,dispatch},payload){
      let response = await post('/address/saveOrUpdate',payload);
      dispatch('findAddressByCustomerId');
      return response;
    }
  }
}