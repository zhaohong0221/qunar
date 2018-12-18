<template>
	<footer>
		<div class="top">
			<a href="#"><span></span>机票</a>
			<a href="#"><span></span>酒店</a>
			<a href="#"><span></span>公寓</a>
			<a href="#"><i></i><span></span>更多</a>
		</div>
		<div class="center cf">
			<a href="#">登录</a>
			<a href="#">我的订单</a>
			<a href="#">最近浏览</a>
			<a href="#">关于我们</a>
		</div>
		<div class="foot">
			<div class="ft">
				<a href="#" class="color">触屏版</a>
				<a href="#">电脑版</a>
			</div>
			<div class="ff">Qunar 京ICP备05021087<a href="#">意见反馈</a>	</div>
		</div>
	</footer>
</template>
<style scoped>
	.top{
		width: 3rem;
		margin: 0 auto;
		line-height: 0;
		overflow: hidden;
		padding-top: 0.1rem;
	}
	.top a{
		float: left;
		line-height: 0.22rem;
		text-decoration: underline;
		font-size: 0.12rem;
		width:25%;
		color: #9e9e9e;
	}
	.top i{
		display: inline-block;
		width: 1px;
		height:0.16rem;
		vertical-align: middle;
		margin-right: 0.1rem;
		background-color: #acacac;
	}
	.top span{
		display: inline-block;
		background: url(../../../assets/images/sprite.png) no-repeat;
		background-size: 175px 50px;
		width: 0.22rem;
		height: 0.22rem;
		vertical-align: bottom;
		margin-right: 0.03rem;
	}
	.top a:nth-child(2) span{
		background-position: -25px 0;
	}
	.top a:nth-child(3) span{
		background-position: -150px 0;
	}
	.top a:last-child span{
		background: url(../../../assets/images/more.png) no-repeat center center;
		background-size: 60% 60%;
	}
	.center{
		border-bottom: 1px solid #cacaca;
	}
	.center a{
		float: left;
		line-height: 0.39rem;
		padding-left: 0.2rem;
		color: #25a4bb;
		font-size: 0.14rem;
	}
	.ft{
		font-size: 0;
		padding-top: 0.12rem;
	}
	.ft a{
		font-size: 0.14rem;
		color: #25a4bb;
		line-height: 0.24rem;
		margin: 0 0.15rem;
	}
	.ft .color{
		color: black;
	}
	.ff,.ff a{
		font-size: 0.14rem;
		color: #9e9e9e;
		line-height: 0.34rem;
	}
</style>