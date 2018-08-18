<template>
	<div class="second">
		<div class="left-panel">
			<num-show v-for="item in leftNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id"></num-show>
			<chart :title="chart1.title" :code="chart1.data" :id="chart1.id"></chart>
			<chart :title="chart2.title" :code="chart2.data" :id="chart2.id"></chart>
		</div>
		<div class="middle-panel">
			<num-show v-for="item in midNumList" :num="item.num" :title="item.title" :unit="item.unit" :size="item.size" :key="item.id"></num-show>
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
					num: '264',
					unit: '家',
					size: 'big'
				}, {
					id: 1,
					title: '服务用户数:',
					num: '46465',
					unit: '家 ',
					size: 'middle'
				}, {
					id: 2,
					title: '服务人次/天:',
					num: '6524',
					unit: '次',
					size: 'middle'
				}],
				midNumList: [{
					id: 0,
					title: '门店网器在线数：',
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
					title: '服务品类分析:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '90%',
							center: ['50%', '50%'],
							data: [{
									value: 335,
									name: '童装',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 310,
									name: '外套',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 274,
									name: '裙子',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '衬衫',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 200,
									name: '裤子',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 175,
									name: '内衣',
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
					title: '尺码分析:',
					data: {
						title: {
							subtext: '单位：万/人',
							subtextStyle: {
								color: '#1f9aff'
							}
						},
						xAxis: {
							data: ['185', '170', '175', '180', '185', '其他'],
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
								data: [500, 500, 500, 500, 500, 500],
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
								data: [320, 282, 391, 334, 390, 430]
							}
						]
					}
				},
				chart3: {
					id: 'chart3',
					title: '儿童生长曲线:',
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
								show: true,
								textStyle:{
									color:'#1f9aff'
								}
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
					title: '门店使用模式:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '90%',
							center: ['60%', '50%'],
							data: [{
									value: 335,
									name: '速洗/快速洗',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 310,
									name: '单脱水',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 274,
									name: '烘干',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '杀菌模式',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '混合',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '单漂洗',
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
				chart5: {
					id: 'chart5',
					title: '材质分析:',
					data: {
						title: {
							subtext: '单位：万/次',
							subtextStyle: {
								color: '#1f9aff'
							},
							right: 0
						},
						xAxis: {
							data: ['棉麻', '涤纶', '牛仔', '纯棉', '皮革', '丝绸', '其他'],
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