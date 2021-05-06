<template>
  <div>
    <picker mode="region" @change="regionChange">
      <span class="picker"> {{ region[0] }} {{ region[1] }} </span>
    </picker>
    <input type="text" v-model="key" @input="keyChange" />
  </div>
</template>

<script>
import QQMapWX from '@/utils/qqmap-wx-jssdk.js';
const key = 'WCLBZ-Q6L6S-C4NO6-6BPPE-OEV2F-52FGA';

export default {
	data(){
		return {
			region: [],
			city: '',
			key: ''
		}
	},
	methods: {
		regionChange(e){
			this.region = e.target.value;
		},
		keyChange(e){
			console.log(e);
			if (!e.target.value){
				return;
			}
			// 调用接口
			this.qqmapsdk.search({
				keyword: e.target.value,
				region: this.region[1],
				complete: function (res) {
					console.log(res);
				}
			})
		}
	},
	created(){
		this.qqmapsdk = new QQMapWX({
            key
        });
	}
};
</script>

<style>
</style>