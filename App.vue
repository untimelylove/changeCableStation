<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onLoad() {
			alert(1)
		  // 进入当前页面 自动切换成固定横屏
		  // #ifdef APP-PLUS
		  plus.screen.lockOrientation('landscape-primary');
		  // #endif
					
		},
	}
</script>

<style>
	/*每个页面公共css */
</style>
