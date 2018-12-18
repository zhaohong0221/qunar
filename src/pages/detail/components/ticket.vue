<template>
	<div class="ticket">
		<div class="top cf">
			<a href="#">门票</a>
			<a href="#">一日游</a>
		</div>
		<div class="tikt" v-if="ticlist.sale.length">
			<h3>{{ticlist.name1}}</h3>
			<ul class="tick">
				<li v-for="item of ticlist.sale" class="cf">
					<div class="fl">{{item.name}}</div>
					<div class="fr"><span>￥<em>{{item.price}}</em>起</span></div>
				</li>
			</ul>
		</div>
		<div class="tikt" v-if="ticlist.ticket.length">
			<h3>{{ticlist.name2}}</h3>
			<ul class="tick">
				<li v-for="item of ticlist.ticket" :key="item.id" class="cf">
					<div class="fl">{{item.name}}</div>
					<div class="fr"><span>￥<em>{{item.price}}</em>起</span></div>
				</li>
			</ul>
		</div>
		<div class="tikt" v-if="ticlist.ticketPackage.length">
			<h3>{{ticlist.name3}}</h3>
			<ul class="tick">
				<li v-for="item of ticlist.ticketPackage" class="cf" :key="item.id">
					<div class="fl">{{item.name}}</div>
					<div class="fr"><span>￥<em>{{item.price}}</em>起</span></div>
				</li>
			</ul>
		</div>
		<a href="#" class="all">查看剩余产品<i class="iconfont">&#xe632;</i></a>
	</div>
</template>
<script>
	export default{
		props:["ticlist"]
	}
</script>
<style scoped>
	.ticket{
		margin-top: 0.1rem;
	}
	.top{
		border-bottom: 1px solid #e0e0e0;
	}
	.top a{
		float: left;
		width:50%;
		line-height: 0.48rem;
		font-size: 0.16rem;
	}
	.top,.tikt,.all{
		background-color: #fff;
	}
	.tikt{
		padding: 0 0.1rem;
		text-align: left;
		margin-bottom: 0.1rem;
	}
	.tikt h3{
		line-height: 0.44rem;
		font-size: 0.16rem;
		font-weight: normal;
	}
	.tikt li{
		font-size: 0.15rem;
		line-height: 0.24rem;
		border-top: 1px solid #e0e0e0;
		padding: 0.12rem
	}
	.fl{
		width: 78%;
	}
	.tikt .fr{
		font-size: 0.12rem;
		color: #9e9e9e;
		width: 20%;
		text-align: center;
	}
	.tikt .fr span{
		color: #ff9800;
	}
	.tikt .fr em{
		font-size: 0.2rem;
		font-style: normal;
	}
	.all{
		font-size: 0.14rem;
		color: #616161;
		position: relative;
		top: -0.1rem;
		display: block;
		line-height: 0.4rem;
		border-top: 1px solid #e0e0e0;
	}
</style>