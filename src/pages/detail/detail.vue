<template>
	<div>
		<dethead :headlist="list"></dethead>
		<recommend :relist="relist"></recommend>
		<ticket :ticlist="ticlist"></ticket>
		<comment :comlist="comlist"></comment>
	</div>
</template>
<script>
	import axios from 'axios'
	import dethead from './components/dethead'
	import recommend from './components/recommend'
	import ticket from './components/ticket'
	import comment from './components/comment'
	export default {
		data(){
			return {
				list:{
					bigImg:null
				},
				relist:null,
				ticlist:{
					name1:null
				},
				comlist:null
			}
		},
		components:{
			dethead,recommend,ticket,comment
		},
		mounted(){
			axios.get("http://192.168.1.122:8080/static/mock/qunar.json").then((res)=>{
				this.list=res.data[this.$route.params.id];
				this.relist=res.data[this.$route.params.id].product.recommend;
				this.ticlist=res.data[this.$route.params.id].product;
				this.comlist=res.data[this.$route.params.id].comment;
			})
		}
	}
</script>