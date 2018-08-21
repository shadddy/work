<template>
	<div class="third">
		<div class="left-panel">

			<chart :title="chart1.title" :code="chart1.data" :id="chart1.id"></chart>
			<chart :title="chart2.title" :code="chart2.data" :id="chart2.id"></chart>
			<chart :title="chart0.title" :code="chart0.data" :id="chart0.id"></chart>
		</div>
		<div class="middle-panel">
			<num-show v-for="item in midNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id" numChange="true" :numRange="item.numRange"></num-show>
			<chart :title="chart6.title" :code="chart6.data" :id="chart6.id" size="big"></chart>

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
					num: 406576,
					unit: "家",
					size: "big",
					numRange:[3,3]
				}, {
					id: 1,
					title: '洗护服务服装重量：',
					num: 4328,
					unit: "KG",
					size: "big",
					numRange:[0,2]
				}],
				chart1: {
					id: 'chart1',
					title: '家庭洗护色系分析:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '90%',
							center: ['50%', '50%'],
							data: [{
									value: 30,
									name: '中间色',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 26,
									name: '暖色系',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 44,
									name: '浅色系',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								}
							].sort(function(a, b) {
								return a.value - b.value;
							}),
							roseType: 'radius',
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
					title: '家庭洗护材质分析:',
					data: {
						title: {
							subtext: '单位：万/次',
							subtextStyle: {
								color: '#1f9aff'
							}
						},
						xAxis: {
							data: ['棉', '麻', '混纺', '真丝', '其他'],
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
								show: false
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
								data: [500, 500, 500, 500, 500],
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
								data: [320, 282, 391, 334, 390, 430, 310, 123]
							}
						]
					}
				},
				chart0: {
					id: 'chart0',
					title: '地区洗护频率TOP:',
					data: {
						title: {
							subtext: '单位：次/万户',
							subtextStyle: {
								color: '#1f9aff'
							}
						},
						xAxis: {
							data: ['上海', '北京', '广东', '浙江', '武汉'],
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
								show: false
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
								data: [140, 140, 140, 140, 140],
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
								data: [105, 55, 50, 27, 14]
							}
						]
					}
				},
				chart3: {
					id: 'chart3',
					title: '家庭洗护品类分析:',
					data: {
						title: {
							subtext: '单位：万',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
						},
						xAxis: {
							data: ['衬衣', '连衣裙', '短裤', '半裙', '其他'],
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
								show: false
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
								data: [140, 140, 140, 140, 140],
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
								data: [120, 105, 70, 40, 40]
							}
						]
					}
				},
				chart4: {
					id: 'chart4',
					title: '儿童身高成长分析:',
					data: {
						grid: {
							top: 20
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: ['7.09', '7.13', '7.17', '7.21', '7.25', '8.01', '8.05'],
							axisLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
							axisLabel: {
								color: '#1f9aff'
							},
							splitLine: {
								lineStyle: {
									color: '#15406f'
								}
							}

						},
						yAxis: {
							type: 'value',
							axisLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
							axisLabel: {
								color: '#1f9aff'
							},
							splitLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
							min:80,
							max:92
						},
						series: [{
							symbol: 'circle',
							data: [86, 86.5, 87, 87, 87.5, 88, 89],
							type: 'line',
							areaStyle: {
								color: 'rgba(10,157,220,0.5)'
							},
							lineStyle: {
								color: '#08a4dd'
							},
							itemStyle: {
								normal: {
									color: '#08a4dd',
									borderColor: '#08a4dd'
								}
							}
						}]

					}
				},
				chart5: {
					id: 'chart5',
					title: '儿童体重成长分析:',
					data: {
						grid: {
							top: 20
						},
						xAxis: {
							type: 'category',
							boundaryGap: false,
							data: ['7.09', '7.13', '7.17', '7.21', '7.25', '8.01', '8.05'],
							axisLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
							axisLabel: {
								color: '#1f9aff'
							},
							splitLine: {
								lineStyle: {
									color: '#15406f'
								}
							}

						},
						yAxis: {
							type: 'value',
							axisLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
							axisLabel: {
								color: '#1f9aff'
							},
							splitLine: {
								lineStyle: {
									color: '#15406f'
								}
							},
							min:11,
							max:15
							
						},
						series: [{
							symbol: 'circle',
							data: [13, 13.2, 13.4, 13.4, 13.5, 13.7, 14],
							type: 'line',
							areaStyle: {
								color: 'rgba(10,157,220,0.5)'
							},
							lineStyle: {
								color: '#08a4dd'
							},
							itemStyle: {
								normal: {
									color: '#08a4dd',
									borderColor: '#08a4dd'
								}
							}
						}]

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
								console.log(this)
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
							max: 2500,
							left: 'left',
							top: 'bottom',
							text: ['高', '低'],
							calculable: true,
							inRange: {
								color: ['#15387c', '#2a4ed4', '#3862ff']
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
							name: '网器在线数',
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
									label: {
										show: true
									}
								}
							},
							data: [{
									name: '北京',
									value: Math.round(Math.random() * 1000)
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
							]
						}, {
							name: '网器在线数2',
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
									label: {
										show: true
									}
								}
							},
							data: [{
									name: '北京',
									value: Math.round(Math.random() * 1000)
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
							]
						}]
					}
				}
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
			.chart:nth-of-type(3){
				margin-top: 30px;
			}
		}
	}
</style>