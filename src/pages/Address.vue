<template>
    <div class="address">
        <van-nav-bar
        title="常用地址"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-divider />
        <van-row v-for="c in address" :key="c.id" :value="c.id">
            <van-col :span='3' style="padding-left:12px;">
                <van-radio-group v-model="radio" @change="radioChangeHandler">
                    <van-radio :name="c.id" checked-color="#07c160"></van-radio>
                </van-radio-group>
            </van-col>
            <van-col :span='17'>
                <p>{{c.id}},{{c.telephone}}</p>
                <p>{{c.province}}{{c.city}}{{c.area}}{{c.address}}</p>
            </van-col>
            <van-col :span='4'><van-icon name="edit" @click="updataAddressHandler(scoped.row)"/></van-col>
       </van-row>
       <van-tabbar>
        <van-tabbar-item style="background:#EE0A24;color:#fff;font-size:20px;" @click="addAddressHandler">新增地址</van-tabbar-item>
       </van-tabbar>
    </div>
</template>
<script>
import {mapMutations,mapActions,mapState} from 'vuex'
export default {
    data(){
        return{
             radio: '1'
        }
    },
    created(){
        this.findAddressByCustomerId(1221650)
    },
    computed:{
        ...mapState('address',['address'])
    },
    methods:{
        ...mapActions('address',['findAddressByCustomerId']),
        onClickLeft(){
            this.$router.go(-1)
        },
        radioChangeHandler(val){
        },
        //新增地址
        addAddressHandler(){
            this.$router.push('/addAddress')
        },
        updataAddressHandler(val){
            alert(val)
        }
    }
}
</script>
<style scoped>
  .van-divider{
    margin: 0;
  }
  .van-row{
      padding: 15px 0;
      border-bottom: 1px solid #ededed;
  }
  .van-col>p:last-child{
      color:#666565;
      margin:0;
  }
  .van-col>p{
      margin: 0 ;
  }
</style>