<template>
	<div class="chart2" :class="size">
		<div :id="id"></div>
		<h1>{{title}}</h1>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:'标题'
			},
			code:{
				type:Object
			},
			id:{
				type:String
			},
			size:{
				type:String
			}
		},
		mounted(){	
			let mychart=this.$echarts.init(document.getElementById(this.id))
			mychart.setOption(this.code)
		}
		
	}
</script>

<style scoped lang="less">
	.chart2{
		width: 265px;
		height: 280px;
		h1{
			font-size: 20px;
			background: -webkit-linear-gradient(bottom, #8cc9d9, white);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			line-height: 30px;
			font-weight: bold;
			text-align: center;
		}
		div{
			width: 265px;
			height: 250px;
		}
	}
</style>