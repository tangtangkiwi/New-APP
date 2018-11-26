<template>
	<div>
		<div class="main">
			<div class="photo">
				<img src="../assets/news.png"/>
			</div>
			<div class="bottom">
				<h3>请上传旅游投诉以及突发事件线索</h3>
				<label>
					<input type="file" @input="videoUp"/>
					<span>导入视频</span>
				</label>
				<label>
					<input type="file" @input="imageUp"/>
					<span>上传照片</span>
				</label>
				
			</div>
			<btn setBj="#3c9bbb" @hanlderClick="selected"/>
		</div>
		
	</div>
</template>

<script>
	import btn from '@/components/btn'
	export default{
		name:'New',
		components:{
			btn
		},
		data(){
			return{
				upArr:[]
			}
		},
		methods:{
			selected(){//点击按钮提交内容，并跳转内容
				var onoff=this.upArr.some((item)=>{//定义一个变量里面是否有值
					return item.type
				})
				if(onoff){
					this.$router.push('/form')//跳转到下个页面
					
				}else{
					alert('请上传内容')
				}
			},
			
			videoUp(ev){
				var f=ev.target.files[0];//(ev.target)代表input,下面的一个属性，是一个数组
				var type=f.type.split('/')[0];//判断是什么类型（f.type），并截取(split)
				if(type=='video'){//判断type类型是否是视频
					this.upArr[0]=f//把数组的内容放进来
				}else{
					alert('请上传正确格式')
				}
			},
			
			imageUp(ev){
				var f=ev.target.files[0];//(ev.target)代表input,下面的一个属性，是一个数组
				var type=f.type.split('/')[0];//判断是什么类型（f.type），并截取(split)
				if(type=='image'){//判断type类型是否是视频
					this.upArr[1]=f//把数组的内容放进来
				}else{
					alert('请上传正确格式')
				}
			}
		}
	}
</script>

<style>
	.main{
		width:100%;
		height: 100%;
		background: #eeeeee;
	}
	.photo{
		width: 100%;
		height:341px;
	}
	.bottom{
		width:100%;
		background: #eeeeee;
	}
	.bottom h3{
		width: 100%;
		height: 84px;
		line-height: 84px;
		color:#555555;
		font-size: 28px;
		text-indent:35px;
	}
	.bottom label{
		float: left;
		width: 50%;
		height: 190px;
		display: block;
		margin-bottom: 330px;
	}
	.bottom label:nth-of-type(1){
		border-right: 3px solid #f5f5f5;
		box-sizing: border-box;
		background: url(../assets/camera1.png) no-repeat  center 22px #FFFFFF;
	}
	.bottom label:nth-of-type(2){
		background: url(../assets/camera2.png) no-repeat  center 30px #FFFFFF;
	}
	.bottom label input{
		display: none;
	}
	.bottom label span{
		display: block;
		width: 100%;
		color:#5c5c5c;
		font-size: 28px;
		text-align: center;
		float: left;
		margin-top: 112px;
	}
</style>