<template>
	<div class="chart" :class="size">
		<h1>{{title}}</h1>
		<div :id="id"></div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '标题'
			},
			code: {
				type: Object
			},
			id: {
				type: String
			},
			size: {
				type: String
			},
			myType: {
				type: String
			}
		},
		data() {
			return {
				mychart: null,
			}
		},
		mounted() {
			
			var geoCoordMap = {
					"北京": [116.39, 39.92],
					"天津": [117.21, 39.14],
					"上海": [121.47, 31.23],
					"重庆": [106.55, 29.56],
					"河北": [114.52, 38.04],
					"山西": [112.55, 37.89],
					"辽宁": [123.43, 41.8],
					"吉林": [125.32, 43.81],
					"黑龙江": [126.65, 45.77],
					"江苏": [118.77, 32.05],
					"浙江": [120.21, 32.05],
					"安徽": [117.28, 31.86],
					"福建": [119.33, 26.04],
					"江西": [115.89, 28.68],
					"山东": [117.02, 36.68],
					"河南": [113.64, 34.75],
					"湖北": [114.31, 30.58],
					"湖南": [112.97, 28.21],
					"广东": [113.3, 23.12],
					"海南": [110.33, 20.02],
					"四川": [104.06, 30.57],
					"贵州": [106.7, 26.62],
					"云南": [102.71, 24.88],
					"陕西": [108.93, 34.34],
					"甘肃": [103.82, 36.06],
					"青海": [101.76, 36.64],
					"台湾": [121.5, 25.05],
					"内蒙古": [111.66, 40.82],
					"广西": [108.29, 22.8],
					"西藏": [91.11, 29.66],
					"宁夏": [106.2, 38.5],
					"新疆": [87.56, 43.84],
					"香港": [113.88, 22.55],
					"新疆": [113.5, 22.2]
				}
			var _data=['北京','天津','上海','重庆','河北','河南','云南','辽宁','黑龙江','湖南','安徽','山东','新疆','江苏','浙江','江西','湖北','广西','甘肃','山西','内蒙古','陕西','吉林','福建','贵州','广东','青海','西藏','四川','宁夏','海南','台湾','香港','澳门']
			var that = this
			this.mychart = this.$echarts.init(document.getElementById(this.id))
			this.mychart.setOption(this.code)
			if(this.myType == "map") {
				var _index = 0
				setInterval(function() {
					that.mychart.dispatchAction({
						type: 'showTip',
						seriesIndex: 0,
						dataIndex: _index
					});
					
					that.mychart.dispatchAction({
						type: 'highlight',
						seriesIndex: 0,
						dataIndex: _index
					})
					that.mychart.dispatchAction({
						type: 'downplay',
						seriesIndex: 0,
						dataIndex: _index - 1
					})
					if(_index < 33) {
						_index++
					} else {
						_index = 0
					}

				}, 3000)
			}
//			else if(this.myType=="map2"){
//				var that=this
//				
//				var _index=0
//				setInterval(function(){
//					console.log(that.code)
//					that.code.series[0].data=that.convertData(_index,geoCoordMap,_data)
//					that.mychart.setOption(that.code)
//					that.mychart.dispatchAction({
//						type: 'showTip',
//						seriesIndex: 1,
//						dataIndex: _index
//					},{
//						type: 'highlight',
//						seriesIndex: 1,
//						dataIndex: _index
//					},{
//						type: 'downplay',
//						seriesIndex: 1,
//						dataIndex: _index
//					});
//					if(_index < 33) {
//						_index++
//					} else {
//						_index = 0
//					}
//					console.log(_index)
//				},4900)
//				setInterval(function(){
//					
//					
//				},5100)
//			}
		},
		methods:{
			convertData(num,mymap,mydata){
				var _index=num;				
				var res = [];
				for(var i = num; i < (num+3); i++) {
					var fromCoord = mymap[mydata[_index]];
					var toCoord = mymap[mydata[i]];
					if(fromCoord && toCoord) {
						res.push({
							fromName: mydata[_index],
							toName: mydata[i],
							coords: [fromCoord, toCoord]
						});
					}
				}
				return res;
			}
		},
		activated(){
			this.mychart.clear()
			this.mychart.setOption(this.code)
		}
	}
</script>

<style scoped lang="less">
	.chart {
		h1 {
			font-size: 20px;
			background: -webkit-linear-gradient(bottom, #8cc9d9, white);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			line-height: 40px;
			font-weight: bold;
			padding-left: 20px;
		}
		div {
			width: 400px;
			height: 220px;
		}
	}
	
	.big div {
		width: 865px;
		height: 675px;
	}
</style>