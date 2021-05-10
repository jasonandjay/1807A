<template>
	<div>
		<p>地址：{{address.address}}</p>
		<p>电话：{{signDetail.phone}}</p>
		<p>面试时间：{{signDetail.start_time | formatTime}}</p>
		<p v-if="signDetail.sign_time">签到时间：{{signDetail.sign_time | formatTime}}</p>
		<section>
			<button @click="goSign">打卡</button>
		</section>
	</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
	computed: {
		...mapState({
			signDetail: state=>state.sign.signDetail
		}),
		address(){
			if (this.signDetail.address){
				return JSON.parse(this.signDetail.address)
			}else{
				return {}
			}
		}
	},
	watch: {
		signDetail(){
			if (this.signDetail.company){
				wx.setNavigationBarTitle({title: this.signDetail.company});
			}
		}
	},
	methods: {
		...mapActions({
			getSignDetail: 'sign/getSignDetail'
		}),
		goSign(){
			wx.navigateTo({ url: '/pages/sign/sign'})
		}
	},
	onShow(){
		console.log('this...', this, this.$mp.query);
		let {id} = this.$mp.query;
		this.getSignDetail(id);
	}
}
</script>

<style>

</style>