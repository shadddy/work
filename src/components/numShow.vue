 <template>
	<div v-bind:class="[numShow,size]">
		<p class="title">{{title}}</p>
		<div class="cont">
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
				type: String,
				default: "100"
			},
			unit: {
				type: String,
				default: "单位"
			},
			size:{
				type:String,
				default:"big"
			}
		},
		data(){
			return{
				numShow:'numShow'
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
			.num {
				color: white;
				font-size: 38px;
				
			}
			.unit {
				color: #ffcf4a;
				font-size: 16px;
			}
		}
	}
	.big{
		padding-top: 10px;
		width: 425px;
		height: 125px;
		
	}
	.small{
		width: 212.5px;
		height: 92.5px;
		.cont{
			.num{
				font-size:30px;
			}
		}
	}
	.supBig{
		.cont{
			.num{
				font-size: 40px;
			}
		}
	}
	.middle{
		width:425px;
		height: 90px;
	}
</style>