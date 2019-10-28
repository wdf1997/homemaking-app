<template>
  <div class="order">
    <van-nav-bar
      title="我的订单"
      left-text="返回"
      right-text="详情"
      left-arrow
      bind:click-left="onClickLeft"
      bind:click-right="onClickRight"
    />
    <van-tabs sticky>
      <van-tab title="全部订单">
        <van-card
          v-for="o in orders"
          :key="o.id"
          :tag="o.status"
          :price="o.total"
          :desc="o.customer.realname"
          :title="o.orderTime"
          thumb="https://b-ssl.duitang.com/uploads/item/201806/07/20180607185957_fjrFt.thumb.700_0.jpeg">
          <view slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </view>
        </van-card>
      </van-tab>
      <van-tab title="未付款">内容 2</van-tab>
      <van-tab title="未服务">内容 3</van-tab>
      <van-tab title="未评价">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default{
  data(){
   return {
   }
  },
  created(){
    this.findAllOrders()
  },
  computed:{
    ...mapState("order",["orders"]),
  },
  methods:{
    // ...mapMutations("order",[""])
    ...mapActions("order",["findAllOrders"]),
    //  普通方法
    onClickLeft(){
      this.$router.push('/home')
    }
  },

}
</script>