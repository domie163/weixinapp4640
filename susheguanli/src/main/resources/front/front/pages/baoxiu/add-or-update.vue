<template>
    <view class="content">
        <form class="app-update-pv">
                <!--<view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">学生</view>
                    <picker @change="xueshengChange" :value="xueshengIndex" :range="xueshengOptions" range-key="xueshengName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 16rpx var(--publicSubColor) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"var(--publicMainColor)","borderRadius":"20rpx","color":"var(--publicMainColor)","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.xueshengId?ruleForm.xueshengName:"请选择学生"}}</view>
                    </picker>
                </view>-->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">报修编号</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.baoxiuUuidNumnber" type="text" v-model="ruleForm.baoxiuUuidNumnber" placeholder="报修编号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">报修标题</view>
                <input   disabled
                         :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.baoxiuName" type="text" v-model="ruleForm.baoxiuName" placeholder="报修标题"></input>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">报修类型</view>
                    <picker @change="baoxiuTypesChange" :value="baoxiuTypesIndex" :range="baoxiuTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.baoxiuTypes?ruleForm.baoxiuValue:"请选择报修类型"}}</view>
                    </picker>
                </view>
<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">报修内容</view>
                <textarea :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.baoxiuContent" v-model="ruleForm.baoxiuContent" placeholder="报修内容"/>
            </view>
                <!-- <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">报修状态</view>
                    <picker @change="baoxiuZhuangtaiTypesChange" :value="baoxiuZhuangtaiTypesIndex" :range="baoxiuZhuangtaiTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.baoxiuZhuangtaiTypes?ruleForm.baoxiuZhuangtaiValue:"请选择报修状态"}}</view>
                    </picker>
                </view> -->

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					xueshengId: false,
					baoxiuUuidNumnber: false,
					baoxiuName: false,
					baoxiuTypes: false,
					baoxiuContent: false,
					insertTime: false,
					baoxiuZhuangtaiTypes: false,
					createTime: false,
        },
            ruleForm: {
					xueshengId: '',
					baoxiuUuidNumnber: this.getUUID(),
					baoxiuName: '',
					baoxiuTypes: '',//数字
					baoxiuValue: '',//数字对应的值
					baoxiuContent: '',
					insertTime: '',
					baoxiuZhuangtaiTypes: '',//数字
					baoxiuZhuangtaiValue: '',//数字对应的值
					createTime: '',
            },
            // 登陆用户信息
            user: {},
            baoxiuTypesOptions: [],
            baoxiuTypesIndex : 0,
            baoxiuZhuangtaiTypesOptions: [],
            baoxiuZhuangtaiTypesIndex : 0,
            xueshengOptions: [],//学生
            xueshengIndex : 0,//学生下标

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {
            let xueshengParams = {
                page: 1,
                limit: 100,
            }
            let xueshengData = await this.$api.page(`xuesheng`, xueshengParams);
            this.xueshengOptions = xueshengData.data.list;
		/*下拉框*/
			let baoxiuTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'baoxiu_types',
            }
			let baoxiuTypes = await this.$api.page(`dictionary`, baoxiuTypesParams);
			this.baoxiuTypesOptions = baoxiuTypes.data.list
		/*下拉框*/
			let baoxiuZhuangtaiTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'baoxiu_zhuangtai_types',
            }
			let baoxiuZhuangtaiTypes = await this.$api.page(`dictionary`, baoxiuZhuangtaiTypesParams);
			this.baoxiuZhuangtaiTypesOptions = baoxiuZhuangtaiTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`baoxiu`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.baoxiuId){
                this.ruleForm.baoxiuId = options.baoxiuId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            xueshengChange(e) {
                this.xueshengIndex = e.target.value
                this.ruleForm.xueshengName = this.xueshengOptions[this.xueshengIndex].xueshengName
                this.ruleForm.xueshengId = this.xueshengOptions[this.xueshengIndex].id
            },
            // 下拉变化
            baoxiuTypesChange(e) {
                this.baoxiuTypesIndex = e.target.value
                this.ruleForm.baoxiuValue = this.baoxiuTypesOptions[this.baoxiuTypesIndex].indexName
                this.ruleForm.baoxiuTypes = this.baoxiuTypesOptions[this.baoxiuTypesIndex].codeIndex
            },
            baoxiuZhuangtaiTypesChange(e) {
                this.baoxiuZhuangtaiTypesIndex = e.target.value
                this.ruleForm.baoxiuZhuangtaiValue = this.baoxiuZhuangtaiTypesOptions[this.baoxiuZhuangtaiTypesIndex].indexName
                this.ruleForm.baoxiuZhuangtaiTypes = this.baoxiuZhuangtaiTypesOptions[this.baoxiuZhuangtaiTypesIndex].codeIndex
            },
            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },
			// 日期控件
			insertTimeConfirm(val) {
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },

            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.baoxiuUuidNumnber)) {
                    this.$utils.msg(`报修编号不能为空`);
                    return
                }
				if ((!this.ruleForm.baoxiuName)) {
                    this.$utils.msg(`报修标题不能为空`);
                    return
                }
                if (this.ruleForm.id) {
                    await this.$api.update(`baoxiu`, this.ruleForm);
                } else {
					this.ruleForm.baoxiuZhuangtaiTypes=1
                    await this.$api.save(`baoxiu`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>