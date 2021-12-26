<template>
  <div>
    <div id="background">
      <!--      <img src="../assets/backgroud.jpg" alt="background">-->
    </div>
    <div id="form">
      <h1 id="h1">VivaLNK 综合监控系统</h1>
      <div id="content">
        <div class="form-horizontal">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputEmail3" placeholder="请输入用户名" name="userName"
                     v-model="userName">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="passWord">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> 记住密码
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <input id="submit" class="btn btn-info" type="submit" @click="submit">
            </div>
          </div>
        </div>
      </div>
      <div id="message">
        <div id="name_info" class="info"><span>{{usernameError}}</span></div>
        <div id="password_info" class="info"><span>{{ error }}</span></div>
      </div>
    </div>
  </div>

</template>

<script>
//引入axios
import axios from 'axios'

export default {
  name: "Login",
  data() {
    return {
      userName: "",
      passWord: "",
      error: "",
      usernameError:"",
    }
  },
  methods: {
    submit() {
      //发送axios请求向后端验证用户名密码
      axios.post(
          "http://localhost:8080/user/login",
          {
            username: this.userName,
            password: this.passWord
          }
      ).then(response => {
        var result=response.data.result;
        var errorStatus=response.data.status
            console.log(errorStatus)
        if(result === "false"){
          if(errorStatus === "2"){
            this.error = "密码错误"
          }else {
            this.error ="用户名不存在"
          }return false
        }else {
          this.error = ""
          let user={"name":this.userName}
          localStorage.setItem("user",JSON.stringify(user))
          this.$router.push("/home")
        }
          },
          error => {
            console.log("请求发送失败", error)
          })

    }
  }

}
</script>

<style scoped>
#background {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(../assets/backgroud.jpg) no-repeat center;
  background-size: 100% 100%;
  background-attachment: fixed; /* 不设置的话页面滑动时，背景会不铺满*/
  opacity: 0.5;
}

#form {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;

}

.form-control {
  width: 380px;
}

#h1 {
  position: absolute;
  top: 50px;
  padding-left: 158px;
  padding-bottom: 30px;
  opacity: 0.8;
  color: #5e5e5e;
}

#submit {
  width: 100px;
}

#content {
  position: absolute;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#message {
  position: absolute;
  left: 635px;
  top: 170px
}

.info {
  padding-bottom: 58px;
  color: red;
}

.form-group {
  margin-top: 30px;
}
</style>