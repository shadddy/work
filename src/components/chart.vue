<template>
	<div class="chart">
		<h1>{{title}}</h1>
		<div :id="id"></div>
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
			}
		},
		mounted(){	
			let mychart=this.$echarts.init(document.getElementById(this.id))
			mychart.setOption(this.code)
		}
		
	}
</script>

<style scoped lang="less">
	.chart{
		h1{
			font-size: 20px;
			background: -webkit-linear-gradient(bottom, #8cc9d9, white);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			line-height: 40px;
			font-weight: bold;
			padding-left: 20px;
		}
		div{
			width: 400px;
			height: 220px;
		}
	}
</style>