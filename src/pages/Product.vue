<template>
    <div class="product">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
            <van-card
            v-for="p in product"
            :key="p.id"
            :price="p.price"
            :desc="p.description"  
            :title="p.name"
            :thumb="p.photo"
            >
            <div slot="footer">
                <van-stepper v-model="p.index" @change="numChangeHandler(p,$event)"/>
            </div>
            </van-card>
        </van-list>
        <van-submit-bar
        :price="total"
        button-text="购买"
        @submit="onSubmit"
        />
    </div>
</template>
<script>
import {mapActions,mapMutations,mapState} from 'Vuex'
export default {
    data(){
        return{
            value:0,
            total:0,
            loading: false,
            finished: false,
            all_products:new Map,
            categoryId:this.$route.query.categoryId,
        }
    },
    created(){
        this.findAllProducts()
        this.findByCategoryId(this.categoryId)
        this.onLoad()
    },
    computed:{
        ...mapState('product',['products','product'])
    },
    methods:{
        ...mapActions('product',['findAllProducts','findByCategoryId']),
        numChangeHandler(val,event){
            //将获取到的数量添加到当前行中
            val.number = event
            console.log('val:',val)
            //将订单添加到all_products这个map中
            this.all_products.set(val.id,val)
            //每次数量变化将总价tot置空
            this.total = 0
            for(let i of this.all_products.values()){
                console.log('i',i)
                this.total +=(i.price*i.number*100)
            } 
        },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                // 加载状态结束
                this.loading = false;
                // 数据全部加载完成
                if (this.product.length) {
                this.finished = true;
                }
            }, 100);
        },
        onSubmit(){
         console.log("all:",this.all_products)
         
        }
    }
}
</script>