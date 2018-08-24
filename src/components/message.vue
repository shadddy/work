<template>
	<div>
		<transition name="drop">
			<div class="message" :style="{top:mytop+'px',left:myleft+'px'}" v-if="isShow">
				<div class="left">
					<img src="../../static/img/user.png" />
					<p>用户名</p>
				</div>
				<div class="right">
					<h3>#话题#</h3>
					<p>留言内容</p>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true,
				myleft: 20,
				mytop: 50
			}
		},
		mounted(){
			var that=this
			setInterval(function(){
				that.isShow=!that.isShow
			},2000)
		}
	}
</script>

<style scoped lang="less">
	.drop-enter-active {
		transition: all 5s ease;
	}
	
	.drop-leave-active {
		transition: all 1s ease;
	}
	
	.drop-enter {
		transform: scale(0);
	}
	
	.drop-leave-active {
		transform: scale(0);
	}
	
	.message {
		transform: scale(0);
		position: absolute;
		background: rgba(8, 92, 164, 0.8);
		overflow: hidden;
		padding: 10px 20px;
		color: white;
		border-radius: 10px;
		.left {
			display: inline-block;
			text-align: center;
			img {
				width: 50px;
				height: 50px;
			}
		}
		.right {
			display: inline-block;
		}
	}
</style>