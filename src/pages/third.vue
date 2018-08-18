<template>
	<div class="third">
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
					title: "网器在线数:",
					num: '55132',
					unit: "台",
					size: "big"
				}, {
					id: 1,
					title: "用户交互量:",
					num: '89913',
					unit: "次",
					size: "small"
				}, {
					id: 2,
					title: "设计师数量:",
					num: '1653',
					unit: "人",
					size: "small"
				}, {
					id: 3,
					title: "创意量:",
					num: '6515',
					unit: "家",
					size: "small"
				}, {
					id: 4,
					title: "新品量:",
					num: '514',
					unit: "家",
					size: "small"
				}],
				midNumList: [{
					id: 0,
					title: '家庭洗护次数：',
					num: '155561',
					unit: "次",
					size: "big"
				}, {
					id: 1,
					title: '家庭累积洗护重量：',
					num: '1698543',
					unit: "KG",
					size: "big"
				}],
				chart1: {
					id: 'chart1',
					title: '品牌分析:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '90%',
							center: ['50%', '50%'],
							data: [{
									value: 335,
									name: '海澜之家',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 310,
									name: '英式',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 274,
									name: '报喜鸟',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '雅戈尔',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '柒牌',
									itemStyle: {
										normal: {
											color: '#716cea',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '七匹狼',
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
				chart2: {
					id: 'chart2',
					title: '家庭洗护材质分析:',
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
					title: '家庭款式分析:',
					data: {
						tooltip: {},
						series: [{
							type: 'pie',
							radius: '90%',
							center: ['60%', '50%'],
							data: [{
									value: 335,
									name: '商务系列',
									itemStyle: {
										normal: {
											color: '#3862ff',
											shadowBlur: 30,
										}
									}
								},
								{
									value: 310,
									name: '休闲系列',
									itemStyle: {
										normal: {
											color: '#2a4ed4',
											shadowBlur: 30
										}
									}
								},
								{
									value: 274,
									name: '晚装系列',
									itemStyle: {
										normal: {
											color: '#272bdd',
											shadowBlur: 30
										}
									}
								},
								{
									value: 235,
									name: '运动系列',
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
				chart4: {
					id: 'chart4',
					title: '适用对象分析:',
					data:{
						title: {
							subtext: '单位：万',
							subtextStyle: {
								color: '#1f9aff'
							},
							right:0
						},
						xAxis: {
							data: ['青年', '青少年', '中年', '老年', '儿童', '其他'],
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
								data: [320, 282, 391, 334, 390, 430]
							}
						]
					}
				},
				chart5: {
					id: 'chart5',
					title: '地区洗护频率TOP:',
					data:{
						title: {
							subtext: '单位：次/万户',
							subtextStyle: {
								color: '#1f9aff'
							},
							right:0
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
								data: [320, 282, 391, 334, 390]
							}
						]
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