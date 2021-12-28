<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <div style="float: left;" >
        <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
      </div>
      <el-button style="float: left; margin: 16px 0 0 10px"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"><span class="el-icon-search"></span>
      </el-button>
      <el-dropdown trigger="click">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <!--          <el-dropdown-item command="loginout">退出</el-dropdown-item>-->
          <el-dropdown-item @click.native="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="el-icon-s-custom"></span>
      <span>&nbsp;&nbsp;</span>
      <span>{{userName}}</span>

    </el-header>
<!--    <userManagement></userManagement>-->
    <addUser></addUser>
  </el-container>


</template>

<script>
// import userManagement from '../Pages/user_management'
import addUser from '../Pages/add_user'
export default {
name: "header",
  data(){
  return{
    name:localStorage.getItem('user')
  }
  },
  computed:{
    userName(){
      return JSON.parse(this.name).name
    }
  },
  components:{
    // userManagement,
    addUser
  },
  methods: {
    loginout(){
        localStorage.removeItem("user");
        this.$router.push("/login");
    }
  },
}
</script>

<style scoped>
.el-header {
  background-color: whitesmoke;
  color: #333;
  line-height: 60px;
}
span{
  font-size: 15px;
}
</style>
