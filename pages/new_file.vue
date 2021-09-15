<template>
	<view class="container">
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" :textFlex="true" @change="tabChange" class="tabBox"></wuc-tab>
		<div v-if="TabCur==0" class="tabOne">
			
		</div>
		<div v-else>
			我是牛
		</div>
	</view>
</template>
<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	export default {
		components: {
			WucTab
		},
		data() {
			return {	
				TabCur: 0,
				tabList: [{ name: '请选择任务单' }, { name: '请选择测评表' }],
			}
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
				console.log(this.TabCur )
			}
		}
	}
</script>
<style lang="scss" scoped>
	.container{
		height:100%;
		background-color:#fff;
	}
	.tabBox{
		width: 80%;
		margin: 2% auto;
	}
</style>
