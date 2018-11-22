<template>
	<div id="box">
		<div class="top">
			<img src="../assets/tree.jpg" class="photo"/>
			<img src="../assets/title.png" class="title"/>
			<img src="../assets/title2.png" class="logo"/>
			<div class="cloud">
				<img src="../assets/cloud.png" />
				<img src="../assets/cloud.png" />
				<img src="../assets/cloud.png" />
			</div>
			<img src="../assets/shake.png" class="laba"/>
		</div>
		<div class="bottom">
			<img src="../assets/logo.png"/>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Welcome",
		data(){
			return{
				date:null
			}
		},
		created(){//跳转到首页，设置一个定时器
			//
			var date=new Date().getTime();
			var num=0;
			setTimeout(()=>{
				this.$router.push('/home')
			},7000)
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
	@keyframes shake{
		10%{
			-webkit-transform: rotate(60deg);
		}
		20%{
			-webkit-transform: rotate(0deg);
		}
		30%{
			-webkit-transform: rotate(-60deg);
		}
		40%{
			-webkit-transform: rotate(0deg);
		}
		50%{
			-webkit-transform: rotate(60deg);
		}
		60%{
			-webkit-transform: rotate(0deg);
		}
		70%{
			-webkit-transform: rotate(-60deg);
		}
		80%{
			-webkit-transform: rotate(0deg);
		}
		90%{
			-webkit-transform: rotate(60deg);
		}
		100%{
			-webkit-transform: rotate(0deg);
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
		height: 710px;
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
		top:576px;
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
	.bottom{
		width: 100%;
		height: 40px;
		position: absolute;
		top: 1040px;
		opacity: 0;
		-webkit-animation: move 2s forwards linear;
		animation: move 2s forwards linear;
	}
	.bottom img{
		width: 100%;
		height: 40px;
	}
</style>