<template>
	<div class="comment">
		<div class="top">用户评论</div>
		<ul class="bot">
			<li v-for="item of comlist">
				<div class="head cf">
					<div class="fl"><span :style="item.score">★★★★★</span>★★★★★</div>
					<div class="fr">{{item.username }} {{ item.time}}</div>
				</div>
				<div class="center">
					<p>{{item.text}}</p>
					<i class="iconfont">&#xe632;</i>
				</div>
				<div class="btb cf">
					<img v-for="itm of item.imgList" :src="itm" alt="">
				</div>
			</li>
		</ul>
		<a href="#" class="all">查看全部评论<i class="iconfont">&#xe631;</i></a>
	</div>
</template>
<script>
	export default{
		props:["comlist"]
	}
</script>
<style scoped>
	.comment{
		text-align: left;
		background-color: #fff;
	}
	.top{
		font-size: 0.15rem;
		line-height: 0.44rem;
		padding-left: 0.2rem;
	}
	.head .fl{
		color: #ddd;
		font-size: 0.14rem;
		position: relative;
	}
	.head .fl span{
		color: #ffb436;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.head .fr{
		font-size: 0.12rem;
		color: #212121;
	}
	.bot li{
		border-top: 1px solid #e0e0e0;
		padding: 0.1rem;
	}
	.center p{
		font-size: 0.13rem;
		color: #616161;
		line-height: 0.21rem;
		height: 1.05rem;
		overflow: hidden;
	}
	.center .iconfont{
		display: block;
		text-align: center;
		font-size: 0.13rem;
		line-height: 0.24rem;
	}
	.btb img{
		float: left;
		width: 32%;
		margin-bottom: 0.05rem;
	}
	.btb img:nth-child(3n-1){
		margin: 0 2%;
	}
	.all{
		display: block;
		line-height: 0.4rem;
		color: #616161;
		font-size: 0.14rem;
		text-align: center;
		border-top: 1px dashed #dadada;
	}
	.all .iconfont{
		line-height: 0.4rem;
		color: #616161;
		font-size: 0.13rem;
		margin-left: 0.04rem;
	}
</style>