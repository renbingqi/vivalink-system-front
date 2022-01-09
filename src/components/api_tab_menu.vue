<template>
  <el-tabs type="border-card">
    <el-button type="primary" plain @click="vclouddata">vcloud</el-button>
    <el-button type="primary" plain @click="swedendata">sweden</el-button>
  </el-tabs>
</template>

<script>
export default {
  name: "api_tab_menu",
  methods:{
    vclouddata(){
      console.log("111")
      this.$router.push("/home/api/vcloud")
    },
    swedendata(){
      console.log("222")
      this.$router.push("/home/api/sweden")
    }
  }
}
</script>

<style scoped>
.el-tabs__content{
  padding: 0;
}
.el-button {
  margin-left: 0;
}
</style>
