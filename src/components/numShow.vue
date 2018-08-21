<template>
	<div v-bind:class="[numShow,size]">
		<p class="title">{{title}}</p>
		<div class="cont">
			<span class="icon"></span>
			<span class="num">{{num}}</span>
			<span class="unit">{{unit}}</span>
		</div>
	</div>
</template>

<script>
	export default {
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
			numChange:{
				type:Boolean,
				default:false
			},
			numRange:{
				type:Array
			},
			random:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				numShow: 'numShow'
			}
		},
		methods:{
			changeNum(){
				var that=this
				setInterval(function(){
					that.num+=that.numRange[0]+Math.round(Math.random()*that.numRange[1])
				},10000)
			},
			randomChange(){
				var that=this
				var _ran=true
				setInterval(function(){
					if(_ran){
						_ran=false
						that.num+=that.numRange[0]+Math.round(Math.random()*that.numRange[1])
					}else{
						_ran=true
						that.num-=that.numRange[0]+Math.round(Math.random()*that.numRange[1])
					}
				},10000)
			}
	
		},
		mounted(){
			if(this.numChange){
				if(this.random){
					this.randomChange()
				}else{
					this.changeNum()
				}
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
				font-size: 40px;
			}
		}
	}
	
	.middle {
		width: 425px;
		height: 90px;
	}
</style>