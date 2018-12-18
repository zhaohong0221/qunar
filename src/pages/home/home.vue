<template>
	<div>
		<heads></heads>
		<banner></banner>
	    <list></list>
	    <maps></maps>
	    <limit></limit>
	    <hot :hotlist="hotlist"></hot>
	    <prefer :list="list"></prefer>
	    <weekend :weekendlist="weekendlist"></weekend>
	</div>
</template>
<script>
	import axios from 'axios'
	import heads from './components/head'
	import list from './components/list'
	import banner from './components/banner'
	import maps from './components/map'
	import limit from './components/limit'
	import hot from './components/hot'
	import prefer from './components/prefer'
	import weekend from './components/weekend'
	export default{
		components:{
			list,heads,banner,maps,limit,hot,prefer,weekend
	    },
	    data(){
	    	return {
	    		hotlist:null,
	    		list:null,
	    		weekendlist:null
	    	}
	    },
	    mounted(){
	    	axios.get("http://192.168.1.122:8080/static/mock/home.json").then((res)=>{
	    		this.hotlist=res.data.hotlist;
	    		this.list=res.data.list;
	    		this.weekendlist=res.data.weekendlist
	    	})
	    }
	}
</script>