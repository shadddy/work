<template>
	<div class="forth">
		<div class="left_panel">
			<num-show :num="num2" title="RFID标签数" unit="个" :numChange="numChange" :numRange='numRange' size="supsmall"></num-show>
			
			<num-show :num="num" title="服装设计师数：" unit="人" :numRange='numRange' size="supsmall"></num-show>
			<num-show :num="num3" title="帖子数：" unit="条" :numRange='numRange' size="supsmall"></num-show>
			<chart :title="chart1.title" :code="chart1.data" :id="chart1.id" size="big"></chart>
			
			<div class="area">
				<my-message></my-message>
				<my-message :interval="myInterval"></my-message>
			</div>
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
	import myMessage from '../components/message'
	export default {
		components: {
			numShow,
			chart,
			chart2,
			myMessage
		},
		data() {
			return {
				myInterval:2000,
				res:[],
				BJData: ['北京','天津','上海','重庆','河北','山西','辽宁'],
				numRange: [0, 2],
				num: 213,
				num2: 536844561,
				num3:18761,
				numChange: true,
				chart1: {
					id: 'chart1',
					title: '',
					data: {
//						tooltip: {
//							
//							trigger: 'item',
//							backgroundColor: 'rgba(8,92,164,0.9)',
//							padding: 10,
//							formatter: function(params) {
//								var _date;
//								var _year = new Date().getFullYear()
//								var _month = new Date().getMonth() + 1
//								var _day = new Date().getDate()
//								_date = _year + '/' + _month + '/' + _day
//								var _html;
//								var _head = '<h3>' + params['name'] + ' ：' + _date + '</h3>';
//								var _content = '<p>' + params['data'].message + '</p>';
//								_html = '<p><img src="static/img/user.png"/ style="width:30px;height:30px;">' + '<span style="margin-left:10px;font-size:16px;">' + params['data'].user + '</span></p>' + _head + _content
//								return _html;
//
//							}
//						},
						visualMap: {
							show: false,
							min: 0,
							max: 15000,
							left: 'left',
							top: 'bottom',
							text: ['高', '低'],
							calculable: true,
							inRange: {
								color: ['#79c0f1','#133478']
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
						series: [ {
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
								value: 12634,
								user: '翡冷翠',
								message: '全屋家电一个遥控控制功能'
							}, {
								name: '天津',
								value:9561,
								user: '心儿爱斌',
								message: '想要专门洗内衣的迷你洗衣机'
							}, {
								name: '上海',
								value: 13256,
								user: '小裕',
								message: '洗烘一体机和干衣机哪个更适合家庭使用？'
							}, {
								name: '重庆',
								value: 7895,
								user: '樱桃精灵',
								message: '关于如何避免洗衣时衣物缠绕？我的妙招是···'
							}, {
								name: '河北',
								value: 6232,
								user: '海尔兄贝',
								message: '洗衣机用完，盖子是开着好还是关着好？'
							}, {
								name: '河南',
								value:8545,
								user: 'yaoli',
								message: '怎么才能保养好洗衣机，让它更加清洁耐用呢？'
							}, {
								name: '云南',
								value: 4215,
								user: '可可第一',
								message: '羊绒衫可以机洗吗'
							}, {
								name: '辽宁',
								value: 6252,
								user: '晴壹四',
								message: '婴儿衣物细菌多该怎么办'
							}, {
								name: '黑龙江',
								value:4215,
								user: '七七七',
								message: '因为一个选择 我的家大出了四平方'
							}, {
								name: '湖南',
								value: 4569,
								user: '五月的风',
								message: '洗衣机吐槽会'
							}, {
								name: '安徽',
								value: 5662,
								user: '艳阳高照666',
								message: '我有创意之洗衣机的自我清洁'
							}, {
								name: '山东',
								value: 9022,
								user: '潇潇_739',
								message: '我理想中的太阳能干衣机'
							}, {
								name: '新疆',
								value: 2354,
								user: '微微0416',
								message: '便携式衣物清洁器测试帖'
							}, {
								name: '江苏',
								value: 10216,
								user: '小小小小白',
								message: '我要一台可以叠衣服的干衣机'
							}, {
								name: '浙江',
								value:11567,
								user: '艾枣',
								message: '鞋和衣物同时洗靠谱吗'
							}, {
								name: '江西',
								value: 6325,
								user: '开心麻花18',
								message: '宝妈们想要的洗衣机有吗'
							}, {
								name: '湖北',
								value: 7924,
								user: '索尼大法好',
								message: '洗衣革命+不用水的洗衣机'
							}, {
								name: '广西',
								value: 4687,
								user: '泶雨',
								message: '宝宝衣物清洁妙招'
							}, {
								name: '甘肃',
								value: 3254,
								user: '布丁糖果',
								message: '想要一款可以自动识别衣物材质的机器'
							}, {
								name: '山西',
								value: 4594,
								user: '青柠奇异果BB',
								message: '我有创意：多功能一体机，随心多选择！'
							}, {
								name: '内蒙古',
								value: 3254,
								user: 'leolvge',
								message: '我有创意之给洗衣机加点料'
							}, {
								name: '陕西',
								value:4587,
								user: '飞易',
								message: '分层洗衣机'
							}, {
								name: '吉林',
								value: 5698,
								user: '微微0416',
								message: '洗衣机能不能更完美一点'
							}, {
								name: '福建',
								value:6324,
								user: '悬崖边的坏小孩',
								message: '关于如何避免洗衣时衣物缠绕？我的妙招是···'
							}, {
								name: '贵州',
								value:3245,
								user: '龙王1',
								message: '不坏衣服又能干净的洗衣机'
							}, {
								name: '广东',
								value: 10247,
								user: 'Wang C',
								message: '想要个不用弯腰的洗衣机'
							}, {
								name: '青海',
								value:2354,
								user: '红叶恋秋',
								message: '母婴类衣料材质如何创新'
							}, {
								name: '西藏',
								value:1254,
								user: '无所就',
								message: '洗完也能轻松分开衣物的洗衣机有吗'
							}, {
								name: '四川',
								value: 4995,
								user: 'lucyi',
								message: '什么衣料抗污性能好'
							}, {
								name: '宁夏',
								value: 2354,
								user: '末班车先生',
								message: '羽绒服再也不用送到干洗店了'
							}, {
								name: '海南',
								value:3226,
								user: '青奉军',
								message: '内外衣一起洗的头疼事儿'
							}, {
								name: '台湾',
								value: 4266,
								user: '飘摇0112',
								message: '出水可视化洗衣机'
							}, {
								name: '香港',
								value: 5697,
								user: 'xiaooneMei',
								message: '求洗衣机和洗碗机合体'
							}, {
								name: '澳门',
								value: 1235,
								user: '幽花一梦',
								message: '我想要的洗袜一体机'
							}]
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
								text: '3652个',
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
								value: 3652,
								name: '1'
							}, {
								value: 0,
								name: '2'
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
								text: '371个',
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
								value: 371,
								name: 'COMFORT'
							}, {
								value: 0,
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
								text: '89个',
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
								value: 89,
								name: 'COMFORT'
							}, {
								value: 0,
								name: 'OFFLINE'
							}]
						}]
					}
				},
				chart5: {
					id: 'chart5',
					title: '帖子分类Top',
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
							top: '10%',
							containLabel: true
						},
						xAxis: [{
							type: 'category',
							data: ['安全', '舒适性', '面料','款式'],
							axisTick: {
								alignWithLabel: true
							},
							axisLabel: {
								show: false,
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
							max: 5500
						}],
						series: [{
							name: '帖子发布数',
							type: 'bar',
							barWidth: '60%',
							data: [4560, 3016, 2144,1374],
							label: {
								formatter: function(params) {
									var _html = params['name'] + "\n" + params['value']
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
										var colorList = ['#3587e4', '#7046b7', '#2b8877','#0d4677']
										return colorList[params.dataIndex]
									}

								}
							}
						}],

					}

				},
				chart6: {
					id: 'chart6',
					title: '创意分类Top',
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
							top: '10%',
							containLabel: true
						},
						xAxis: [{
							type: 'category',
							data: ['安全', '舒适性', '面料','款式'],
							axisTick: {
								alignWithLabel: true
							},
							axisLabel: {
								show: false,
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
							max: 1500
						}],
						series: [{
							name: '创意发布数',
							type: 'bar',
							barWidth: '60%',
							data: [1160,622,443,396],
							label: {
								formatter: function(params) {
									var _html = params['name'] + "\n" + params['value']
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
										var colorList = ['#3587e4', '#7046b7', '#2b8877','#0d4677']
										return colorList[params.dataIndex]
									}

								}
							}
						}],

					}
				},
				chart7: {
					id: 'chart7',
					title: '作品分类Top',
					data: {
						color: ['#3587e4', '#7046b7', '#2b8877'],
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
							top: '10%',
							containLabel: true
						},
						xAxis: [{
							type: 'category',
							data: ['安全', '舒适性', '面料','款式'],
							axisTick: {
								alignWithLabel: true
							},
							axisLabel: {
								show: false,
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
							max: 150
						}],
						series: [{
							name: '作品发布数',
							type: 'bar',
							barWidth: '60%',
							data: [114,82,41,30],
							label: {
								formatter: function(params) {
									var _html = params['name'] + "\n" + params['value']
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
										var colorList = ['#3587e4', '#7046b7', '#2b8877','#0d4677']
										return colorList[params.dataIndex]
									}

								}
							}
						}],

					}
				},
				chart8: {
					id: 'chart8',
					title: '创意转化率',
					data: {
						tooltip: {
							formatter: "{a} <br/>{b} : {c}%"
						},
						grid: {
							top: 100
						},
						series: [{
							name: '业务指标',
							type: 'gauge',
							radius: '75%',
							startAngle: 180,
							center: ['50%', '80%'],
							endAngle: 0,
							splitNumber: 2,
							axisTick: {
								show: false
							},
							axisLabel: {
								show: true,
								color: '#fff',
								distance: -30,
								formatter: '{value}%'
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
								value: 19.46,
								name: ''
							}],
							pointer: {
								width: 2,
								length: '60%'
							},
							detail: {
								color: '#fff',
								fontSize: 16,
								formatter: '{value}%',
								offsetCenter: [0, "30%"],
								show: true
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
					title: '作品转化率',
					data: {
						tooltip: {
							formatter: "{a} <br/>{b} : {c}%"
						},
						grid: {
							top: 100
						},
						series: [{
							name: '业务指标',
							type: 'gauge',
							radius: '75%',
							startAngle: 180,
							center: ['50%', '80%'],
							endAngle: 0,
							splitNumber: 2,
							axisTick: {
								show: false
							},
							axisLabel: {
								show: true,
								color: '#fff',
								distance: -30,
								formatter: '{value}%'
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
								value: 10.15,
								name: ''
							}],
							pointer: {
								width: 2,
								length: '60%'
							},
							detail: {
								color: '#fff',
								fontSize: 16,
								formatter: '{value}%',
								offsetCenter: [0, "30%"],
								show: true
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
					title: '产品转化率',
					data: {
						tooltip: {
							formatter: "{a} <br/>{b} : {c}%"
						},
						grid: {
							top: 100
						},
						series: [{
							name: '业务指标',
							type: 'gauge',
							radius: '75%',
							startAngle: 180,
							center: ['50%', '80%'],
							endAngle: 0,
							splitNumber: 2,
							axisTick: {
								show: false
							},
							axisLabel: {
								show: true,
								color: '#fff',
								distance: -30,
								formatter: '{value}%'
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
								value: 23.98,
								name: ''
							}],
							pointer: {
								width: 2,
								length: '60%'
							},
							detail: {
								color: '#fff',
								fontSize: 16,
								formatter: '{value}%',
								offsetCenter: [0, "30%"],
								show: true
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
				var _data=['北京','天津','上海','重庆','河北','山西','辽宁','吉林','黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','海南','四川','贵州','云南','陕西','甘肃','青海','台湾','内蒙古','广西','西藏','宁夏','新疆','香港','新疆']
				var _index=0;
				var that = this
				console.log(this.chart10)
				
				var res = [];
				for(var i = 0; i < data; i++) {
					var dataItem = data[i];
					var fromCoord = geoCoordMap[_data[_index]];
					var toCoord = geoCoordMap[_data[i]];
					if(fromCoord && toCoord) {
						res.push({
							fromName: _data[_index],
							toName: _data[i],
							coords: [fromCoord, toCoord]
						});
					}
				}
				return res;
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
			.area{
				position: absolute;
				width: 940px;
				height: 600px;
				left: 0;
				top: 160px;
			}
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