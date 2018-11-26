<template>
	<div>
		<p :class="onoff?'active':''">{{title}}</p>
		<button @click="btnInput" :style="{background:setBj}">提交</button>
	</div>
</template>

<script>
	export default{
		name:'Btn',
		props:{//props放形参的地方
			setBj:{
				default:"#cacaca"//default是默认值
			}
		},
		data(){
			return{
				onoff:false,
				title:'请给景区评分'
			}
		},
		methods:{
			btnInput(){
				//alert(1)
				//判断评分是否全部都勾上
				var a=this.$store.state.rangArr.some((item,index)=>{//从状态管理里调取之前的数据
					return item ==0;
				})
				if(!a){//判断a是否全部勾上
					var tag=this.$store.state.tagInfo;//获取状态管理中的评论的数据
					if(tag){//判断是否添加上标签
						this.$emit('hanlderClick')//调用父级传过来的函数
					}else{
						this.onoff=true;
						this.title='请给景区添加标签';
						setTimeout(()=>{
							this.onoff=false
						},2000)
					}
					 
				}else{
					this.onoff=true;
					this.title='请给景区评分'
					setTimeout(()=>{
						this.onoff=false
					},2000)
				}
				
				this.$emit("hanlderClick")//($emit("所传的事件")) 子组件改变父级组件
			}
		}
	}
</script>

<style>
	button{
		width: 606px;
		height: 74px;
		background:#cacaca ;
		color:#fff;
		font-size: 29px;
		border-radius: 6px;
		border:0;
		outline: none;
		position: fixed;
		bottom:30px;
		left:18px;
	}
	p{
		position: fixed;
		bottom: 120px;
		left:42%;
		color:#535353;
		font-size: 18px;
		transition: 1s linear;
		opacity: 0;
	}
	p.active{
		opacity: 1;
	}
</style>