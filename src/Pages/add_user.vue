<template>
  <div id="context">
    <div class="form-horizontal">
      <div class="form-group">
        <label  class="col-sm-2 control-label">用户名:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail3" placeholder="用户名不能少于3个字符" v-model="userName">
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-2 control-label">密码:</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" placeholder="密码不能少于三个字符" v-model="passWord">
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
export default {
  name: "add_user",
  data(){
    return{
      userName: '',
      passWord: '',
      permissions: 0,
    }
  },
  methods:{
    addUser(){
      console.log(this.userName,this.passWord,this.permissions)
      //添加用户成功后直接返回到用户管理界面
      this.$router.push('/login')
    },
    clearInfo(){
      this.userName=""
      this.passWord=""
      this.permissions=0
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
  position: relative;
  width: 700px;
  height: 500px;
  top: 50%;
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
  width: 48%;
}

#role {
  margin-right: 15px;
}
</style>
