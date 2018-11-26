<template>
	<div>
		<div class="main">
			<div class="title">
				<h2>给视频添加标签</h2>
				<ul class="list">
					<li v-for="(item,index) in arr" :key="index" :class="item==str?'active':''" @click="btnSpan(item)">{{item}}</li>
				</ul>
			</div>
			<div class="bottom">
				<textarea placeholder="(填选：说点什么呢！（可选）)"></textarea>
				<textarea placeholder="(填选：说点什么呢！（可选）)"></textarea>
			</div>
			<btn @hanlderClick="tijiao" :setBj="bj"/>
		</div>
		
	</div>
</template>

<script>
	import btn from '@/components/btn'
	import reset from '@/components/reset'
	export default{
		name:'Form',
		components:{
			btn,
			reset
		},
		data(){
			return{
				arr:['点赞','吐槽','投诉','表扬','弱爆了','给力','分享','感动','气愤','开心','抓拍','惊喜'],
				bj:'#cacaca',
				str:null
			}
		},
		methods:{
			btnSpan(item){
				this.str=item;
				this.bj='#3c9bbb'
			},
			tijiao(){
				if(this.str){//如果选中有值，就进入到下个页面
					this.$router.push('/reset')
				}else{
					alert('请添加标签')
				}
			}
		}
	}
</script>

<style>
	.main{
		width: 100%;
		height: 100%;
		background: #eeeeee;
	}
	.title{
		width: 100%;
		height:495px ;
		background: url(../assets/formBg.png) no-repeat ;
		background-size: 100% 100%;
	}
	.title h2{
		float: left;
		width: 100%;
		height: 92px;
		color:#FFFFFF;
		font-size: 28px;
		text-indent: 24px;
		margin-top: 52px;
	}
	.title .list{
		padding-left: 28px;
	}
	.title .list li{
		height: 50px;
		float: left;
		border:3px solid #8c9094;
		color:#fff;
		padding-left: 19px;
		padding-right: 19px;
		font-size: 28px;
		margin-right: 16px;
		margin-bottom:28px;
		line-height: 50px;
		border-radius: 20px;
	}
	.title .list li.active{
		background: #3c9bbb;
	}
	.bottom{
		width: 100%;
	}
	.bottom textarea{
		border: none;
		outline: none;
		font-size: 24px;
		padding: 8px;
	}
	.bottom textarea:nth-of-type(1){
		width: 100%;
		height: 150px;
		background: #fff;
		margin-top: 40px;
	}
	.bottom textarea:nth-of-type(2){
		width: 100%;
		height: 88px;
		background: #fff;
		margin-top: 40px;
		margin-bottom: 286px;
	}
</style>