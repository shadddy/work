<template>
	<div class="first">
		<div class="left-panel">
			<!--<num-show v-for="item in leftNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id"></num-show>-->
			<chart :title="chart0.title" :code="chart0.data" :id="chart0.id"></chart>
			<chart :title="chart1.title" :code="chart1.data" :id="chart1.id"></chart>
			<chart :title="chart2.title" :code="chart2.data" :id="chart2.id"></chart>
		</div>
		<div class="middle-panel">
			<!--<keep-alive>
				<num-show :num="midNumList[0].num" :title="midNumList[0].title" :unit="midNumList[0].unit" :size="midNumList[0].size" :key="midNumList[0].id" :numChange="midNumList[0].numChange" :numRange="midNumList[0].numRange"></num-show>
			</keep-alive>-->
			<!--<num-show :num="midNumList[0].num" :title="midNumList[0].title" :unit="midNumList[0].unit" :size="midNumList[0].size" :key="midNumList[0].id" numChange="true" :numRange="midNumList[0].numRange"></num-show>-->
			<num-show v-for="item in midNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id" :numChange="item.numChange" :numRange="item.numRange"></num-show>
			<chart :title='chart6.title' :id="chart6.id" :code="chart6 .data" size="big" myType="map"></chart>
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
//				leftNumList: [{
//					id: 0,
//					title: "联盟成员总数:",
//					num: 2320,
//					unit: "家",
//					size: "big"
//				}, {
//					id: 1,
//					title: "服装:",
//					num: 1557,
//					unit: "家",
//					size: "small"
//				}, {
//					id: 2,
//					title: "家纺:",
//					num: 280,
//					unit: "家",
//					size: "small"
//				}, {
//					id: 3,
//					title: "内衣:",
//					num: 69,
//					unit: "家",
//					size: "small"
//				}, {
//					id: 4,
//					title: "鞋类:",
//					num: 414,
//					unit: "家",
//					size: "small"
//				}],
				midNumList: [{
					id: 0,
					title: '智能家电用户数：',
					num: 2813221,
					unit: "人",
					size: "supBig",
					numRange: [3, 3],
					numChange:true
				}, {
					id: 1,
					title: '人机交互数：',
					num: 68592458,
					unit: "次",
					size: "supBig",
					numRange: [5, 5],
					numChange:true
				}],
				chart0:{
					id:'chart0',
					title:'智能家电销售Top:',
					data:{
						tooltip: {},
						title: {
							subtextStyle: {
								color: '#1f9aff'
							}
						},
						grid:{
							top:'8%',
							bottom:'10%'
						},
						xAxis: {
							data: ['四川', '江苏', '山东', '河南', '辽宁','广东','北京','湖南'],
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
								color:'#15406f'
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
								show:false,
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
								data: [180000, 180000, 180000, 180000, 180000,180000,180000,180000],
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
								data: [153631, 148571, 133140, 118730, 85516,78736,74413,63002]
							}
						]
					}
				},
				chart1: {
					id: 'chart1',
					title: '智能家电类别占比:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '70%',
							center: ['50%', '50%'],
							data: [{
									value: 41,
									name: '单滚筒',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 14,
									name: '双滚筒',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 15,
									name: '单波轮',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 14,
									name: '双波轮',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 6,
									name: '试衣镜',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 7,
									name: '儿童衣柜',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 3,
									name: '衣物护理柜',
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
					title: '品类用户分析TOP:',
					data: {
						tooltip: {},
						title: {
							subtextStyle: {
								color: '#1f9aff'
							}
						},
						grid:{
							top:'5%'
						},
						xAxis: {
							data: ['T恤', '连衣裙', '裤子', '衬衣', '西装'],
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
								color:'#15406f'
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
								show:false,
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
					title: '智能家电使用频率 / 周:',
					data: {
						tooltip: {},
						title: {
							subtext: '单位：万次',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: ['1', '2', '3', '4', '5', '6', '7'],
							axisLabel: {
								textStyle: {
									color: '#1f9aff'
								}
							},
							axisLine: {
								show: false
							},
						},
						yAxis: {
							type: 'value',
							axisLabel: {
								show: true
							},
							axisLabel: {
								textStyle: {
									color: '#1f9aff'
								}
							},

						},
						series: [{
							symbol: "none",
							data: [40, 53, 90, 72, 119, 140, 132],
							type: 'line',
							areaStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: 'rgba(233,167,48,0.8)'
											},
											{
												offset: 1,
												color: 'rgba(233,167,48,0.1)'
											}
										]
									)
								}
							},
							lineStyle: {
								normal: {
									color: '#fb9f1f'
								}
							}
						}]
					}

				},
				chart4: {
					id: 'chart4',
					title: '智能家电网器使用模式:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '70%',
							center: ['60%', '50%'],
							data: [{
									value: 60.,
									name: '速洗/快速洗',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 9,
									name: '消毒洗',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 10,
									name: '单脱水',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 10,
									name: '单漂洗',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 3,
									name: '杀菌模式',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 8,
									name: '烘干',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
							].sort(function(a, b) {
								return a.value - b.value;
							}),
							roseType: false,
							label: {
								normal: {
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
				chart5: {
					id: 'chart5',
					title: '智能洗衣机时长分布:',
					data: {
						title: {
							subtext: '单位：万次',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
						},
						tooltip: {},
						grid: {
							bottom: 20
						},
						xAxis: {
							data: ['10min','20min', '40min', '60min', '80min', '100min', '120min'],
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
								color:'#15406f'
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
								show:false,
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
								data: [900000, 900000, 900000, 900000, 900000, 900000, 900000,900000],
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
								data: [386013, 871714, 405371, 332098, 346041, 126313, 45285]
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
							min: 10000,
							max: 140000,
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
							name: '智慧家电绑定数',
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
									value: 126340
								},
								{
									name: '天津',
									value: 95613
								},
								{
									name: '上海',
									value:132564
								},
								{
									name: '重庆',
									value: 78965
								},
								{
									name: '河北',
									value: 62132
								},
								{
									name: '河南',
									value: 86545
								},
								{
									name: '云南',
									value: 43215
								},
								{
									name: '辽宁',
									value: 62542
								},
								{
									name: '黑龙江',
									value: 42154
								},
								{
									name: '湖南',
									value: 45698
								},
								{
									name: '安徽',
									value: 56622
								},
								{
									name: '山东',
									value: 90222
								},
								{
									name: '新疆',
									value: 23541
								},
								{
									name: '江苏',
									value: 102126
								},
								{
									name: '浙江',
									value: 115687
								},
								{
									name: '江西',
									value: 63254
								},
								{
									name: '湖北',
									value: 79214
								},
								{
									name: '广西',
									value: 46587
								},
								{
									name: '甘肃',
									value: 32554
								},
								{
									name: '山西',
									value: 45974
								},
								{
									name: '内蒙古',
									value: 32154
								},
								{
									name: '陕西',
									value: 45687
								},
								{
									name: '吉林',
									value: 53698
								},
								{
									name: '福建',
									value: 63214
								},
								{
									name: '贵州',
									value: 32245
								},
								{
									name: '广东',
									value: 102547
								},
								{
									name: '青海',
									value: 23654
								},
								{
									name: '西藏',
									value: 10254
								},
								{
									name: '四川',
									value: 89954
								},
								{
									name: '宁夏',
									value: 23545
								},
								{
									name: '海南',
									value: 32267
								},
								{
									name: '台湾',
									value: 42667
								},
								{
									name: '香港',
									value: 56978
								},
								{
									name: '澳门',
									value: 12354 
								}
							]
						}]
					}
				},
				chart7: {
					id: 'worldChart2',
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
								var _value = params['value'].toString().split(',')
								var _content = '<p>' + params['seriesName'] + ' ： ' + _value[2] + ' 台</p>';

								_html = _head + _content
								return _html;

							}
						},
						visualMap: {
							show: false,
							type: 'continuous',
							min: 0,
							max: 1000,
							dimension:0,
							calculable: false,
							inRange: {
								color: ['#3862ff','#2a4ed4','#272bdd']
							},
							textStyle: {
								color: '#fff'
							}
						},
						geo: {
							map: 'china',
							label: {
								emphasis: {
									show: false
								}
							},
							itemStyle: {
								normal: {
									areaColor: '#15387c',
									borderColor: '#111'
								},
								emphasis: {
									areaColor: '#2a333d'
								}
							}
						},
						series: [{
							name: '智慧家电绑定数',
							type: 'effectScatter',
							coordinateSystem: 'geo',
							showEffectOn:'emphasis',
							rippleEffect:{
								scale:5
							},
							data: this.convertData([{
									name: '北京',
									value: Math.round(Math.random() * 1000),
								},
								{
									name: '天津',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '上海',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '重庆',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '河北',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '河南',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '云南',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '辽宁',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '黑龙江',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '湖南',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '安徽',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '山东',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '新疆',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '江苏',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '浙江',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '江西',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '湖北',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '广西',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '甘肃',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '山西',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '内蒙古',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '陕西',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '吉林',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '福建',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '贵州',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '广东',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '青海',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '西藏',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '四川',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '宁夏',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '海南',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '台湾',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '香港',
									value: Math.round(Math.random() * 1000)
								},
								{
									name: '澳门',
									value: Math.round(Math.random() * 1000)
								}
							]),
							symbolSize:15,
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: false
								}
							},
							itemStyle: {
								normal:{
//									opacity:0,
								},
								emphasis: {
									
									borderColor: '#fff',
									borderWidth: 1
								}
							}
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
		},
		mounted() {

		}
	}
</script>

<style lang="less" scoped>
	.first {
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
			.chart:nth-of-type(2){
				margin-top: 30px;
			}
			.chart:nth-of-type(3){
				margin-top: 30px;
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
		}
	}
</style>