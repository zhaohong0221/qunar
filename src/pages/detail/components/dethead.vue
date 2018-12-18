<template>
	<header>
		<div class="top">
			<i class="iconfont">&#xe625;</i>
			<img :src="headlist.bigImg" alt="">
			<div class="name">{{headlist.name}}</div>
		</div>
		<div class="center">
			<div class="cf">
				<div class="fl">
					<h5><span>{{headlist.score}}</span>分 {{headlist.scorename}}</h5>
					<p>{{headlist.commitCount}}条评论 {{headlist.strategy}}条攻略</p>
					<i class="iconfont">&#xe631;</i>
				</div>
				<div class="fr">
					<h5>景点简介</h5>
					<p>开放时间、贴士</p>
					<i class="iconfont">&#xe631;</i>
				</div>
			</div>
			<div class="bot"><i class="iconfont">&#xe645;</i>{{headlist.address}} <i class="iconfont right">&#xe631;</i></div>
		</div>
	</header>
</template>
<script>
	export default{
		props:["headlist"]
	}
</script>
<style scoped>
	.top{
		position: relative;
		color: #fff;
	}
	.top i{
		position: absolute;
		width:0.36rem;
		line-height: 0.36rem;
		border-radius: 50%;
		background-color: #000;
		left: 0.1rem;
		top: 0.1rem;
		opacity: 0.5;
	}
	.top img{
		display: block;
		width: 100%;
	}
	.name{
		font-size: 0.18rem;
		line-height: 0.2rem;
		position: absolute;
		left: 0.1rem;
		bottom: 0.2rem;
	}
	.center{
		padding: 0.1rem 0.1rem 0 0.1rem;
		box-sizing: border-box;
		position: relative;
		background-color: #fff;
		top: -0.05rem;
		text-align: left;
		border-radius: 0.05rem 0.05rem 0 0;
	}
	.center p{
		font-size: 0.12rem;
		line-height: 0.16rem;
		color: #9e9e9e;
		margin-right: 0.1rem;
	}
	.center .fl,.center .fr{
		width: 50%;
		position: relative;
	}
	.center .fl i,.center .fr i,.right{
		position: absolute;
		top:50%;
		right: 0.08rem;
		font-size: 0.14rem;
		transform: translate(0,-50%);
		color: #9e9e9e;
	}
	.fl{
		border-right: 1px solid #e0e0e0;
		box-sizing: border-box;
	}
	.fr{
		padding-left: 0.1rem;
		box-sizing: border-box;
	}
	.fl h5{
		color: #ff8300;
		font-size: 0.14rem;
		line-height: 0.24rem;
		font-weight: normal;
	}
	.fl h5 span{
		font-size: 0.22rem;
		line-height: 0.22rem;
	}
	.fr h5{
		font-size: 0.14rem;
		line-height: 0.24rem;
		color: #212121;
		font-weight: normal;
	}
	.bot{
		font-size: 0.14rem;
		margin-top: 0.1rem;
		color: #212121;
		line-height: 0.38rem;
		border-top: 1px solid #f0f0ef;
		position: relative;
	}
	.bot i{
		margin-right: 0.1rem;
		color: #9e9e9e;
	}
</style>