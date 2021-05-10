<template>
    <div>
        <header>
            <span @click="updateState({key: 'status', value: index-1})" :class="index-1===status?'active':''" v-for="(item,index) in headers" :key="item">{{item}}</span>
        </header>
        <div class="wrap">
            <section v-if="signList.length">
                <navigator :url="`/pages/sign/signDetail?id=${item.id}`" v-for="item in signList" :key="item.id">
                    <p>{{item.company}}</p>
                    <p>{{item.address.address}}</p>
                    <p>
                        <span>面试时间：{{item.start_time | formatTime}}</span>
                        <span v-if="item.sign_time">签到时间：{{item.sign_time | formatTime}}</span>
                    </p>
                    <button>{{headers[item.status+1]}}</button>
                </navigator>
            </section>
            <span v-else>当前分类没有面试!</span>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    filters: {
        formatTime(val){
            let date = new Date(+val);
            let year = date.getFullYear(),
                month = String(date.getMonth()+1).padStart(2, '0'),
                day = String(date.getDate()).padStart(2, '0'),
                hour = String(date.getHours()).padStart(2, '0'),
                min = String(date.getMinutes()).padStart(2, '0');
            return `${year}-${month}-${day} ${hour}:${min}`
        }
    },
    computed: {
        ...mapState({
            signList: state=>state.sign.signList,
            page: state=>state.sign.page,
            status: state=>state.sign.status
        }),
        headers(){
            return ['未开始', '已打卡', '已放弃', '全部']
        }
    },
    watch: {
        status: {
            handler(){
                this.updateState({key: 'page', value: 1})
                this.getSignList();
            },
            immediate: true, // 立即执行
            // deep: true  // 深度监听
        }
    },
    methods: {
        ...mapMutations({
            updateState: 'sign/updateState'
        }),
        ...mapActions({
            getSignList: 'sign/getSignList'
        })
    },
    async onPullDownRefresh(){
        this.updateState({key: 'page', value: 1})
        await this.getSignList();
        wx.stopPullDownRefresh();
    },
    onReachBottom(){
        if (this.page*10 === this.signList.length){
            this.updateState({key: 'page', value: this.page+1})
            this.getSignList();
        }else{
            wx.showToast({
                icon: 'none',
                title: '没有更多数据了'
            })
        }
    }
}
</script>

<style scoped lang="scss">
header{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 90rpx;
    display:flex;
    align-items: center;
    justify-content:space-between;
    border-bottom: 1px solid #ccc;
    background: #fff;
    span{
        text-align: center;
        flex: 1;
    }
    span.active{
        color: skyblue;
    }
}
.wrap{
    padding-top: 90rpx;
    display:flex;
    align-items: center;
    justify-content: center;
}
</style>