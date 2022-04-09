<template>
  <div id="context">
    <div class="form-horizontal">
      <div class="form-group">
        <label  class="col-sm-2 control-label">用户名:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail3" placeholder="用户名不能少于三个字符" v-model="userName">
        </div>
        <span style="position: absolute;right: 90px;top: 30px;color: red">{{nameErrorMessage}}</span>
      </div>
      <div class="form-group">
        <label  class="col-sm-2 control-label">密码:</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="密码不能少于三个字符" v-model="passWord">
          <span style="position: absolute;right: 120px;top: 30px;color: red">{{passwordErrorMessage}}</span>
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-2 control-label" id="role" >角色:</label>
        <select class="form-control" id="inputPassword4" v-model="permissions">
          <option value="0">普通用户</option>
          <option value="1">管理员</option>
        </select>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default" @click="clearInfo">取消</button>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <button @click="addUser" class="btn btn-default">确认</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "add_user",
  data(){
    return{
      userName: '',
      passWord: '',
      permissions: 0,
      nameErrorMessage:'',
      passwordErrorMessage:''
    }
  },
  methods:{
    addUser(){
      console.log(this.userName,this.passWord,this.permissions)
      // 发送axios请求
      axios.post(
          "http://localhost:8080/user/addUser",
          {
            "userName":this.userName,
            "password":this.passWord,
            "role":this.permissions
          }
      ).then(res=>{
        if(res.data.code===200){
          this.$message({
            message: this.userName+"添加成功",
            type: 'success'
          })
          this.$router.push('/home/usermanagement')
        }else {
          this.$message.error({
            message: '用户添加失败',
          })
          this.errorMessage=res.data.message
        }
      },
      error=>{
        console.log(error)

      })
      //添加用户成功后直接返回到用户管理界面
      // this.$router.push('/home')
    },
    clearInfo(){
      this.userName=""
      this.passWord=""
      this.permissions=0
    }
  },
  watch:{
    userName(val){
      var patt = /\w{4,}/
      if (patt.test(val)){
        this.nameErrorMessage=""
      }else {
        this.nameErrorMessage="输入的用户名无效"
        return false
      }
    },
    passWord(val){
      var patt = /\w{4,}/
      if (patt.test(val)){
        this.passwordErrorMessage=""
      }else {
        this.passwordErrorMessage="输入的密码无效"
        return false
      }
    }
  }
}
</script>

<style scoped>
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#context {
  background-color: white;
  position: relative;
  width: 95%;
  height: 80%;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-control {
  width: 60%;
  margin-top: 20px;
}

.col-sm-2 {
  margin-top: 20px;
}

.btn-default {
  margin-top: 20px;
}

#inputPassword4 {
  width: 30%;
}
#inputEmail3,#inputPassword3{
  width: 35%;
}

#role {
  margin-right: 15px;
}
.form-horizontal{
  padding: 80px;
}
</style>
