<template>
    <view class="content">
        <view class="box"
              :style='{"padding":"30rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"100%"}'>
            <view class="logo">
                <!-- 				:style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
                 -->				<image
                    :style='{"padding":"0","boxShadow":"0 0 0px var(--publicMainColor)","margin":"100rpx auto 40rpx","borderColor":"#ccc","borderRadius":"40rpx","borderWidth":"2rpx","width":"160rpx","borderStyle":"solid"}'
                    src='http://localhost:8080/susheguanli/img/logo.jpg' mode="aspectFill">
            </image>
            </view>
            <view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.username" type="text" class="uni-input" name="" placeholder="账号" />
            </view>
            <view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.xueshengName" type="text" class="uni-input" name="" placeholder="姓名" />
            </view>
            <view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.password" type="password" class="uni-input" name="" placeholder="密码" />
            </view>
            <view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.xueshengPhone" type="text" class="uni-input" name="" placeholder="手机" />
            </view>
            <view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
                <input
                        :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.xueshengIdNumber" type="text" class="uni-input" name="" placeholder="身份证" />
            </view>
            <view v-if="tableName=='xuesheng'" class="uni-form-item uni-column">
                <picker @change="xueshengsexTypesChange" :value="xueshengsexTypesIndex" :range="xueshengsexTypesOptions"
                        range-key="indexName">
                    <view
                            :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"var(--publicSubColor)","color":"#fff","textAlign":"left","borderRadius":"20rpx 0","borderWidth":"0 10rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                            class="uni-input">{{ruleForm.sexValue?ruleForm.sexValue:"请选择性别"}}</view>
                </picker>
            </view>
            <view>
                <button @tap="register" type="primary"
                        :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicSubColor)","backgroundColor":"var(--publicMainColor)","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"2rpx","width":"100%","fontSize":"32rpx","borderStyle":"solid","height":"88rpx"}'>注册</button>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                xueshengsexTypesOptions: [],
                xueshengsexTypesIndex: 0,
                ruleForm: {},
                tableName: ""
            }
        },
        async onLoad() {
            let res = [];
            let table = uni.getStorageSync("loginTable");
            this.tableName = table;

            // 自定义下拉框值
            if (this.tableName == 'xuesheng') {
                let params = {
                    page: 1,
                    limit: 100,
                    dicCode: 'sex_types',
                }
                let res = await this.$api.page(`dictionary`, params);
                this.xueshengsexTypesOptions = res.data.list
            }

            this.styleChange()
        },
        methods: {

            // 下拉变化
            xueshengsexTypesChange(e) {
                this.xueshengsexTypesIndex = e.target.value
                this.ruleForm.sexValue = this.xueshengsexTypesOptions[this.xueshengsexTypesIndex].indexName
                this.ruleForm.sexTypes = this.xueshengsexTypesOptions[this.xueshengsexTypesIndex].codeIndex
            },

            styleChange() {
                this.$nextTick(() => {
                    // document.querySelectorAll('.uni-yaoxianStyle .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
                    //   el.style.backgroundColor = this.registerFrom.content.yaoxianStyle.backgroundColor
                    // })
                })
            },
            // 获取uuid
            getUUID() {
                return new Date().getTime();
            },
            // 注册
            async register() {
                if ((!this.ruleForm.username) && `xuesheng` == this.tableName) {
                    this.$utils.msg(`姓名不能为空`);
                    return
                }
                if ((!this.ruleForm.password) && `xuesheng` == this.tableName) {
                    this.$utils.msg(`密码不能为空`);
                    return
                }
                if ((!this.ruleForm.xueshengName) && `xuesheng` == this.tableName) {
                    this.$utils.msg(`姓名不能为空`);
                    return
                }
                if (`xuesheng` == this.tableName && this.ruleForm.xueshengPhone && (!this.$validate.isMobile(this.ruleForm
                                .xueshengPhone))) {
                    this.$utils.msg(`手机应输入手机格式`);
                    return
                }
                if (`xuesheng` == this.tableName && this.ruleForm.xueshengIdNumber && (!this.$validate.checkIdCard(this
                                .ruleForm.xueshengIdNumber))) {
                    this.$utils.msg(`身份证应输入正确格式`);
                    return
                }
                await this.$api.register(`xuesheng`, this.ruleForm);
                this.$utils.msgBack('注册成功');
                ;
            }
        }
    }
</script>
<style lang="scss" scoped>
    $color-primary: #b49950;

    .content {
        height: calc(100vh - 44px);
        overflow: auto;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-image: url(http://localhost:8080/susheguanli/img/front-img-bg.jpg);
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    .logo {
        text-align: center;

    image {
        height: 200upx;
        width: 200upx;
        margin: 0 0 60upx;
    }
    }

    .uni-form-item {
        margin-bottom: 40upx;
        padding: 0;

    .uni-input {
        font-size: 30upx;
        padding: 7px 0;
    }
    }

    button[type="primary"] {
        background-color: $color-primary;
        border-radius: 0;
        font-size: 34upx;
        margin-top: 60upx;
    }

    .links {
        text-align: center;
        margin-top: 40upx;
        font-size: 26upx;
        color: #999;

    view {
        display: inline-block;
        vertical-align: top;
        margin: 0 10upx;
    }

    .link-highlight {
        color: $color-primary
    }
    }

    .picker-select-input {
        line-height: 88rpx;
    }
</style>
