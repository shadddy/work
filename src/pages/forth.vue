<template>
	<div class="forth">
		<div class="left_panel">
			<num-show num='3151' title="服装设计领域设计师数量：" unit="人"></num-show>
			<chart :title="chart1.title" :code="chart1.data" :id="chart1.id" size="big"></chart>
		</div>
		<div class="right_panel">
			<chart2 :title="chart2.title" :code="chart2.data" :id="chart2.id"></chart2>
			<chart2 :title="chart3.title" :code="chart3.data" :id="chart3.id"></chart2>
			<chart2 :title="chart4.title" :code="chart4.data" :id="chart4.id"></chart2>
			<chart2 :title="chart5.title" :code="chart5.data" :id="chart5.id"></chart2>
			<chart2 :title="chart6.title" :code="chart6.data" :id="chart6.id"></chart2>
			<chart2 :title="chart7.title" :code="chart7.data" :id="chart7.id"></chart2>
			<chart2 :title="chart8.title" :code="chart8.data" :id="chart8.id"></chart2>
			<chart2 :title="chart9.title" :code="chart9.data" :id="chart9.id"></chart2>
			<chart2 :title="chart10.title" :code="chart10.data" :id="chart10.id"></chart2>
		</div>
	</div>
</template>

<script>
	import numShow from '../components/numShow'
	import chart from '../components/chart'
	import chart2 from '../components/chart2'
	export default {
		components: {
			numShow,
			chart,
			chart2
		},
		data() {
			return {
				chart1: {
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
						}]
					}
				},
				chart2: {
					id: 'chart2',
					title: '帖子转化创意数',
					data: {
						tooltip: {
							trigger: 'item',
							formatter: "{a} <br/>{b} : {c} ({d}%)"
						},
						color: [new this.$echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0,
									color: '#4c77f3'
								},
								{
									offset: 0.5,
									color: '#635bcc'
								},
								{
									offset: 1,
									color: '#813699'
								}
							]
						), '#808088'],
						calculable: true,
						graphic: {
							type: 'text',
							left: 'center',
							top: 115,
							style: {
								text: '11000个',
								fontSize: 20,
								fill: '#fff'

							}
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['50%', '70%'],
							center: ['50%', "50%"],
							itemStyle: {
								normal: {
									label: {
										show: false,
										formatter: '{c}',
										color: 'white',
										fontSize: 14
									},
									labelLine: {
										show: false,
										length: 1
									}
								},
								emphasis: {
									label: {
										show: true,
										position: 'center',
										textStyle: {
											fontSize: '14',
											fontWeight: 'bold'
										}
									}
								},
								borderWidth: 10,
								borderColor: "red"
							},
							data: [{
								value: 304,
								name: 'COMFORT'
							}, {
								value: 127,
								name: 'OFFLINE'
							}]
						}]
					}
				},
				chart3: {
					id: 'chart3',
					title: '创意转化作品数',
					data: {
						tooltip: {
							trigger: 'item',
							formatter: "{a} <br/>{b} : {c} ({d}%)"
						},
						color: [new this.$echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0,
									color: '#16739f'
								},
								{
									offset: 0.5,
									color: '#2779b4'
								},
								{
									offset: 1,
									color: '#4985df'
								}
							]
						), '#808088'],
						calculable: true,
						graphic: {
							type: 'text',
							left: 'center',
							top: 115,
							style: {
								text: '3000个',
								fontSize: 20,
								fill: '#fff'

							}
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['50%', '70%'],
							center: ['50%', "50%"],
							itemStyle: {
								normal: {
									label: {
										show: false,
										formatter: '{c}',
										color: 'white',
										fontSize: 14
									},
									labelLine: {
										show: false,
										length: 1
									}
								},
								emphasis: {
									label: {
										show: true,
										position: 'center',
										textStyle: {
											fontSize: '14',
											fontWeight: 'bold'
										}
									}
								},
								borderWidth: 10,
								borderColor: "red"
							},
							data: [{
								value: 304,
								name: 'COMFORT'
							}, {
								value: 127,
								name: 'OFFLINE'
							}]
						}]
					}
				},
				chart4: {
					id: 'chart4',
					title: '作品转化商品数',
					data: {
						tooltip: {
							trigger: 'item',
							formatter: "{a} <br/>{b} : {c} ({d}%)"
						},
						color: [new this.$echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0,
									color: '#4f4099'
								},
								{
									offset: 0.5,
									color: '#4d5bb4'
								},
								{
									offset: 1,
									color: '#4a84dd'
								}
							]
						), '#808088'],
						calculable: true,
						graphic: {
							type: 'text',
							left: 'center',
							top: 115,
							style: {
								text: '65个',
								fontSize: 20,
								fill: '#fff'

							}
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['50%', '70%'],
							center: ['50%', "50%"],
							itemStyle: {
								normal: {
									label: {
										show: false,
										formatter: '{c}',
										color: 'white',
										fontSize: 14
									},
									labelLine: {
										show: false,
										length: 1
									}
								},
								emphasis: {
									label: {
										show: true,
										position: 'center',
										textStyle: {
											fontSize: '14',
											fontWeight: 'bold'
										}
									}
								},
								borderWidth: 10,
								borderColor: "red"
							},
							data: [{
								value: 304,
								name: 'COMFORT'
							}, {
								value: 127,
								name: 'OFFLINE'
							}]
						}]
					}
				},
				chart5: {
					id: 'chart5',
					title: '帖子发布数',
					data: {
						tooltip: {
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							top:'10%',
							containLabel: true
						},
						xAxis: [{
							type: 'category',
							data: ['母婴小组', '时尚小组', '中国风小组'],
							axisTick: {
								alignWithLabel: true
							},
							axisLabel: {
								show:false,
								color: '#72beec'
							},
							axisLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							splitLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							axisTick: {
								show: false
							}
						}],
						yAxis: [{
							type: 'value',
							axisLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							axisLabel: {
								show: false
							},
							splitLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							axisTick: {
								show: false
							},
							max: 30000
						}],
						series: [{
							name: '帖子发布数',
							type: 'bar',
							barWidth: '60%',
							data: [23655, 18655, 20655],
							label: {
								formatter:function(params){
									var _html=params['name']+"\n"+params['value']
									return _html
									
								},
								show: true,
								position: 'top',
								textStyle: {
									color: '#72beec'
								}
							},
							itemStyle: {
								normal: {
									color: function(params) {
										var colorList = ['#3587e4', '#7046b7', '#2b8877']
										return colorList[params.dataIndex]
									}

								}
							}
						}],

					}

				},
				chart6: {
					id: 'chart6',
					title: '创意发布数',
					data: {
						tooltip: {
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						grid: {
							left: '10%',
							right: '15%',
							bottom: '3%',
							top:'10%',
							containLabel: true
						},
						xAxis: [{
							type: 'category',
							data: ['平面设计', '花型设计'],
							axisTick: {
								alignWithLabel: true
							},
							axisLabel: {
								show:false,
								color: '#72beec'
							},
							axisLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							splitLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							axisTick: {
								show: false
							}
						}],
						yAxis: [{
							type: 'value',
							axisLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							axisLabel: {
								show: false
							},
							splitLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							axisTick: {
								show: false
							},
							max: 10000
						}],
						series: [{
							name: '创意发布数',
							type: 'bar',
							barWidth: '50%',
							data: [6750, 4250],
							label: {
								formatter:function(params){
									var _html=params['name']+"\n"+params['value']
									return _html
									
								},
								show: true,
								position: 'top',
								textStyle: {
									color: '#72beec'
								}
							},
							itemStyle: {
								normal: {
									color: function(params) {
										var colorList = ['#3587e4', '#7046b7', '#2b8877']
										return colorList[params.dataIndex]
									}

								}
							}
						}],

					}
				},
				chart7: {
					id: 'chart7',
					title: '作品发布数',
					data: {
						color: ['#3587e4', '#7046b7', '#2b8877'],
						tooltip: {
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							}
						},
						grid: {
							left: '10%',
							right: '15%',
							bottom: '3%',
							top:'10%',
							containLabel: true
						},
						xAxis: [{
							type: 'category',
							data: ['平面设计', '花型设计'],
							axisTick: {
								alignWithLabel: true
							},
							axisLabel: {
								show:false,
								color: '#72beec'
							},
							axisLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							splitLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							axisTick: {
								show: false
							}
						}],
						yAxis: [{
							type: 'value',
							axisLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							axisLabel: {
								show: false
							},
							splitLine: {
								lineStyle: {
									color: '#133a66'
								}
							},
							axisTick: {
								show: false
							},
							max: 2400
						}],
						series: [{ 
							name: '作品发布数',
							type: 'bar',
							barWidth: '50%',
							data: [1320, 1680],
							label: {
								formatter:function(params){
									var _html=params['name']+"\n"+params['value']
									return _html
									
								},
								show: true,
								position: 'top',
								textStyle: {
									color: '#72beec'
								}
							},
							itemStyle: {
								normal: {
									color: function(params) {
										var colorList = ['#3587e4', '#7046b7', '#2b8877']
										return colorList[params.dataIndex]
									}

								}
							}
						}],

					}
				},
				chart8: {
					id: 'chart8',
					title: '帖子转化率',
					data: {
						tooltip: {
							formatter: "{a} <br/>{b} : {c}%"
						},
						grid:{
							top:100
						},
						series: [{
							name: '业务指标',
							type: 'gauge',
							radius: '75%',
							startAngle: 180,
							center : ['50%', '80%'],
							endAngle: 0,
							splitNumber: 2,
							axisTick: {
								show: false
							},
							axisLabel: {
								show: true,
								color: '#fff',
								distance:-30,
								formatter:'{value}%'
							},
							splitLine: {
								length: 8,
								lineStyle: {
									width: 1
								}
							},
							axisLine: {
								lineStyle: {
									width: 24,
									color: [
										[0.5, new this.$echarts.graphic.LinearGradient(
											0, 0, 0, 1, [{
													offset: 0,
													color: '#4e76f0'
												},
												{
													offset: 1,
													color: '#7e399d'
												}
											]
										)],
										[1, '#4e76f0']
									]
								},

							},
							data: [{
								value: 60,
								name: ''
							}],
							pointer: {
								width: 2,
								length: '60%'
							},
							detail: {
								color: '#fff',
								fontSize: 16,
								formatter:'{value}%',
								offsetCenter:[0,"-20%"],
								show:false
							},
							itemStyle: {
								color: new this.$echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
											offset: 0,
											color: '#05509a'
										}, {
											offset: 0.6,
											color: '#05509a'
										},
										{
											offset: 1,
											color: '#d2e1e3'
										}
									]
								),
								shadowColor: '#073a75',
								shadowBlur: 10
							}
						}]
					}
				},
				chart9: {
					id: 'chart9',
					title: '创意转化率',
					data: {
						tooltip: {
							formatter: "{a} <br/>{b} : {c}%"
						},
						grid:{
							top:100
						},
						series: [{
							name: '业务指标',
							type: 'gauge',
							radius: '75%',
							startAngle: 180,
							center : ['50%', '80%'],
							endAngle: 0,
							splitNumber: 2,
							axisTick: {
								show: false
							},
							axisLabel: {
								show: true,
								color: '#fff',
								distance:-30,
								formatter:'{value}%'
							},
							splitLine: {
								length: 8,
								lineStyle: {
									width: 1
								}
							},
							axisLine: {
								lineStyle: {
									width: 24,
									color: [
										[0.5, new this.$echarts.graphic.LinearGradient(
											0, 0, 0, 1, [{
													offset: 0,
													color: '#0d4678'
												},
												{
													offset: 1,
													color: '#2a509b'
												}
											]
										)],
										[1, '#0d4678']
									]
								},

							},
							data: [{
								value: 60,
								name: ''
							}],
							pointer: {
								width: 2,
								length: '60%'
							},
							detail: {
								color: '#fff',
								fontSize: 16,
								formatter:'{value}%',
								offsetCenter:[0,"-20%"],
								show:false
							},
							itemStyle: {
								color: new this.$echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
											offset: 0,
											color: '#05509a'
										}, {
											offset: 0.6,
											color: '#05509a'
										},
										{
											offset: 1,
											color: '#d2e1e3'
										}
									]
								),
								shadowColor: '#073a75',
								shadowBlur: 10
							}
						}]
					}
				},
				chart10: {
					id: 'chart10',
					title: '作品转化率',
					data: {
						tooltip: {
							formatter: "{a} <br/>{b} : {c}%"
						},
						grid:{
							top:100
						},
						series: [{
							name: '业务指标',
							type: 'gauge',
							radius: '75%',
							startAngle: 180,
							center : ['50%', '80%'],
							endAngle: 0,
							splitNumber: 2,
							axisTick: {
								show: false
							},
							axisLabel: {
								show: true,
								color: '#fff',
								distance:-30,
								formatter:'{value}%'
							},
							splitLine: {
								length: 8,
								lineStyle: {
									width: 1
								}
							},
							axisLine: {
								lineStyle: {
									width: 24,
									color: [
										[0.5, new this.$echarts.graphic.LinearGradient(
											0, 0, 0, 1, [{
													offset: 0,
													color: '#2f2a74'
												},
												{
													offset: 1,
													color: '#2d509f'
												}
											]
										)],
										[1, '#2f2875']
									]
								},

							},
							data: [{
								value: 60,
								name: ''
							}],
							pointer: {
								width: 2,
								length: '60%'
							},
							detail: {
								color: '#fff',
								fontSize: 16,
								formatter:'{value}%',
								offsetCenter:[0,"-20%"],
								show:false
							},
							itemStyle: {
								color: new this.$echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
											offset: 0,
											color: '#05509a'
										}, {
											offset: 0.6,
											color: '#05509a'
										},
										{
											offset: 1,
											color: '#d2e1e3'
										}
									]
								),
								shadowColor: '#073a75',
								shadowBlur: 10
							}
						}]
					}
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.forth {
		width: 100%;
		height: 100%;
		background: url(../../static/img/bg3.jpg) center no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		.left_panel {
			width: 940px;
			height: 890px;
			position: absolute;
			left: 44px;
			top: 133px;
		}
		.right_panel {
			width: 900px;
			height: 890px;
			left: 1020px;
			top: 133px;
			position: absolute;
			.chart2 {
				display: inline-block;
				margin-right: 30px;
			}
		}
	}
</style>