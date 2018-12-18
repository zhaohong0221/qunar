<template>
	<swiper :options="swiperOption" ref="mySwiper">
	    <swiper-slide v-for="item of imglist" :key="item.id">
	    	<img :src="item.src" alt="">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>
<script>
	export default {
	    data() {
	      return {
	      	imglist:[
	      		{
	      			id:0,
	      			src:"http://img1.qunarzz.com/piao/fusion/1812/2f/49f6152a86eb4502.jpg_750x200_f4841fa3.jpg"
	      		},
	      		{
	      			id:1,
	      			src:"http://img1.qunarzz.com/piao/fusion/1812/47/a51fe403715df102.jpg_750x200_085792b6.jpg"
	      		},
	      		{
	      			id:2,
	      			src:"http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg"
	      		},
	      		{
	      			id:3,
	      			src:"http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg"
	      		},
	      		{
	      			id:4,
	      			src:"http://img1.qunarzz.com/piao/fusion/1811/11/5fd3b05ad948bf02.jpg_750x200_56a60662.jpg"
	      		},
	      		{
	      			id:5,
	      			src:"http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg"
	      		},
	      		{
	      			id:6,
	      			src:"http://img1.qunarzz.com/piao/fusion/1805/fe/ca8ed7adc3ff9f02.jpg_750x200_49735140.jpg"
	      		},
	      		{
	      			id:7,
	      			src:"http://img1.qunarzz.com/piao/fusion/1812/7d/40e2ac9f30edeb02.jpg_750x200_16ea7908.jpg"
	      		},
	      		{
	      			id:8,
	      			src:"http://img1.qunarzz.com/piao/fusion/1812/b6/5c41d23b9bb36102.jpg_750x200_8d36a5db.jpg"
	      		}
	      	],
	        swiperOption: {
	        	loop:true,
	        	pagination:{
	        		el:".swiper-pagination"
	        	}
	        }
	      }
	    }
	}
</script>
<style scoped>
	img{
		display: block;
		width: 100%;
	}
	.swiper-container-horizontal > .swiper-pagination-bullets{
		font-size: 0;
	}
</style>