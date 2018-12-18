<template>
	<div class="hot">
		<div class="top">
			<img src="../../../assets/images/hot.png" alt="">本周热门榜单
			<a href="#">全部榜单
				<i class="iconfont">&#xe631;</i>
			</a>
		</div>
		<div class="bot cf">
			<router-link :to="/detail/+item.id" v-for="item of hotlist" :key="item.id">
				<img src="../../../assets/images/top1.png" alt="" v-if="item.id==0" class="lead">
				<img src="../../../assets/images/top2.png" alt="" v-if="item.id==1" class="lead">
				<img src="../../../assets/images/top3.png" alt="" v-if="item.id==2" class="lead">
				<img :src="item.src" alt="" class="img">
				<div class="name">{{item.name}}</div>
				<p><span>￥<em>{{item.price}}</em></span>起</p>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		props:["hotlist"]
	}
</script>
<style scoped>
	.hot{
		font-size: 0.12rem;
		color: #212121;
		background-color: #fff;
	}
	.top{
		text-align: left;
		font-size: 0.16rem;
		line-height: 0.47rem;
	}
	.top img{
		width: 0.15rem;
		height: 0.15rem;
		margin: 0 0.04rem 0 0.1rem;
	}
	.iconfont{
		font-size: 0.12rem;
	}
	.top a{
		float: right;
		font-size: 0.12rem;
		margin-right: 0.1rem;
		color: #616161;
	}
	.bot{
		white-space: nowrap;
		overflow-x: auto;
		width: 100%;
	}
	.bot a{
		display: inline-block;
		position: relative;
		width: 1rem;
		margin-left: 0.06rem;
		padding: 0.1rem 0;
	}
	.bot a:first-child{
		margin-left: 0.12rem;
	}
	.bot a:last-child{
		margin-right: 0.12rem;
	}
	.bot .lead{
		position: absolute;
		top: 0.1rem;
		left: 0;
		width: 0.42rem;
		height: 0.2rem;
	}
	.bot .img{
		width: 100%;
	}
	.name{
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 0.06rem;
	}
	.bot p{
		color: #616161;
	}
	.bot span{
		color: #ff8300;
	}
	.bot em{
		font-style: normal;
		font-size: 0.14rem;
	}
</style>