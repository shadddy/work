<template>
</template>

<script>
</script>

<style>
	{
		name: '智慧家电绑定数',
		type: 'effectScatter',
		coordinateSystem: 'geo',
		showEffectOn: 'emphasis',
		rippleEffect: {
			scale: 5
		}
		,
		data: this.convertData([ {
			name: '北京', value: Math.round(Math.random() * 1000), user: '翡冷翠', message: '全屋家电一个遥控控制功能'
		}
		, {
			name: '天津', value: Math.round(Math.random() * 1000), user: '心儿爱斌', message: '想要专门洗内衣的迷你洗衣机'
		}
		, {
			name: '上海', value: Math.round(Math.random() * 1000), user: '小裕', message: '洗烘一体机和干衣机哪个更适合家庭使用？'
		}
		, {
			name: '重庆', value: Math.round(Math.random() * 1000), user: '樱桃精灵', message: '关于如何避免洗衣时衣物缠绕？我的妙招是···'
		}
		, {
			name: '河北', value: Math.round(Math.random() * 1000), user: '海尔兄贝', message: '洗衣机用完，盖子是开着好还是关着好？'
		}
		, {
			name: '河南', value: Math.round(Math.random() * 1000), user: 'yaoli', message: '怎么才能保养好洗衣机，让它更加清洁耐用呢？'
		}
		, {
			name: '云南', value: Math.round(Math.random() * 1000), user: '可可第一', message: '羊绒衫可以机洗吗'
		}
		, {
			name: '辽宁', value: Math.round(Math.random() * 1000), user: '晴壹四', message: '婴儿衣物细菌多该怎么办'
		}
		, {
			name: '黑龙江', value: Math.round(Math.random() * 1000), user: '七七七', message: '因为一个选择 我的家大出了四平方'
		}
		, {
			name: '湖南', value: Math.round(Math.random() * 1000), user: '五月的风', message: '洗衣机吐槽会'
		}
		, {
			name: '安徽', value: Math.round(Math.random() * 1000), user: '艳阳高照666', message: '我有创意之洗衣机的自我清洁'
		}
		, {
			name: '山东', value: Math.round(Math.random() * 1000), user: '潇潇_739', message: '我理想中的太阳能干衣机'
		}
		, {
			name: '新疆', value: Math.round(Math.random() * 1000), user: '微微0416', message: '便携式衣物清洁器测试帖'
		}
		, {
			name: '江苏', value: Math.round(Math.random() * 1000), user: '小小小小白', message: '我要一台可以叠衣服的干衣机'
		}
		, {
			name: '浙江', value: Math.round(Math.random() * 1000), user: '艾枣', message: '鞋和衣物同时洗靠谱吗'
		}
		, {
			name: '江西', value: Math.round(Math.random() * 1000), user: '开心麻花18', message: '宝妈们想要的洗衣机有吗'
		}
		, {
			name: '湖北', value: Math.round(Math.random() * 1000), user: '索尼大法好', message: '洗衣革命+不用水的洗衣机'
		}
		, {
			name: '广西', value: Math.round(Math.random() * 1000), user: '泶雨', message: '宝宝衣物清洁妙招'
		}
		, {
			name: '甘肃', value: Math.round(Math.random() * 1000), user: '布丁糖果', message: '想要一款可以自动识别衣物材质的机器'
		}
		, {
			name: '山西', value: Math.round(Math.random() * 1000), user: '青柠奇异果BB', message: '我有创意：多功能一体机，随心多选择！'
		}
		, {
			name: '内蒙古', value: Math.round(Math.random() * 1000), user: 'leolvge', message: '我有创意之给洗衣机加点料'
		}
		, {
			name: '陕西', value: Math.round(Math.random() * 1000), user: '飞易', message: '分层洗衣机'
		}
		, {
			name: '吉林', value: Math.round(Math.random() * 1000), user: '微微0416', message: '洗衣机能不能更完美一点'
		}
		, {
			name: '福建', value: Math.round(Math.random() * 1000), user: '悬崖边的坏小孩', message: '关于如何避免洗衣时衣物缠绕？我的妙招是···'
		}
		, {
			name: '贵州', value: Math.round(Math.random() * 1000), user: '龙王1', message: '不坏衣服又能干净的洗衣机'
		}
		, {
			name: '广东', value: Math.round(Math.random() * 1000), user: 'Wang C', message: '想要个不用弯腰的洗衣机'
		}
		, {
			name: '青海', value: Math.round(Math.random() * 1000), user: '红叶恋秋', message: '母婴类衣料材质如何创新'
		}
		, {
			name: '西藏', value: Math.round(Math.random() * 1000), user: '无所就', message: '洗完也能轻松分开衣物的洗衣机有吗'
		}
		, {
			name: '四川', value: Math.round(Math.random() * 1000), user: 'lucyi', message: '什么衣料抗污性能好'
		}
		, {
			name: '宁夏', value: Math.round(Math.random() * 1000), user: '末班车先生', message: '羽绒服再也不用送到干洗店了'
		}
		, {
			name: '海南', value: Math.round(Math.random() * 1000), user: '青奉军', message: '内外衣一起洗的头疼事儿'
		}
		, {
			name: '台湾', value: Math.round(Math.random() * 1000), user: '飘摇0112', message: '出水可视化洗衣机'
		}
		, {
			name: '香港', value: Math.round(Math.random() * 1000), user: 'xiaooneMei', message: '求洗衣机和洗碗机合体'
		}
		, {
			name: '澳门', value: Math.round(Math.random() * 1000), user: '幽花一梦', message: '我想要的洗袜一体机'
		}
		]),
		symbolSize: 15,
		label: {
			normal: {
				show: false
			}
			,
			emphasis: {
				show: false
			}
		}
		,
		itemStyle: {
			//隐藏所有散点
			normal: {
				opacity: 0,
			}
			,
			emphasis: {
				borderColor: '#fff', borderWidth: 1
			}
		}
	}
</style>