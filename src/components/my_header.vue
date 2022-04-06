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
    <s3-tab-menu v-show="showS3Tab"></s3-tab-menu>
    <router-view></router-view>
  </el-container>


</template>

<script>
import apiTabMenu from '../components/api_tab_menu'
import s3TabMenu from '../components/s3_tab_menu'
export default {
  name: "header",
  data() {
    return {
      name: localStorage.getItem('user'),
      showTab:false,
      showS3Tab:false,
      search:""

    }
  },
  computed: {
    userName() {
      return JSON.parse(this.name).name
    }
  },
  components: {
    apiTabMenu,
    s3TabMenu
  },
  methods: {
    loginout() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
    checkUrl(){
      var s3_list=["result","file","sensor"]
      if (this.$route.path.split('/')[2] === "api") {
        this.showTab=true;
        this.showS3Tab=false;
      }else if(s3_list.includes(this.$route.path.split('/')[3])){
        this.showS3Tab=true;
        this.showTab=false;
      }else {
        this.showTab=false;
        this.showS3Tab=false;
      }
    }
  },
  watch:{
    '$route':'checkUrl'
  },
  mounted() {
    if (this.$route.path.split('/')[2] === "api") {
      this.showTab=true;
    }else if(this.$route.path.split('/')[2] === "s3"){
      this.showS3Tab=true
    }
  },

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
