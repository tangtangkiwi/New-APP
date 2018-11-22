<template>
  <div id="app">
   	<transition name="fade">
   		<!--设置跳转时的动画效果，用transition包裹router-view-->
   		<router-view></router-view>
   	</transition>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	h1,h2,h3,h4,h5,h6{
		font-weight: normal;
	}
	.fade-enter{
		transform: translateX(100%);
		opacity: 1;
	}
	.fade-enter-to{
		transform: translateX(0);
		opacity: 0;
	}
	.fade-enter-active{
		transition: 3s linear;
	}
	.fade-leave{
		transform: translateX(0);
		opacity: 0;
	}
	.fade-leave-to{
		transform: translateX(100%);
		opacity: 1;
	}
	.fade-leave-active{
		transition: 3s linear;
	}
</style>
