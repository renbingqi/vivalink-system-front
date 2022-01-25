<template>
  <el-tabs type="border-card">
    <el-button
        v-for="(item,i) in buttonList" :key=i
        v-bind:class="i === itemType?isActive:'' "
        type="primary"
        plain
        @click="chooseItem(i)">
      {{item}}
    </el-button>
  </el-tabs>
</template>

<script>
export default {
  name: "s3_tab_menu",
  data(){
    return{
      isActive:'active',
      buttonList:["S3监控结果","S3文件展示","活跃设备趋势图"],
      itemType:0
    }
  },
  methods:{
    chooseItem(e) {
      var id= this.$route.fullPath.split('=')[1]
      if (e === 0) {
        this.$router.push("/home/s3/result?detail="+id)
        this.itemType=0
      } else if(e === 1){
        this.$router.push("/home/s3/file?detail="+id)
        this.itemType=1
      }else {
        this.$router.push("/home/s3/sensor?detail="+id)
        this.itemType=2
      }

    },
    checkUrl(){
      var tab= this.$route.fullPath.split("/")
      if(tab.length !== 4){
        this.itemType=0
      }else {
        return
      }
    }
  },
  watch:{
    '$route':'checkUrl'
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
