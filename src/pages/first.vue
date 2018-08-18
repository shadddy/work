<template>
	<div class="first">
		<div class="left-panel">
			<num-show v-for="item in leftNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id"></num-show>
			<chart :title="chart1.title" :code="chart1.data" :id="chart1.id"></chart>

			<chart :title="chart2.title" :code="chart2.data" :id="chart2.id"></chart>
		</div>
		<div class="middle-panel">
			<num-show v-for="item in midNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id"></num-show>
			<chart :title='chart6.title' :id="chart6.id" :code="chart6.data"></chart>
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
					title: "联盟成员总数:",
					num: '1000',
					unit: "家",
					size: "big"
				}, {
					id: 1,
					title: "服装:",
					num: '957',
					unit: "家",
					size: "small"
				}, {
					id: 2,
					title: "家纺:",
					num: '142',
					unit: "家",
					size: "small"
				}, {
					id: 3,
					title: "内衣:",
					num: '27',
					unit: "家",
					size: "small"
				}, {
					id: 4,
					title: "鞋类:",
					num: '163',
					unit: "家",
					size: "small"
				}],
				midNumList: [{
					id: 0,
					title: '网器在线数：',
					num: '155561',
					unit: "台",
					size: "big"
				}, {
					id: 1,
					title: '人机交互数：',
					num: '1698543',
					unit: "次",
					size: "big"
				}],
				chart1: {
					id: 'chart1',
					title: '网器类别占比:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '90%',
							center: ['50%', '50%'],
							data: [{
									value: 335,
									name: '洗衣机',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 310,
									name: '试衣镜',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 274,
									name: '儿童衣柜',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
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
							roseType: 'radius',
							label: {
								normal: {
									textStyle: {
										color: 'rgba(31, 154, 255, 1)'
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
					title: '品类用户分析:',
					data: {
						title: {
							subtext: '单位：万/人',
							subtextStyle: {
								color: '#1f9aff'
							}
						},
						xAxis: {
							data: ['衬衣', '西服', '内裤', '内衣', '男鞋', '女鞋', '被套', '床单'],
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
								barCategoryGap: '40%',
								data: [500, 500, 500, 500, 500, 500, 500, 500],
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
				chart3: {
					id: 'chart3',
					title: '网器使用频率 / 周:',
					data: {
						title: {
							subtext: '单位：万/人',
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
								show: false
							},

						},
						series: [{
							symbol: "none",
							data: [820, 932, 901, 934, 1290, 1330, 1320],
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
					title: '网器使用模式:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '90%',
							center: ['60%', '50%'],
							data: [{
									value: 335,
									name: '洗衣模式',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 310,
									name: '穿搭模式',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 274,
									name: '护理模式',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '衣橱模式',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '其他',
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
							roseType: 'radius',
							label: {
								normal: {
									textStyle: {
										color: 'rgba(31, 154, 255, 1)'
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
					title: '网器使用时长分布:',
					data: {
						title: {
							subtext: '单位：万/次',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
						},
						xAxis: {
							data: ['10', '20', '30', '60', '80', '120', '150'],
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
								barCategoryGap: '40%',
								data: [500, 500, 500, 500, 500, 500, 500],
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
								data: [320, 282, 391, 334, 390, 430, 310]
							}
						]
					}
				},
				chart6: {
					id: 'worldChart', 	
					title: '',
					data: {
						tooltip: {
							trigger: 'item'
						},
						
						
						
						roamController: {
							show: true,
							x: 'right',
							mapTypeControl: {
								'china': true
							}
						},
						series: [{
							name: 'iphoneX',
							type: 'map',
							mapType: 'china',
							roam: false,
							itemStyle: {
								normal: {
									label: {
										show: true
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

<style lang="less" scoped>
	.first {
		width: 100%;
		height: 100%;
		background: url(../../static/img/bg.jpg) center no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		.left-panel {
			position: absolute;
			left: 45px;
			top: 135px;
			width: 425px;
			height: 885px;
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
	}
</style>