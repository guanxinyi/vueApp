export default {
    data() {
        return {
            username: '',
            password: '',
            openLoading: false,    //是否开启用户的Loading
            usernameErrorMsg: '',   //当用户名出现错误的时候
            passwordErrorMsg: '',   //当密码出现错误的时候
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        //*****注册用户的实行方法*****
        LoginAction() {
            this.checkForm() && this.axioLoginUser()
        },
        //*******axios注册用户方法*******
        axioLoginUser() {
            //先把按钮进行loading状态，防止重复提交
            this.openLoading = true
            sessionStorage.token = '123333'
            // setTimeout(() => {
            //   this.$router.push({ path: '/ShoppingMall' })
            // }, 1500)

            // axios({
            //   url: url.registerUser,
            //   method: 'post',
            //   data: {
            //     userName: this.username,
            //     password: this.password
            //   }
            // })
            //   .then(response => {


            //   })
            //   .catch((error) => {

            //   })

        },
        //**** 客户端验证
        checkForm() {
            let isOk = true
            if (this.username.length < 5) {
                this.usernameErrorMsg = "用户名不能小于5位"
                isOk = false
            } else {
                this.usernameErrorMsg = ''
            }
            if (this.password.length < 6) {
                this.passwordErrorMsg = "密码不能少于6位"
                isOk = false
            } else {
                this.passwordErrorMsg = ''
            }
            return isOk
        }


    },
    render() {
        return <div>
            <van-nav-bar
                title="用户登录"
            // left-text="返回"
            // left-arrow
            // click-left={this.goBack}
            />

            <div class="register-panel">
                <van-field
                    v-model={this.username}
                    label="用户名"
                    icon="clear"
                    placeholder="请输入用户名"
                    required
                    error-message={this.usernameErrorMsg}
                />
                <van-field
                    v-model={this.password}
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    error-message={this.passwordErrorMsg}
                    required
                />
                <div class="register-button">
                    <van-button type="primary" onClick={() => this.LoginAction()} loading={this.openLoading} size="large">登录</van-button>
                </div>
                <div>12112</div>
                {/* <span>注： 无账号的登陆自己注册一个</span> */}
            </div>

        </div >
    }
}
