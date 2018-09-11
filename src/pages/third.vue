<template>
	<div class="third">
		<div class="left-panel">

			<chart :title="chart1.title" :code="chart1.data" :id="chart1.id"></chart>
			<chart :title="chart2.title" :code="chart2.data" :id="chart2.id"></chart>
			<chart :title="chart0.title" :code="chart0.data" :id="chart0.id"></chart>
		</div>
		<div class="middle-panel">
			<num-show v-for="item in midNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id" :numChange="item.numChange" :numRange="item.numRange"></num-show>
			<chart :title="chart6.title" :code="chart6.data" :id="chart6.id" size="big" myType="map"></chart>

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
				midNumList: [{
					id: 0,
					title: '智慧家庭数：',
					num: 5241970 * 2,
					unit: "家",
					size: "supBig",
					numRange: [3, 3],
					numChange: true
				}, {
					id: 1,
					title: '洗护服务服装重量：',
					num: 928147667,
					unit: "KG",
					size: "supBig",
					numRange: [0, 2],
					numChange: true
				}],
				chart1: {
					id: 'chart1',
					title: '家庭洗护色系:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '80%',
							center: ['50%', '50%'],
							data: [{
									value: 15,
									name: '中间色',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 22,
									name: '暖色',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 18,
									name: '冷色',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 15,
									name: '杂色',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 17,
									name: '图案',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 13,
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

							label: {
								normal: {
									fontSize: this.CONFIG.PIEFONTSIZE,
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
					title: '家庭洗护材质:',
					data: {
						tooltip: {},
						title: {

							subtextStyle: {
								color: '#1f9aff'
							}
						},
						grid: {
							top: '8%'
						},
						xAxis: {
							data: ['棉','化纤','混纺', '麻', '毛','其他'],
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
								show: false,
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
								data: [150, 150, 150, 150, 150, 150],
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
								data: [120, 110, 70, 65, 40, 30]
							}
						]
					}
				},
				chart0: {
					id: 'chart0',
					title: '家庭洗护类别:',
					data: {
						tooltip: {},
						title: {
							subtextStyle: {
								color: '#1f9aff'
							}
						},
						grid: {
							top: '8%'
						},
						xAxis: {
							data: ['T恤', '裙子', '裤子', '衬衣', '内衣'],
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
								color: '#15406f'
							},
							axisTick: {
								show: false
							},
							splitLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
							axisLabel: {
								show: false,
								textStyle: {
									color: '#1f9aff'
								}
							}
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
								data: [120, 120, 120, 120, 120],
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
								data: [110, 90, 60, 55, 29]
							}
						]
					}
				},
				chart3: {
					id: 'chart3',
					title: '家庭洗护品类:',
					data: {
						tooltip: {},
						title: {
							subtext: '单位：万件',
							subtextStyle: {
								color: '#1f9aff',
								
							},
							right: 0
						},
						grid: {
							top: '15%',
							left:'12%'
						},
						xAxis: {
							data: ['男装', '女装','童装', '配饰','家纺' , '其他' ],
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
								lineStyle:{
									color: '#15406f'
								}
							},
							axisTick: {
								show: false
							},
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
							max:20000
						
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
								data: [68756457, 135647897,174366576, 50665675, 40665675 , 30665675 ].map(function(item){
									return Math.round(item/10000)
								})
							}
						]
					}
				},
				chart4: {
					id: 'chart4',
					title: '家庭洗护规格:',
					data: {
						tooltip: {},
						grid: {
							top: '15%',
							left:'12%'
						},
						title: {
							subtext: '单位：万件',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
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
								show: true,
								lineStyle:{
									color: '#15406f'
								}
							},
							axisTick: {
								show: false
							},
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
							max:20000
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
								data: [0.3, 0.09, 0.11, 0.15, 0.14, 0.15, 0.12, 0.08].map(function(item){
									return Math.round(item*(536844561/10000))
								})
							}
						]
					}
				},
				chart5: {
					id: 'chart5',
					title: '家庭洗护人群:',
					data: {
						tooltip: {},
						grid: {
							top: '15%'
						},
						title: {
							subtext: '单位：万人',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
						},
						xAxis: {
							data: ['婴童', '儿童', '青少年','青年', '中年', '老年'],
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
								lineStyle:{
									color: '#15406f'
								}
							},
							axisTick: {
								show: false
							},
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
							max:3000
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
								data: [ 0.188, 0.199,0.12,0.21,0.216,0.067].map(function(item){
									return item*6500
								})
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
								var _content = '<p>' + params['seriesName'] + ' ： ' + params['value'] + ' 万件</p>';

								_html = _head + _content
								return _html;

							}
						},
						visualMap: {
							show: false,
							min: 0,
							max: 10000,
							left: 'left',
							top: 'bottom',
							text: ['高', '低'],
							calculable: true,
							inRange: {
								color: ['#79c0f1', '#133478']
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
							name: '服装件数',
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
									value: 123,
								},
								{
									name: '天津',
									value: 413
								},
								{
									name: '上海',
									value: 762
								},
								{
									name: '重庆',
									value: 209
								},
								{
									name: '河北',
									value: 896
								},
								{
									name: '河南',
									value: 2716
								},
								{
									name: '云南',
									value: 37
								},
								{
									name: '辽宁',
									value: 966
								},
								{
									name: '黑龙江',
									value: 64
								},
								{
									name: '湖南',
									value: 563
								},
								{
									name: '安徽',
									value: 1975
								},
								{
									name: '山东',
									value: 5384
								},
								{
									name: '新疆',
									value: 21
								},
								{
									name: '江苏',
									value: 8449
								},
								{
									name: '浙江',
									value: 6957
								},
								{
									name: '江西',
									value: 2072
								},
								{
									name: '湖北',
									value: 1819
								},
								{
									name: '广西',
									value: 461
								},
								{
									name: '甘肃',
									value: 21
								},
								{
									name: '山西',
									value: 32
								},
								{
									name: '内蒙古',
									value: 53
								},
								{
									name: '陕西',
									value: 37
								},
								{
									name: '吉林',
									value: 450
								},
								{
									name: '福建',
									value: 6952
								},
								{
									name: '贵州',
									value: 123
								},
								{
									name: '广东',
									value: 11751
								},
								{
									name: '青海',
									value: 10
								},
								{
									name: '四川',
									value: 327
								},
								{
									name: '宁夏',
									value: 21
								},
								{
									name: '西藏',
									value: 1
								},
								{
									name: '海南',
									value: 1
								},
								{
									name: '台湾',
									value: 1
								},
								{
									name: '香港',
									value: 1
								},
								{
									name: '澳门',
									value: 1
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
	.third {
		width: 100%;
		height: 100%;
		background: url(../../static/img/bg2.jpg) center no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		.left-panel {
			position: absolute;
			left: 45px;
			top: 135px;
			width: 425px;
			height: 885px;
			.chart:nth-of-type(2) {
				margin-top: 40px;
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
			.chart:nth-of-type(2) {
				margin-top: 30px;
			}
			.chart:nth-of-type(3) {
				margin-top: 30px;
			}
		}
	}
</style>