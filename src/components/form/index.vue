<template>
    <div class="form">
        <div style="padding: 10px; border-bottom: 1px solid #ccc;">Input表单</div>
        <s-form :rules="rules" :model="model" ref="loginForm">
            <s-form-item label="用户名" prop="username">
                <s-input v-model="model.username" placeholder="请输入用户名"></s-input>
            </s-form-item>
            <s-form-item label="密码" prop="password">
                <s-input v-model="model.password" placeholder="请输入密码"></s-input>
            </s-form-item>
            <s-form-item>
                <button @click="submitForm('loginForm')">登录</button>
            </s-form-item>
        </s-form>
        {{ model }}
    </div>
</template>

<script>
    import SForm from './SForm';
    import SFormItem from './SFormItem';
    import SInput from './SInput';
    import SNotice from '../notice/SNotice';

    export default {
        components: {
            SForm,
            SFormItem,
            SInput,
            SNotice
        },  
        data() {
            return {
                model: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [{ required: true, message: '用户名不能为空'}],
                    password: [{ required: true, message: '密码不能为空'}],
                }
            };
        },
        methods: {
            submitForm(form) {
                this.$refs[form].validate(valid => {
                    const notice = this.$create(SNotice, {
                            title: valid ? '登陆成功' : '登录失败',
                            message: '',
                            duration: 2000
                        });
                    notice.show();
                });
            }
        },
    }
</script>

<style scoped>
    .form {
        margin: 0 auto;
        text-align: center;
        
    }
    div {
        text-align: center;
    }
</style>