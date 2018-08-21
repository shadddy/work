<template>
	<div id="app">
		<div class="nav" :class="curPage==3?'my-active-left':null">
			<router-link v-for="(item,index) in navList" class="button" :to="item.to" :key="item.id" @click.native="changePage(index)" :class="curPage==index?'my-active':null">{{item.name}}</router-link>
		</div>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>

	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				curPage: 0,
				navList: [{
					id: 0,
					name: "智慧家电大数据",
					to: {
						path: '/'
					},
				}, {
					id: 1,
					name: "智慧门店大数据",
					to: {
						path: 'second'
					},
				}, {
					id: 2,
					name: "智慧服装大数据 ",
					to: {
						path: 'third'
					},
				}, {
					id: 3,
					name: "衣联定制大数据 ",
					to: {
						path: 'forth'
					},
				}]
			}
		},
		methods: {
			changePage: function(index) {
				this.curPage = index
				console.log(this.curPage)
			}
		},
		mounted() {
			var w = window.innerWidth;
			var h = window.innerHeight;
			var origeW = 1920;
			var origeH = 1080;

			var origeScale = w / h;
			var bgScale = origeW / origeH;
			var _scale;
			var _l = -(origeW - w) / 2;
			var _t = -(origeH - h) / 2;

			if(origeScale > bgScale) {
				_scale = h / origeH;
			} else {
				_scale = w / origeW;
			}
			$('#app').css({
				'top': _t + 'px',
				'left': _l + 'px',
				'transform': 'scale(' + _scale + ')'
			})
		}
	}
</script>

<style>
	@font-face {
		font-family: 'NexaBold';
		src: url(../static/fonts/NexaBold.otf);
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
		background: black;
		margin: 0;
		padding: 0;
		position: relative;
		overflow: hidden;
	}
	
	div {
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	
	p {
		-webkit-margin-before: 0em;
		-webkit-margin-after: 0em;
	}
	
	a {
		text-decoration: none;
	}
	
	#app {
		font-family: "microsoft yahei, Helvetica, Arial, sans-serif";
		color: #2c3e50;
		width: 1920px;
		height: 1080px;
		transform-origin: center;
		position: absolute;
	}
	
	.nav {
		position: absolute;
		top: 934px;
		left: 543px;
		width: 900px;
		height: 54px;
		z-index: 10000;
	}
	
	.button {
		display: inline-block;
		margin-left: 15px;
		width: 190px;
		height: 52px;
		background: url(../static/img/btn-2.png);
		background-size: 100% 100%;
		color: white;
		line-height: 52px;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
	}
	
	.my-active {
		background: url(../static/img/btn-1.png);
	}
	
	.my-active-left {
		left: 110px;
	}
</style>