<template>
	<div>
		<div class="banner">
				<swiper :options="swiperOption "><!--:options="swiperOption " 轮播图样式的设置，需放入js的data数据里-->
			 	<swiper-slide><img src="../assets/1.jpg" /></swiper-slide>
			 	<swiper-slide><img src="../assets/2.jpg" /></swiper-slide>
			 	<swiper-slide><img src="../assets/3.jpg" /></swiper-slide>
			 	<swiper-slide><img src="../assets/4.jpg" /></swiper-slide>
			 	<swiper-slide><img src="../assets/5.jpg" /></swiper-slide>
			 </swiper> 
			 <div class="swiper-pagination"></div><!--分页码-->
			 <p class="nav">
			 	成都九寨沟景区
			 </p>
		</div>
		<div class="score">
			<h2>给景区评分</h2>
			<ul class="score-list">
				<li>
					<span>综合印象</span>
					<nav>
						<a href="javascript:;" @click="btn(index,0,$event)" v-for="(item,index) in 5" :ket="item"></a>
					</nav>
				</li>
				<li>
					<span>服务指数</span>
					<nav>
						<a href="javascript:;" @click="btn(index,1,$event)" v-for="(item,index) in 5" :key="item"></a>
					</nav>	
				</li>
				<li>
					<span>消费指数</span>
					<nav>
						<a href="javascript:;" @click="btn(index,2,$event)" v-for="(item,index) in 5" :key="item"></a>
					</nav>
				</li>
			</ul>
		</div>
		<div class="info">
			<h3>给景区添加标签</h3>
			<ul class="info-list">
				<li v-for="(item,index) in arr" :key="index" @click="setTag(index)" :class="index==onoff?'active':''">{{item}}</li> 
				<!--动态加入class（active）        (?和：)三元运算符，(？)true,(:)false -->
			</ul>
		</div>
		<button>提交</button>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default{
		name:'Home',
		components:{
			swiper,
			swiperSlide
		},
		data(){
			return{//轮播图放入数据里
				swiperOption:{
					loop:true,//是否无缝轮播
					autoplay:true,//自动轮播
					pagination:{
						el:'.swiper-pagination'
					}
				},
				arr:['服务好','景色赞','一般般','看人海','挤爆了','千篇一律','物价高','美女多','帅哥多'],
				onoff:null //定义一个onoff,判断点的时候是哪一个
			}
		},
		methods:{//放入函数
			btn(index,num,ev){
				//target代表当前的这个元素
				var children=ev.target.parentNode.children;//找到父级下面的所有子集元素
				for(var i=0;i<children.length;i++){//循环操作所找到的子集元素，有的要加，有的不需要加
					if(index<i){
						children[i].style.backgroundPosition='right 0'
					}else{
						children[i].style.backgroundPosition='0 0'
					}
					
				}
			},
			setTag(index){//传入index
				this.onoff=index;//把下标赋予给onoff,使其相等，动态添加active
			}
		}
	}
</script>

<style>
	.banner{
		width: 100%;
		height: 345px;
		position: relative;
	}
	.banner .swiper-slide img{/* 在页面里自动生成  .swiper-slide类名*/
		width: 100%;
		height: 345px;
	}
	.banner .nav{
		width:100%;
		height: 86px;
		position: absolute;
		bottom:0;
		left:0;
		line-height:86px ;
		text-indent: 26px;
		z-index: 5;
		color:#fff;
		font-size: 28px;
		background: -webkit-linear-gradient(to top,rgba(0,0,0,0.9) 10px,rgba(0,0,0,0.7) 20px,rgba(0,0,0,0.5) 40px,rgba(0,0,0,0));
		background: linear-gradient(to top,rgba(0,0,0,0.9) 10px,rgba(0,0,0,0.7) 20px,rgba(0,0,0,0.5) 40px,rgba(0,0,0,0));
	}
	.swiper-pagination{
		position: absolute;
		bottom:43px;
		right:26px
	}
	.swiper-pagination .swiper-pagination-bullet{/* 在页面里自动生成   .swiper-pagination-bullet的类名*/
		width:12px;
		height: 12px;
		background: #fff;
		margin-right: 20px;
	}
	.swiper-pagination .swiper-pagination-bullet-active{/* 在页面里自动生成   .swiper-pagination-bullet-active的类名*/
		background: lightblue;
	}
	.score{
		width: 100%;
		border-bottom: 3px solid #f3f3f3;
	}
	.score h2{
		width: 100%;
		height: 90px;
		color:#838383;
		font-size: 29px;
		line-height: 90px;
		text-indent: 25px;
	}
	.score .score-list li{
		width: 100%;
		height: 38px;
		margin-bottom: 24px;
		position: relative;
	}
	.score .score-list li span{
		display: inline-block;
		height: 100%;
		color:#535353;
		font-size: 26px;
		margin-left: 25px;
	}
	.score .score-list li nav{
		width:388px;
		height: 38px;
		position: absolute;
		left:214px;
		top:0;
	}
	.score .score-list li nav a{
		width:38px;
		height: 38px;
		display: block;
		float: left;
		margin-right: 38px;
		background: url(../assets/star.png) no-repeat right;
		transition: 0.3s;
	}
	.info h3{
		width: 100%;
		height: 83px;
		line-height: 83px;
		color:#6e6e6e;
		font-size:28px;
		text-indent: 25px;
	}
	.info .info-list{
		width: 100%;
		padding-left: 26px;
		box-sizing: border-box;
	}
	.info .info-list li{
		height: 48px;
		border:2px solid #e7ecf1;
		border-radius: 20px;
		line-height: 48px;
		color:#707070;
		font-size: 27px;
		padding: 0 24px 0 24px;
		float: left;
		margin-right: 15px;
		margin-bottom: 19px;
	}
	.info .info-list .active{
		background: #3C9BBB;
		color:#fff;
	}
	button{
		width: 606px;
		height: 74px;
		background:#3c9bbb ;
		margin: 100px 16px 18px;
		color:#fff;
		font-size: 29px;
	}
</style>