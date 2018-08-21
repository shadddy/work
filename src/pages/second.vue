<template>
	<div class="second">
		<div class="left-panel">
			<num-show v-for="item in leftNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id"></num-show>
			<chart :title="chart1.title" :code="chart1.data" :id="chart1.id"></chart>
			<chart :title="chart2.title" :code="chart2.data" :id="chart2.id"></chart>
		</div>
		<div class="middle-panel">
			<num-show v-for="item in midNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id" numChange="true" :numRange="item.numRange" :random="item.random"></num-show>
			<chart :title='chart6.title' :id="chart6.id" :code="chart6.data" size="big"></chart>
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
					num: 376034,
					unit: '家 ',
					size: 'middle'
				}, {
					id: 2,
					title: '服务人次/天:',
					num: 43981,
					unit: '次',
					size: 'middle'
				}],
				midNumList: [{
					id: 0,
					title: '门店智慧家电在线数：',
					num: 155561,
					unit: "台",
					size: "big",
					numRange:[0,5],
					random:true
				}, {
					id: 1,
					title: '人机交互数：',
					num: 1698543,
					unit: "次",
					size: "big",
					numRange:[5,5],
					random:false
				}],
				chart1: {
					id: 'chart1',
					title: '服装服务品类分析:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '80%',
							center: ['50%', '50%'],
							data: [{
									value: 20,
									name: '西服',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 17,
									name: '礼服',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 40,
									name: '丝绸',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 16,
									name: '真丝',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 7,
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
					title: '尺码分析:',
					data: {
						title: {
							subtext: '单位：万/人',
							subtextStyle: {
								color: '#1f9aff'
							}
						},
						xAxis: {
							data: ['110', '115-150', '155-160', '165', '170', '175', '180', '180以上'],
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
					title: '库存颜色分析:',
					data: {
						title: {
							subtext: '单位：万/件',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
						},
						xAxis: {
							data: ['白', '黑', '紫', '绿', '其他'],
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
								data: [130, 105, 50, 25, 15]
							}
						]
					}
				},
				chart4: {
					id: 'chart4',
					title: '库存尺码分析:',
					data: {
						title: {
							subtext: '单位：万/件',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
						},
						xAxis: {
							data: ['110', '115-150', '155-160', '165', '170', '175', '180', '180以上'],
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
								data: [80, 100, 120, 180, 190, 160, 135, 85]
							}
						]
					}
				},
				chart5: {
					id: 'chart5',
					title: '试穿品类分析:',
					data: {
						title: {
							subtext: '单位：万/次',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
						},
						xAxis: {
							data: ['连衣裙', '衬衫', '短裤', 'T恤', '长裤', '其他'],
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
			right: 45px;
		}
		.numShow {
			.big {}
		}
	}
</style>