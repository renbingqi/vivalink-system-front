<template>
  <el-tabs type="border-card">
    <el-button v-bind:class="isActive" type="primary" plain @click="vclouddata" autofocus=true>vcloud</el-button>
    <el-button v-bind:class="isActive" type="primary" plain @click="swedendata">sweden</el-button>
  </el-tabs>
</template>

<script>
export default {
  name: "api_tab_menu",
  data(){
    return{
      isActive:'active'
    }
  },
  methods:{
    vclouddata(){
      this.$router.push("/home/api/vcloud")
    },
    swedendata(){
      this.$router.push("/home/api/sweden")
    }
  },

}
</script>

<style scoped>
.el-tabs__content{
  padding: 0;
}
.el-button {
  margin-left: 0;
}
.active{
  background-color: #409EFF;
  color: white;
}
</style>
