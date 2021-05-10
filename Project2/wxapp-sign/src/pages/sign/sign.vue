<template>
  <div class="wrap">
    <map 
        show-location 
        :include-points="points" 
        :markers="markers"
        :circles="circles"
    ></map>
    <cover-view>
      <button>打卡</button>
    </cover-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import getDistance from '@/utils/distance'

export default {
    data() {
        return {
            longitude: "",
            latitude: "",
        };
    },
    methods: {
        getCurLocation() {
            wx.getLocation({
                success: (res) => {
                    this.longitude = res.longitude;
                    this.latitude = res.latitude;
                },
            });
        }
    },
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
		},
        markers(){
            if (Object.keys(this.address).length){
                console.log('address....', this.address)
                return [{
                    latitude: this.address.location.lat,
                    longitude: this.address.location.lng,
                    width: 25,
                    height: 25,
                    label: {content: this.signDetail.company},
                    iconPath: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsxsimg.xiaoyuanzhao.com%2F16%2F6E%2F1653C3DC221D70E6A18A761CF837936E.png&refer=http%3A%2F%2Fsxsimg.xiaoyuanzhao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623204035&t=1159f9315a90a2805c85df8d8062ba98'
                }]
            }
            return [];
        },
        points(){
            return [{latitude: this.latitude, longitude: this.longitude}, ...this.markers];
        },
        circles(){
            let distance = getDistance(this.latitude, this.longitude, this.address.latitude, this.address.longitude);
            console.log('distance...', distance);
            let fillColor = distance<1000?'#00ff00':'#ccc';
            return [{
                latitude: this.address.location.lat,
                longitude: this.address.location.lng,
                radius: 1000,
                fillColor,
                color: '#000'
            }]
        }
    },
    created() {
        this.getCurLocation()
    }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
map {
  flex: 1;
  width: 100%;
}
button {
  height: 90rpx;
  width: 100%;
}
</style>