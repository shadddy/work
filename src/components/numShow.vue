<template>
	<div v-bind:class="[numShow,size]">
		<p class="title">{{title}}</p>
		<div class="cont">
			<span class="icon"></span>
			<span class="num">{{myNum|formatter}}</span>
			<span class="unit">{{unit}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'numShow1',
		props: {
			title: {
				type: String,
				default: "标题"
			},
			num: {
				type: Number,
				default: 100
			},
			unit: {
				type: String,
				default: "单位"
			},
			size: {
				type: String,
				default: "big"
			},
			numChange: {
				type: Boolean,
				default: false
			},
			numRange: {
				type: Array
			},
			random: {
				type: Boolean,
				default: false
			},
			inttime:{
				type:Number,
				default:10000
			}
		},
		data() {
			return {
				numShow: 'numShow',
				myNum: this.num
			}
		},
		methods: {
			changeNum() {
				var that = this
				setInterval(function() {
					that.myNum += that.numRange[0] + Math.round(Math.random() * that.numRange[1])
				}, that.inttime)
			},
			randomChange() {
				var that = this
				var _ran = true
				setInterval(function() {
					if(_ran) {
						_ran = false
						that.myNum += that.numRange[0] + Math.round(Math.random() * that.numRange[1])
					} else {
						_ran = true
						that.myNum -= that.numRange[0] + Math.round(Math.random() * that.numRange[1])
					}
				}, that.inttime)
			},
			formatter(num) {
				var many = num.length
				var numAry = ('' + num).split('');
				var spanindex = 0;
				for(var i = many - 1; i > 0; i--) {
					spanindex++
					if(spanindex == 3) {
						numAry.splice(i, 0, ',')
						spanindex = 0
					}
				}
				return numAry.join('')
			}

		},
		mounted() {
			if(this.numChange) {
				if(this.random) {
					this.randomChange()
				} else {
					this.changeNum()
				}
			}
		},
		filters: {
			formatter: function(value) {
				if(!value) return
				var many = value.toString().length
				var numAry = ('' + value).split('');
				var spanindex = 0;
				for(var i = many - 1; i > 0; i--) {
					spanindex++
					if(spanindex == 3) {
						numAry.splice(i, 0, ',')
						spanindex = 0
					}
				}
				return numAry.join('')
			}
		}
	}
</script>

<style scoped lang="less">
	.numShow {
		display: inline-block;
		padding: 0 20px;
		.title {
			font-size: 20px;
			background: -webkit-linear-gradient(bottom, #8cc9d9, white);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			line-height: 50px;
			font-weight: bold;
		}
		.cont {
			float: right;
			.icon {
				display: none;
				float: left;
				margin-top: 25px;
				margin-right: 10px;
				width: 53px;
				height: 13px;
				background: url(../../static/img/icon.png);
				background-size: 100% 100%;
			}
			.num {
				color: white;
				font-size: 38px;
				font-family: NexaBold;
			}
			.unit {
				color: #ffcf4a;
				font-size: 16px;
			}
		}
	}
	
	.supsmall {
		width: 360px;
		.cont {
			.icon {
				display: block;
				margin-top: 20px;
			}
			.num {
				font-size: 30px;
			}
		}
	}
	.supsmall:nth-of-type(2),.supsmall:nth-of-type(3){
		width: 250px;
	}
	
	.big {
		.cont {
			.icon {
				display: block;
			}
		}
		padding-top: 10px;
		width: 425px;
		height: 125px;
	}
	
	.small {
		width: 212.5px;
		height: 92.5px;
		.cont {
			.num {
				font-size: 30px;
			}
		}
	}
	
	.supBig {
		.cont {
			.num {
				font-size: 46px;
			}
			.icon {
				display: block;
			}
		}
		width: 425px;
		height: 125px;
	}
	
	.middle {
		width: 425px;
		height: 90px;
		.cont {
			.num {
				font-size: 30px;
			}
		}
	}
</style>