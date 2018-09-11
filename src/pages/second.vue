<template>
	<div class="second">
		<div class="left-panel">
			<num-show v-for="item in leftNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id" :numChange="item.numChange" :numRange="item.numRange" :inttime="item.inttime"></num-show>
			<chart :title="chart1.title" :code="chart1.data" :id="chart1.id"></chart>
			<chart :title="chart2.title" :code="chart2.data" :id="chart2.id"></chart>
		</div>
		<div class="middle-panel">
			<num-show v-for="item in midNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id" :numChange="item.numChange" :numRange="item.numRange" :random="item.random"></num-show>
			<chart :title='chart6.title' :id="chart6.id" :code="chart6.data" size="big" myType="map"></chart>
		</div>
		<div class="right-panel">
			<chart :title="chart3.title" :id="chart3.id" :code="chart3.data"></chart>
			<chart :title="chart4.title" :id="chart4.id" :code="chart4.data"></chart>
			<chart :title="chart5.title" :id="chart5.id" :code="chart5.data"></chart>
		</div>
	</div>
</template>

<script>
	import numShow from '../components/numShow'
	import chart from '../components/chart'
	export default {
		components: {
			numShow,
			chart
		},
		data() {
			return {
				leftNumList: [{
					id: 0,
					title: "全国门店数:",
					num: 31962,
					unit: '家',
					size: 'big'
				}, {
					id: 1,
					title: '服务用户数:',
					num: 65871369,
					unit: '人 ',
					size: 'middle',
					numRange: [5, 6],
					numChange: true,
					inttime:3000
				}, {
					id: 2,
					title: '服务人次:',
					num: 1598100,
					unit: '次/天',
					size: 'middle',
					numRange: [4, 5],
					numChange: true,
					inttime:3000
				}],
				midNumList: [{
					id: 0,
					title: '门店智能家电在线数：',
					num: 245561,
					unit: "台",
					size: "supBig",
					numRange: [0, 5],
					numChange: true,
					random: true
				}, {
					id: 1,
					title: '人机交互数：',
					num: 1698543,
					unit: "次",
					size: "supBig",
					numRange: [5, 5],
					numChange: true,
					random: false
				}],
				chart1: {
					id: 'chart2_1',
					title: '洗护服装品类:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '70%',
							center: ['50%', '50%'],
							data: [{
									value: 8,
									name: '丝绸睡衣',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 12,
									name: '真丝被',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 25,
									name: '纯棉被套',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 30,
									name: '纯棉衬衫',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 11,
									name: '毛绒玩具',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 9,
									name: '羽绒服',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 5,
									name: '其他',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								}
							].sort(function(a, b) {
								return a.value - b.value;
							}),
							roseType: false,
							label: {
								normal: {
									fontSize:this.CONFIG.PIEFONTSIZE,
									textStyle: {
										color: 'rgba(31, 154, 255, 1)'
									},
									formatter: function(data) {
										return data.name + '\n{yellow|' + data.percent + '%}'
									},
									rich: {
										yellow: {
											color: 'yellow'
										}
									}
								}
							},
							labelLine: {
								normal: {
									lineStyle: {
										color: 'rgba(75, 227, 255, 1)'
									},
									smooth: 0.2,
									length: 10,
									length2: 20
								}
							},
						}]

					}
				},
				chart2: {
					id: 'chart2',
					title: '洗护服装规格:',
					data: {
						tooltip: {},
						grid:{
							left:20,
							right:20,
							top:20,
							bottom:40
						},
						xAxis: {
							data: ['150以下', '155', '160', '165', '170', '175', '180', '180以上'],
							axisLabel: {
								textStyle: {
									color: '#1f9aff'
								},
								interval: 0
							},
							axisTick: {
								show: false
							},
							axisLine: {
								show: false
							},
							z: 10
						},
						yAxis: {
							axisLine: {
								show: true
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								show:false,
								textStyle: {
									color: '#1f9aff'
								}
							},
							splitLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
						},
						dataZoom: [{
							type: 'inside'
						}],
						series: [{ // For shadow
								type: 'bar',
								itemStyle: {
									normal: {
										color: 'rgba(0,0,0,0.05)'
									}
								},
								barGap: '-100%',
								barCategoryGap: '40%',
								data: [200, 200, 200, 200, 200, 200, 200, 200],
								animation: false
							},
							{
								type: 'bar',
								itemStyle: {
									normal: {
										color: new this.$echarts.graphic.LinearGradient(
											0, 0, 0, 1, [{
													offset: 0,
													color: '#4453cb'
												},
												{
													offset: 0.5,
													color: '#7d3dc0'
												},
												{
													offset: 1,
													color: '#b627b5'
												}
											]
										)
									}
								},
								data: [80, 100, 120, 180, 190, 160, 135, 85]
							}
						]
					}
				},
				chart3: {
					id: 'chart3',
					title: '品类存销比:',
					data: {
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							icon:'rect',
							data: ['裙子','衬衫','短裤','长裤','T恤','其他'],
							textStyle: {
								color: 'white'
							}
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: ['4月', '5月', '6月', '7月', '8月'],
							axisLabel: {
								textStyle: {
									color: '#1f9aff'
								},
								interval: 0
							},
						},
						yAxis: {
							type: 'value',
							axisLabel: {
								textStyle: {
									color: '#1f9aff'
								}
							},
							splitLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
							min:0,
							max:4
						},
						series: [{
								name: '裙子',
								type: 'line',
								stack: '总量1',
								data: [2.6,2.2,2.1,1.9,1.7,1.4,1.1].reverse()
							},
							{
								name: '衬衫',
								type: 'line',
								stack: '总量2',
								data: [2.9,2.7,2.4,1.9,2.0,1.7,1.6].reverse()
							},
							{
								name: '短裤',
								type: 'line',
								stack: '总量3',
								data: [2.0,2.2,1.7,1.6,1.4,1.4,1.2].reverse()
							},
							{
								name: '长裤',
								type: 'line',
								stack: '总量4',
								data: [0.9,0.9,0.9,1.0,0.8,0.8,0.6].reverse()
							},
							{
								name: 'T恤',
								type: 'line',
								stack: '总量5',
								data: [1.7,1.7,1.6,1.5,0.9,1.0,0.9].reverse()
							},
							{
								name: '其他',
								type: 'line',
								stack: '总量5',
								data: [1.6,1.7,1.7,1.4,1.2,1.0,0.9].reverse()
							}
						]
					}

				},
				chart4: {
					id: 'chart4',
					title: '品类库存:',
					data: {
						color: ['#3862ff', '#2a4ed4  ', '#272bdd ', '#716cea'],
						tooltip: {
							trigger: 'axis',
							axisPointer: {
								type: 'shadow'
							}
						},
						title:{
							subtext:'单位:亿元',
							subtextStyle:{
								color: '#1f9aff',
							
							},
							right:0,
							top:14
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						legend: {
							data: ['裙子','衬衫', '裤类','T恤', '其他'],
							textStyle: {
								color: 'white'
							}
						},
						calculable: true,
						xAxis: [{
							type: 'category',
							axisTick: {
								show: false
							},
							data: ['4月', '5月', '6月', '7月', '8月'],
							axisLabel: {
								textStyle: {
									color: '#1f9aff'
								},
							},
						}],
						yAxis: [{
							type: 'value',
							axisLabel: {
								textStyle: {
									color: '#1f9aff'
								},
							},
							splitLine: {
								lineStyle: {
									color: '#15406f'
								}
							}
						}],
						series: [{
								name: '裙子',
								type: 'bar',
								barGap: 0,
								label: {
									normal: {
										show: false,
										position: 'top',
										distance: 15,
										align: 'left',
										verticalAlign: 'middle',
										rotate: 90,
										formatter: '{c}',
										fontSize: 16,
										rich: {
											name: {
												textBorderColor: '#fff'
											}
										}
									},
								},

								data: [320, 302, 298, 274, 265]
							},
							{
								name: '衬衫',
								type: 'bar',
								label: {
									normal: {
										show: false,
										position: 'top',
										distance: 15,
										align: 'left',
										verticalAlign: 'middle',
										rotate: 90,
										formatter: '{c}',
										fontSize: 12,
										rich: {
											name: {
												textBorderColor: '#fff'
											}
										}
									},
								},
								data: [220, 182, 171, 164, 160]
							},
							{
								name: '裤类',
								type: 'bar',
								label: {
									normal: {
										show: false,
										position: 'top',
										distance: 15,
										align: 'left',
										verticalAlign: 'middle',
										rotate: 90,
										formatter: '{c}',
										fontSize: 12,
										rich: {
											name: {
												textBorderColor: '#fff'
											}
										}
									},
								},
								data: [150, 142, 140, 130, 122]
							},
							{
								name: 'T恤',
								type: 'bar',
								label: {
									normal: {
										show: false,
										position: 'top',
										distance: 15,
										align: 'left',
										verticalAlign: 'middle',
										rotate: 90,
										formatter: '{c}',
										fontSize: 12,
										rich: {
											name: {
												textBorderColor: '#fff'
											}
										}
									},
								},
								data: [98, 76, 75, 70, 40]
							},
							{
								name: '其他',
								type: 'bar',
								label: {
									normal: {
										show: false,
										position: 'top',
										distance: 15,
										align: 'left',
										verticalAlign: 'middle',
										rotate: 90,
										formatter: '{c}',
										fontSize: 12,
										rich: {
											name: {
												textBorderColor: '#fff'
											}
										}
									},
								},
								data: [82, 62, 63, 65, 30]
							}
						]
					}
				},
				chart5: {
					id: 'chart5',
					title: '试穿品类:',
					data: {
						tooltip: {},
						grid:{
							top:30,
							bottom:30
						},
						xAxis: {
							data: [ '其他','衬衫', '短裤', 'T恤', '长裤','裙子'],
							axisLabel: {
								textStyle: {
									color: '#1f9aff'
								}
							},
							axisTick: {
								show: false
							},
							axisLine: {
								show: false
							},
							z: 10
						},
						yAxis: {
							axisLine: {
								show: true,
								color: '#1f9aff'
							},
							axisTick: {
								show: false
							},
							axisLabel: {
								show:false,
								textStyle: {
									color: '#1f9aff'
								}
							},
							splitLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
						},
						dataZoom: [{
							type: 'inside'
						}],
						series: [{ // For shadow
								type: 'bar',
								itemStyle: {
									normal: {
										color: 'rgba(0,0,0,0.05)'
									}
								},
								barGap: '-100%',
								barCategoryGap: '60%',
								data: [140, 140, 140, 140, 140, 140],
								animation: false
							},
							{
								type: 'bar',
								itemStyle: {
									normal: {
										color: new this.$echarts.graphic.LinearGradient(
											0, 0, 0, 1, [{
													offset: 0,
													color: '#08a4dd'
												},
												{
													offset: 1,
													color: '#1b51ce'
												}
											]
										)
									}
								},
								data: [130, 60, 50, 28, 25, 15]
							}
						]
					}
				},
				chart6: {
					id: 'worldChart',
					title: '',
					data: {
						tooltip: {
							trigger: 'item',
							backgroundColor: 'rgba(8,92,164,0.9)',
							padding: 10,
							formatter: function(params) {
								var _date;
								var _year = new Date().getFullYear()
								var _month = new Date().getMonth() + 1
								var _day = new Date().getDate()
								_date = _year + '/' + _month + '/' + _day
								var _html;
								var _head = '<h3>' + params['name'] + ' ：' + _date + '</h3>';
								var _content = '<p>' + params['seriesName'] + ' ： ' + params['value'] + ' 台</p>';

								_html = _head + _content
								return _html;

							}
						},
						visualMap: {
							show: false,
							min: 0,
							max: 20000,
							left: 'left',
							top: 'bottom',
							text: ['高', '低'],
							calculable: true,
							inRange: {
								color: ['#79c0f1','#133478']
							}
						},
						roamController: {
							show: true,
							x: 'right',
							mapTypeControl: {
								'china': true
							}
						},
						series: [{
							name: '智能家电在线数',
							type: 'map',
							mapType: 'china',
							roam: false,
							itemStyle: {
								normal: {
									areaColor: 'rgba(23,63,128,0.5)',
									label: {
										show: false
									}
								},
								emphasis: {
									areaColor: '#ffcf4a',

									label: {
										show: true,
										color: 'white'
									},

								}
							},
							data: [{
									name: '北京',
									value: 12634
								},
								{
									name: '天津',
									value: 9561
								},
								{
									name: '上海',
									value:13256
								},
								{
									name: '重庆',
									value: 7895
								},
								{
									name: '河北',
									value: 6232
								},
								{
									name: '河南',
									value: 8545
								},
								{
									name: '云南',
									value: 4215
								},
								{
									name: '辽宁',
									value: 6252
								},
								{
									name: '黑龙江',
									value: 4215
								},
								{
									name: '湖南',
									value: 4569
								},
								{
									name: '安徽',
									value: 5662
								},
								{
									name: '山东',
									value: 9022
								},
								{
									name: '新疆',
									value: 2354
								},
								{
									name: '江苏',
									value: 10216
								},
								{
									name: '浙江',
									value: 11567
								},
								{
									name: '江西',
									value: 6325
								},
								{
									name: '湖北',
									value: 7924
								},
								{
									name: '广西',
									value: 4687
								},
								{
									name: '甘肃',
									value: 3254
								},
								{
									name: '山西',
									value: 4594
								},
								{
									name: '内蒙古',
									value: 3254
								},
								{
									name: '陕西',
									value: 4587
								},
								{
									name: '吉林',
									value: 5698
								},
								{
									name: '福建',
									value: 6324
								},
								{
									name: '贵州',
									value: 3245
								},
								{
									name: '广东',
									value: 10247
								},
								{
									name: '青海',
									value: 2354
								},
								{
									name: '西藏',
									value: 1254
								},
								{
									name: '四川',
									value: 8995
								},
								{
									name: '宁夏',
									value: 2354
								},
								{
									name: '海南',
									value: 3226
								},
								{
									name: '台湾',
									value: 4266
								},
								{
									name: '香港',
									value: 5697
								},
								{
									name: '澳门',
									value: 1235 
								}
							]
						}]
					}
				}
			}
		},
		methods: {
			convertData(data) {
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
				var that = this
				var res = [];
				for(var i = 0; i < data.length; i++) {
					var geoCoord = geoCoordMap[data[i].name];
					if(geoCoord) {
						res.push({
							name: data[i].name,
							value: geoCoord.concat(data[i].value)
						});
					}
				}
				return res;
			}
		}
	}
</script>

<style scoped lang="less">
	.second {
		width: 100%;
		height: 100%;
		background: url(../../static/img/bg.jpg) center no-repeat;
		background-size: 100% 100%;
		.left-panel {
			position: absolute;
			left: 45px;
			top: 135px;
			width: 425px;
			height: 885px;
			.numShow {
				.cont {
					.num {
						font-size: 30px;
					}
				}
			}
		}
		.middle-panel {
			width: 900px;
			height: 888px;
			position: absolute;
			left: 512px;
			top: 135px;
		}
		.right-panel {
			width: 460px;
			height: 888px;
			position: absolute;
			top: 135px;
			right: 15px;
		}
		.numShow {
			.big {}
		}
	}
</style>