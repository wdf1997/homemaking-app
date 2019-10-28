<template>
    <div class="user">
        <van-nav-bar title="我 的">
          <van-icon name="bars" slot="right" style="font-size:18px;"/>

        </van-nav-bar>
        <van-divider />
        <div id="user_img">
          <van-image
            round
            width="7rem"
            height="7rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />

        </div>
        <div class="user_address" @click="goAddressHandler">常用地址</div>
        <van-divider />
        <div class="uesr_back">退出</div>
        <van-divider />
    </div>
</template>
<script>
import {mapActions,mapMutations,mapState} from 'vuex'
export default {
  data(){
    return{
      value1:0,
      option1: [
        { text: '全部顾客', value: 0 },
        { text: '新款商品', value: 1 }
      ]
    }
  },
  created(){
    console.log("customer",this.option1);
    this.findAllCustomers();
    this.option1Push()
  },
  computed:{
    ...mapState('customer',['customers'])
  },
  methods:{
    ...mapActions('customer',['findAllCustomers']),
    option1Push(){
      
    },
    goAddressHandler(){
      this.$router.push('/address')
    }
  }
}
</script>
<style scoped>
  #user_img{
    text-align: center;
    margin:40px 0 70px 0;
  }
  .user_address,.uesr_back{
    padding: 20px;
    color: #524f4f;
  }
  .van-divider{
    margin: 0;
  }
</style>