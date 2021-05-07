<template>
	<div>
		<slider :value="money" @change="e=>money=e.target.value"></slider>
		<span>¥{{money}}</span>
		<button @click="pay">支付</button>
	</div>
</template>

<script>
import {mapState, mpaGetters, mapMutations, mapActions} from 'vuex'

export default {
	data(){
		return {
			money: 0
		}
	},
	computed: {
		...mapState({
			payInfo: state=>state.pay.payInfo
		})
	},
	methods: {
		...mapActions({
			getPayInfo: 'pay/getPayInfo'
		}),
		async pay(){
			console.log('money...', this.money)
			await this.getPayInfo(this.money)
	
			let {timeStamp, nonceStr, paySign} = this.payInfo;
			
			wx.requestPayment({
				timeStamp,
				nonceStr,
				signType: 'MD5',
				package: this.payInfo.package,
				paySign,
				complete: res=>{
					// debugger;
				}
			})
		}
	}
}
</script>

<style>

</style>