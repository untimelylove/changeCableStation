<template>
	<view class="container">
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" :textFlex="true" @change="tabChange"></wuc-tab>
		<div v-if="TabCur==0">
			我是老贴
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

</style>
