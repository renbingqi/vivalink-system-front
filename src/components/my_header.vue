<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <div style="float: left;">
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
      <span>{{ userName }}</span>
    </el-header>
    <api-tab-menu v-show="showTab"></api-tab-menu>
    <router-view></router-view>
  </el-container>


</template>

<script>
import apiTabMenu from '../components/api_tab_menu'

export default {
  name: "header",
  data() {
    return {
      name: localStorage.getItem('user'),
      showTab:false
    }
  },
  computed: {
    userName() {
      return JSON.parse(this.name).name
    }
  },
  components: {
    apiTabMenu
  },
  methods: {
    loginout() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
  mounted() {
    console.log(this.$route.path.split('/')[2])
    if (this.$route.path.split('/')[2] === "api") {
      this.showTab=true;
      console.log(this.showTab)
    }
  }

}
</script>

<style scoped>
.el-header {
  background-color: #d4d4d4;
  color: #333;
  line-height: 60px;
}

span {
  font-size: 15px;
}
.el-tabs__content{
  padding: 0;
}
</style>
