<template>
	<div id="box">
		<div class="top">
			<img src="../assets/tree.jpg" class="photo"/>
			<img src="../assets/tranks2.png" class="title"/>
			<div class="cloud">
				<img src="../assets/cloud.png" />
				<img src="../assets/cloud.png" />
				<img src="../assets/cloud.png" />
			</div>
		</div>
		<button @click="flag">重新评价</button>
	</div>
</template>

<script>
	export default{
		name:'Reset',
		components:{
		},
		data(){
			return{
				
				bj:'#3c9bbb'
			}
		},
		methods:{
			flag(){
				this.$router.push('/home')
			}
		}
	}
</script>

<style>
	@keyframes move{
		100%{
			-webkit-transform: translateY(0);
			opacity: 1;
		}
	}
	@-webkit-keyframes move{
		100%{
			-webkit-transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes flag{
		0%{
			-webkit-transform: translateX(0);
		}
		50%{
			-webkit-transform: translateX(100%);
		}
		100%{
			-webkit-transform: translateX(0);
		}
	}
	@-webkit-keyframes flag{
		0%{
			-webkit-transform: translateX(0);
		}
		50%{
			-webkit-transform: translateX(100%);
		}
		100%{
			-webkit-transform: translateX(0);
		}
	}
	
	
	#box{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.top{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		height: 770px;
		-webkit-transform: translateY(300px);
			transform: translateY(300px);
		-webkit-animation: move 1s linear;
		animation: move 1s forwards linear;
		opacity: 0;
	}
	.top .photo{
		height: 415px;
		width:100%;
		position: absolute;
		top:120px;
	}
	.top .title{
		position: absolute;
		top:600px;
		width: 640px;
		height: 150px;
	}
	.top .logo{
		position: absolute;
		top:672px;
	}
	
	.cloud img:nth-child(1){
		position: absolute;
		top:197px;
		left:45px;
		-webkit-animation: flag 6s 2s linear forwards  ;
		animation: flag 4s 2s linear forwards  ;
	}
	.cloud img:nth-child(2){
		width:58px;
		height: 44px;
		position: absolute;
		top:136px;
		right:192px;
		-webkit-animation: flag 6s 2s linear forwards  ;
		animation: flag 4s 2s linear forwards  ;
	}
	.cloud img:nth-child(3){
		width: 58px;
		height: 44px;
		position: absolute;
		top:263px;
		right:212px;
		-webkit-animation: flag 6s 2s linear forwards  ;
		animation: flag 4s 2s linear forwards  ;
	}
	.laba{
		position: absolute;
		top:542px;
		right:103px;
		-webkit-animation: shake 0.5s 6s 3 linear;
		animation: shake 0.5s 6s 3 linear;
		-webkit-transform-origin: left bottom;
		transform-origin: left bottom;
	}
	button{
		width: 600px;
		height: 95px;
		background: #3C9BBB;
		color:#fff;
		font-size: 29px;
		text-align: center;
		line-height: 95px;
		position: fixed;
		bottom:20px;
		left:18px;
		border:none;
		outline: none;
		border-radius: 6px;
	}
</style>