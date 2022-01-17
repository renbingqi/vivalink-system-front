<template>
  <el-tabs type="border-card">
    <el-button
        v-for="(item,i) in buttonList" :key=i
        v-bind:class="i === itemType?isActive:'' "
        type="primary"
        plain
        @click="vclouddata(item)">
      {{item}}
    </el-button>
  </el-tabs>
</template>

<script>
export default {
  name: "api_tab_menu",
  data(){
    return{
      isActive:'active',
      buttonList:["vcloud","sweden"],
      itemType:0
    }
  },
  methods:{
    vclouddata(e) {
      console.log(e)
      if (e === "vcloud") {
        this.$router.push("/home/api/vcloud")
        this.itemType=0
      } else {
        this.$router.push("/home/api/sweden")
        this.itemType=1
      }

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
.active{
  background-color: #409EFF;
  color: white;
}
</style>
