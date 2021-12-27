<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown trigger="click">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
<!--          <el-dropdown-item command="loginout">退出</el-dropdown-item>-->
          <el-dropdown-item @click.native="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{userName}}</span>
    </el-header>
    <MyMain></MyMain>
  </el-container>


</template>

<script>
import MyMain from './my_main'
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
    MyMain
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
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
span{
  font-size: 15px;
}
</style>