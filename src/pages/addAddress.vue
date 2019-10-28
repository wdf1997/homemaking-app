<template>
    <div class="addAddress">
        <van-nav-bar
        title="新增地址"
        left-text="返回"
        left-arrow
        @click-left="backHandler"
        />
        <van-divider />
        <div>
            <van-cell-group>
                <van-field
                    v-model="address.username"
                    required
                    clearable
                    label="姓名"
                    right-icon="question-o"
                    placeholder="Username"
                    @click-right-icon="$toast('question')"
                />
                <van-field
                    v-model="address.telephone"
                    required
                    clearable
                    label="电话"
                    size="11"
                    right-icon="question-o"
                    placeholder="telephone"
                    @click-right-icon="$toast('question')"
                />
                <van-field
                    v-model="address.province"
                    required
                    clearable
                    label="省份"
                    right-icon="question-o"
                    placeholder="province"
                    @click-right-icon="$toast('question')"
                /><van-field
                    v-model="address.city"
                    required
                    clearable
                    label="城市"
                    right-icon="question-o"
                    placeholder="city"
                    @click-right-icon="$toast('question')"
                /><van-field
                    v-model="address.area"
                    required
                    clearable
                    label="地区"
                    right-icon="question-o"
                    placeholder="area"
                    @click-right-icon="$toast('question')"
                /><van-field
                    v-model="address.address"
                    required
                    clearable
                    label="地址"
                    right-icon="question-o"
                    placeholder="address"
                    @click-right-icon="$toast('question')"
                />
                </van-cell-group>
                <div class="bottom_button">
                    <van-button type="danger" size="large" @click="saveAddressHandler">保存</van-button>
                    <van-button type="default" size="large" @click="backHandler">取消</van-button>                   
                </div>
                <van-popup v-model="show" style="padding:30px 15px;">新增地址成功！</van-popup>
                <van-popup v-model="show1" style="padding:30px 15px;">新增地址失败！</van-popup>
        </div>
    </div>
</template>
<script>
import areaList from "../assets/js/area.js";
import {mapMutations,mapActions,mapState} from 'vuex'
export default {
    data(){
        return{
            show: false,
            show:false,
            searchResult: [],
            address:{'customerId':1221650,},
        }
    },
    created(){

    },
    computed:{

    },
    methods:{
       ...mapActions('address',['saveOrUpdateAddress']),
       saveAddressHandler(){
           this.saveOrUpdateAddress(this.address).then((response)=>{
               if(response.status === 200){
                 this.show = true;                  
                }else{
                 this.show1 = true; 
                }
           })
           this.address = {'customerId':1221650,}
       },
       backHandler(){
           this.$router.go(-1)
       }
    }
}
</script>
<style scoped>
 .van-divider{
    margin: 0;
  }
  .bottom_button{
      margin-top:50px; 
      padding: 0 10px;
  }
  .bottom_button>.van-button{
      margin-bottom: 10px;
  }
  .addAddress{
      background-color: #faf6f6;
  }
</style>