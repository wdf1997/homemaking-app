<template>
    <div class="category">
        <!-- 导航栏 -->
        <van-nav-bar
            title="商品分类"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <van-divider />
        <van-row>
            <van-col span="5" style="margin:5px;" id="aside_left">
                <!-- 侧边栏 -->
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item 
                    v-for="c in categories" 
                    :key="c.id"
                    :title="c.name"
                    :to="{ path: '/category/product', query: {categoryId: c.id} }"
                    />    
                </van-sidebar>
            </van-col>
            <van-col span="18" id="content_right">
               <router-view></router-view>
            </van-col>
        </van-row>
    </div>
</template>
<script>
import {mapActions,mapState} from 'Vuex'
export default {
    data(){
        return{
             activeKey: 0,
             id:this.$route.query.id
        }
    },
    created(){
        console.log("id",this.id);
        this.findAllCategories();
        //this.tabChangeHandler(this.id);
        //this.tabChangeHandler(9139)
    },
    computed:{
        ...mapState("category",["categories"])
    },
    methods:{
        ...mapActions("category",["findAllCategories"]),
        onClickLeft(){
            this.$router.push('/home')
        },
        // tabChangeId(val){
        //     this.id = val
        //     console.log('ids',this.id)
        // },
        // tabChangeHandler(val){
        //     this.categoryId = {}
        //     this.$router.push({
        //         path:"/category/product",
        //         query:{categoryId:val}
        //     })
        // }
    }
}
</script>
<style scoped>
    #aside_left{
        position: absolute;
        bottom: 0;
        top: 46px;
        background-color: #eeebeb;
        width: 83px;
    }
    #aside_left a.van-sidebar-item{
        background-color: #eeebeb;   
        border-bottom:1px solid #ededed; 
        box-sizing: border-box; 
        width: 83px;
    }
    #content_right{
        margin-left: 88px;
    }
    .van-divider{
        margin:0;
    }
</style>