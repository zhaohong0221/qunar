<template>
	<div class="recommend" v-if="relist.length">
		<div class="top">去哪儿推荐</div>
		<div class="bot">
			<a href="#" v-for="item of relist" class="cf" :key="item.id">
				<div class="fl">
					<h4>{{item.name}}</h4>
					<div class="time">{{item.remark[0]}}</div>
					<p><span v-for="ite of item.label">{{ite}}</span></p>
				</div>
				<div class="fr">
					<p><span>￥<em>{{item.price}}</em></span>起</p>
					<button>预订</button>
				</div>
			</a>
		</div>
	</div>
</template>
<script>
	export default{
		props:["relist"]
	}
</script>
<style scoped>
	.recommend{
		padding: 0 0.1rem;
		box-sizing: border-box;
		text-align: left;
		background-color: #fff;
	}
	.top{
		font-size: 0.16rem;
		line-height: 0.44rem;
		color: #333;
	}
	.fl{
		width: 72%;
	}
	.fr{
		width:20%;
		text-align: center;
	}
	.bot{
	}
	.bot a{
		display: block;
		border-top: 1px solid #dadada;
		padding: .1rem 0;
	}
	h4{
		font-size: 0.15rem;
		font-weight: normal;
		line-height: 0.26rem;
		color: #616161;
	}
	.time{
		font-size: 0.12rem;
		line-height: 0.16rem;
		color: #616161;
	}
	.fl p{
		font-size: 0;
	}
	.fl span{
		display: inline-block;
		font-size: 0.1rem;
		color: #00afc7;
		border: 1px solid #a5e4ec;
		border-radius: 0.04rem;
		margin: 0.05rem;
	}
	.fr	p{
		font-size: 0.12rem;
		color: #9e9e9e;
		margin-top: 0.2rem;
	}
	.fr p span{
		color: #ff9800;
	}
	.fr p em{
		font-size: 0.2rem;
		font-style: normal;
	}
	.fr button{
		display: block;
		line-height: 0.3rem;
		border-radius: 0.04rem;
		border: none;
		width: 100%;
		color: #fff;
		background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
	}
</style>