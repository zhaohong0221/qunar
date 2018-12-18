<template>
	<div class="prefer">
		<div class="top">
			<img src="../../../assets/images/heart.png" alt="">
			猜你喜欢
		</div>
		<div class="bot">
			<router-link :to="/detail/+item.id" v-for="item of list" :key="item.id" class="cf">
				<div class="tag any" v-if="item.tag=='随买随用'">随买随用</div>
				<div class="tag tomorrow" v-if="item.tag=='可订明日'">可订明日</div>
				<img :src="item.src" alt="">
				<div class="left">
					<h3>{{item.title}}</h3>
					<div class="assess">
						<div class="star">
							<div class="up" :style="{width: item.star/5*100+'%'}">★★★★★</div>
							<div class="down">★★★★★</div>
						</div>
						<span v-if="item.assess">{{item.assess}}条评论</span>
					</div>
					<div class="price">
						<span>￥<em>{{item.price}}</em></span>起
						<div class="fr">{{item.address}}</div>
					</div>
					<p v-if="item.label">{{item.label}}</p>
				</div>
			</router-link>
		</div>
		<a href="#" class="all">查看所有产品</a>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		props:["list"]
	}
</script>
<style scoped>
	.prefer{
		font-size: 0.12rem;
		color: #212121;
		background-color: #fff;
		margin-top: 0.1rem;
	}
	.top{
		text-align: left;
		font-size: 0.16rem;
		line-height: 0.47rem;
	}
	.top img{
		width: 0.15rem;
		height: 0.15rem;
		margin-left: 0.1rem;
	}
	.bot{
		padding-left: 0.12rem;
		box-sizing: border-box;
	}
	.bot a{
		display: block;
		position: relative;
		padding: 0.1rem 0;
		border-top: 1px solid #e0e0e0;
	}
	.bot a:first-child{
		border-top: none;
	}
	.tag{
		position: absolute;
		top: 0.1rem;
		left: 0;
		width: 0.51rem;
		line-height: 0.19rem;
		color: #fff;
		font-size: 0.1rem;
		background: url(../../../assets/images/any.png) no-repeat;
		background-size: 100%;
	}
	.tomorrow{
		background-image: url(../../../assets/images/tomorrow.png);
	}
	.bot img{
		float: left;
		width: 1rem;
	}
	.bot .left{
		padding-left: 0.11rem;
		text-align: left;
		overflow: hidden;
	}
	.bot h3{
		font-weight: normal;
		line-height: 0.4rem;
		font-size: 0.16rem;
	}
	.price{
		margin-top: 0.11rem;
		line-height: 0.2rem;
	}
	.price .fr{
		margin-right: 0.12rem;
		color: #616161;
	}
	.price span{
		color: #ff8300;
	}
	.price em{
		font-size: 0.2rem;
		font-style: normal;
	}
	.bot p{
		padding: 0.24rem 0 0.02rem 0.05rem;
		color: #f55;
	}
	.star{
		display: inline-block;
		position: relative;
		font-size: 0.15rem;
		margin-right: 0.1rem;
	}
	.star .up{
		position: absolute;
		top: 0;
		left: 0;
		color: #ffb436;
		overflow: hidden;
	}
	.star .down{
		color: #e0e0e0;
	}
	.all{
		display: block;
		font-size: 0.14rem;
		line-height: 0.4rem;
		color: #00afc7;
		border-top: 1px solid #e0e0e0;
	}
</style>