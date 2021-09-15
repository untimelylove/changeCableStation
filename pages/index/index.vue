<template>
	<view class="container">
	<!-- 	<div>你别骗我</div>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link> -->
		<button type="default" @click="btn">测试</button>
		<button @click="open">打开弹窗</button>
		<uni-list >
		    <uni-list-item v-for="(item,index) in arr" :title="item.name" link to="/pages/index/home" @click="onClick(item)" ></uni-list-item>
		</uni-list>
		<canvas-drag ref="canvasRef" id="canvas-drag" :graph="graph" 
		    :width="700" :height="750" :enableUndo="true">
		</canvas-drag>
		 <z-modal :show="modalControl" :btnGroup="btnGroup" :contentType="2" :contentText="contentText" :titleText="titleText" @cancle="cancle" @sure="sure" @reject="reject" ></z-modal>
	</view>
</template>
<script>
	import zModal from '@/components/z-modal/z-modal.vue'
	import canvasDrag from "@/components/canvas-drag/index";
	export default {
		components: {
			zModal,
			canvasDrag
		},
		data() {
			return {
				graph:{},
				modalControl:false,
				btnGroup: [{
					text: '取消',
					color: '#FFFFFF',
					bgColor: '#999999',
					width: '150rpx',
					height: '80rpx',
					shape: 'fillet',
					eventName: 'cancle'
				},
				// {
				// 	text: '拒绝',
				// 	color: '#FFFFFF',
				// 	bgColor: '#ff2542',
				// 	width: '150rpx',
				// 	height: '80rpx',
				// 	shape: 'fillet',
				// 	eventName: 'reject'
				// },
				{
					text: '通过',
					color: '#FFFFFF',
					bgColor: '#007AFF',
					width: '150rpx',
					height: '80rpx',
					shape: 'fillet',
					eventName: 'sure'
				}],
				titleText:'添加',
				contentText:'There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real!',
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				arr:[
					{
						name:"项目1"
					},
					{
						name:"项目2"
					}
				]
			}
		},
		methods: {
			 onAddTest() {
			      this.setData({
			        graph: {
			          w: 120,
			          h: 120,
			          type: 'image',
			          url: "/static/assets/images/test.jpg"
			        }
			      });
			    },
				  onExportJSON() {
				      this.$refs.canvasRef.exportFun().then(imgArr => {
				        console.log(JSON.stringify(imgArr));
				      }).catch(e => {
				        console.error(e);
				      });
				    },
			btn(){
				this.arr.push({name:'项目3'})
				console.log("你好啊皮卡丘")
				console.log(canvasDrag)
			},
			onClick(){
				console.log("hello world")
			},
			cancle(e){
				this.modalControl=false
			},
			sure(e){
				console.log(e,'想你')
				this.arr.push({name:e.inputText})
				this.modalControl=false
			},
			reject(e){

			},
			open(){
				this.modalControl=true;
			}
		}
	}
</script>
<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
