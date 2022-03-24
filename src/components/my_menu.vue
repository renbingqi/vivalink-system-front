<template>
  <el-aside width="200px" style="background-color: #b9def0">
    <el-menu background-color="#b9def0" active-text-color="#409EFF" unique-opened="false">
      <el-submenu index="1">
        <div slot="title" class="menu"><i class="el-icon-video-camera"></i>监控系统</div>
        <el-menu-item-group>
          <el-menu-item index="1-1" class="menu-item" @click="api_listener">API监控</el-menu-item>
          <el-menu-item index="1-2" class="menu-item" @click="s3_listener">S3监控</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <div slot="title" class="menu"><i class="el-icon-menu"></i>系统管理</div>
        <el-menu-item-group>
          <el-menu-item index="2-1" class="menu-item" @click="user_management">用户管理</el-menu-item>
          <el-submenu index="2-2">
            <template slot="title" class="monitor">监控管理</template>
            <el-menu-item index="2-2-1" class="menu-item" @click="api_management">API管理</el-menu-item>
            <el-menu-item index="2-2-2" class="menu-item" @click="s3_management">S3管理</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <div slot="title" class="menu"><i class="el-icon-setting"></i>自动化测试</div>
        <el-menu-item-group>
          <el-menu-item index="3-1" class="menu-item">选项1</el-menu-item>
          <el-menu-item index="3-2" class="menu-item">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "menu",
  methods: {
    api_listener(){
      this.$router.push("/home/api/vcloud")
    },
    s3_listener(){
      this.$router.push("/home/s3")
    },
    vclouddata() {
      this.$router.push("/home/api/vcloud")
    },
    swedendata() {
      this.$router.push("/home/api/sweden")
    },
    user_management(){
      this.$router.push("/home/usermanagement")
    },
    api_management(){
      this.$router.push("/home/apimanagement")
    },
    s3_management(){
      this.$router.push("/home/s3management")
    }
  }
}
</script>

<style scoped>
.menu-item {
  color: white;
  font-size: 15px;
}

</style>
