<template>
	<header class="cf">
		<div class="fl iconfont">&#xe625;</div>
		<div class="center">
			<i class="iconfont search">&#xe639;</i>
			<input type="text" placeholder="输入城市/景点/游玩主题">
		</div>
		<div class="fr">
			咸阳
			<i class="iconfont">&#xe632;</i>
		</div>
	</header>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  /*min-width: 4rem;*/
  font-size: 0.16rem;
  background-color: #00bcd4;
  color: #fff;
  line-height: 0.44rem;
  position: relative;
}
header .fl{
  width: 10%;
}
header .fr{
	width: 18%;
}
header .center{
  position: relative;
  float: left;
  width:62%;
}
header input{
  border-radius: 0.05rem;
  margin-top: 0.07rem;
  line-height: 0.3rem;
  border: none;
  outline: none;
  padding-left: 0.24rem;
  width: 100%;
}
header .search{
	position: absolute;
	width: 0.2rem;
	top: 0;
	left: 0.04rem;
	color: #999;
}
</style>
