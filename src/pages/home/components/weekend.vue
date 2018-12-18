<template>
	<div class="weekend">
		<h6>周末去哪儿</h6>
		<div class="bot">
			<a href="#" v-for="item of weekendlist">
				<img :src="item.src" alt="">
				<h6>{{item.title}}</h6>
				<p>{{item.brief}}</p>
			</a>
		</div>
		<p><i class="iconfont">&#xe656;</i><b>票面价</b>是指通过景区指定窗口售卖的纸质门票上标注的价格</p>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		props:["weekendlist"]
	}
</script>
<style scoped>
	.weekend{
		text-align: left;
	}
	.weekend h6{
		font-size: 0.14rem;
		line-height: 0.4rem;
		color: #212121;
		padding-left: 0.13rem;
		font-weight: normal;
	}
	img{
		display: block;
		width: 100%;
	}
	.bot{
		background-color: #fff;
	}
	.bot h6{
		line-height: 0.24rem;
		padding-top: 0.07rem;
	}
	.bot p{
		line-height: 0.24rem;
		padding: 0 0.7rem 0.1rem 0.13rem;
		box-sizing: border-box;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 0.16rem;
	}
	p{
		font-size: 0.12rem;
		line-height: 0.3rem;
		color: #616161;
		background-color: #fff;
		margin-top: 0.05rem;
	}
	p .iconfont{
		font-size: 0.12rem;
		margin: 0 0.04rem 0 0.1rem;
	}
</style>