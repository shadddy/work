<template>
	<div>
		<transition name="drop">
			<div class="message" :style="{top:mytop+'px',left:myleft+'px'}" v-if="isShow">
				<div class="left">
					<img src="../../static/img/girl.png" v-show="picShow==0" />
					<img src="../../static/img/boy.png" v-show="picShow==1" />
					<p>{{username}}</p>
				</div>
				<div class="right">
					<h3>#{{topic}}#</h3>
					<p>{{message}}</p>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		props: {
			interval: {
				type: Number,
				default: 0
			}

		},
		data() {
			return {
				isShow: false,
				picShow: 0,
				myleft: 20,
				mytop: 50,
				topic: '我的话题',
				username: '秦文强',
				message: '哈哈哈哈',
				mesList: [{
					name: '翡冷翠',
					cont: '全屋家电一个遥控控制功能'
				}, {
					name: '心儿爱斌',
					cont: '想要专门洗内衣的迷你洗衣机'
				}, {
					name: '小裕',
					cont: '洗烘一体机和干衣机哪个更适合家庭使用？'
				}, {
					name: '樱桃精灵',
					cont: '关于如何避免洗衣时衣物缠绕？我的妙招是···'
				}, {
					name: '海尔兄贝',
					cont: '洗衣机用完，盖子是开着好还是关着好？'
				}, {
					name: 'yaoli',
					cont: '怎么才能保养好洗衣机，让它更加清洁耐用呢？'
				}, {
					name: '可可第一',
					cont: '羊绒衫可以机洗吗'
				}, {
					name: '晴壹四',
					cont: '婴儿衣物细菌多该怎么办'
				}, {
					name: '七七七',
					cont: '因为一个选择 我的家大出了四平方'
				}, {
					name: '五月的风',
					cont: '洗衣机吐槽会'
				}, {
					name: '艳阳高照666',
					cont: '我有创意之洗衣机的自我清洁'
				}, {
					name: '潇潇_739',
					cont: '我理想中的太阳能干衣机'
				}, {
					name: '微微0416',
					cont: '便携式衣物清洁器测试帖'
				}, {
					name: '小小小小白',
					cont: '我要一台可以叠衣服的干衣机'
				}, {
					name: '艾枣',
					cont: '鞋和衣物同时洗靠谱吗'
				}, {
					name: '开心麻花18',
					cont: '宝妈们想要的洗衣机有吗'
				}, {
					name: '索尼大法好',
					cont: '洗衣革命+不用水的洗衣机'
				}, {
					name: '泶雨',
					cont: '宝宝衣物清洁妙招'
				}, {
					name: '布丁糖果',
					cont: '想要一款可以自动识别衣物材质的机器'
				}, {
					name: '青柠奇异果BB',
					cont: '我有创意：多功能一体机，随心多选择！'
				}, {
					name: 'leolvge',
					cont: '我有创意之给洗衣机加点料'
				}, {
					name: '飞易',
					cont: '分层洗衣机'
				}, {
					name: '微微0416',
					cont: '洗衣机能不能更完美一点'
				}, {
					name: '悬崖边的坏小孩',
					cont: '蚕丝衣物如何清洗'
				}, {
					name: '龙王1',
					cont: '不坏衣服又能干净的洗衣机'
				}, {
					name: 'Wang C',
					cont: '想要个不用弯腰的洗衣机'
				}, {
					name: '红叶恋秋',
					cont: '母婴类衣料材质如何创新'
				}, {
					name: '无所就',
					cont: '洗完也能轻松分开衣物的洗衣机有吗'
				}, {
					name: 'lucyi',
					cont: '什么衣料抗污性能好'
				}, {
					name: '末班车先生',
					cont: '羽绒服再也不用送到干洗店了'
				}, {
					name: '青奉军',
					cont: '内外衣一起洗的头疼事儿'
				}, {
					name: '飘摇0112',
					cont: '出水可视化洗衣机'
				}, {
					name: 'xiaooneMei',
					cont: '求洗衣机和洗碗机合体'
				}, {
					name: '幽花一梦',
					cont: '我想要的洗袜一体机'
				}, {
					name: '尼古拉斯赵四',
					cont: '消毒洗衣机'
				}, {
					name: '海尔厂花',
					cont: '可以超声波洗衣的洗衣机'
				}, {
					name: 'abcde7722',
					cont: '未来创意洗衣机—Orbit洗衣球'
				}, {
					name: 'James海尔',
					cont: '会说话能分层的洗衣机来一台'
				}, {
					name: '萤火虫123',
					cont: '健身洗衣两不误的多功能创意洗衣机'
				}, {
					name: '浮云888',
					cont: '分区洗衣机：一个人生活也不必尴尬'
				}, {
					name: 'Yingying_826',
					cont: '家里第二台洗衣机的定制需求'
				}, {
					name: '小阿花',
					cont: '让洗衣机不再长皱纹的洗衣机'
				}, {
					name: 'James海尔',
					cont: '宝妈也需要特殊对待'
				}, {
					name: 'wx_b06873',
					cont: '姥姥的“一键式”洗衣方案'
				}, {
					name: '奶油小布丁',
					cont: '防晒洗衣机有的话来一台'
				}, {
					name: 'JanusMix',
					cont: '衣物也使用有寿命'
				}, {
					name: '浅韵荷香',
					cont: '自我检测并发送检测报告的智能家电'
				}, {
					name: '清浅岁月',
					cont: '可否添加男士专用模式？'
				}, {
					name: 'ss135ss',
					cont: '洗衣机与洗手池的结合'
				}],
				topicList: ['安全', '舒适性', '面料','款式'],

			}
		},
		mounted() {
			var that=this
			setTimeout(function() {
	
				var _index;
				setInterval(function() {
					that.isShow = !that.isShow
					that.myleft = Math.floor(Math.random() * 600)
					that.mytop = Math.floor(Math.random() * 450)
					that.topic = that.topicList[Math.floor(Math.random() * 4)]
					_index = Math.floor(Math.random() * 49)
					that.username = that.mesList[_index].name
					that.message = that.mesList[_index].cont
					that.picShow = Math.floor(Math.random() * 2)
				}, 2000)
			},this.interval)

		}
	}
</script>

<style scoped lang="less">
	.drop-enter-active {
		transition: all 0.5s ease;
	}
	
	.drop-leave-active {
		transition: all 0.5s ease;
	}
	
	.drop-enter {
		transform: scale(0);
	}
	
	.drop-leave-active {
		transform: scale(0);
	}
	
	.message {
		position: absolute;
		background: rgba(8, 92, 164, 0.8);
		padding: 10px 20px;
		color: white;
		border-radius: 10px;
		.left {
			padding-right: 10px;
			display: inline-block;
			text-align: center;
			border-right: 1px solid white;
			img {
				width: 50px;
				height: 50px;
			}
		}
		.right {
			margin-left: 10px;
			display: inline-block;
		}
	}
</style>