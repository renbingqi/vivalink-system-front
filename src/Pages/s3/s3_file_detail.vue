<template>
  <div style="overflow: scroll;position: relative">
  <el-collapse id="result" v-model="activeName" accordion v-for="(value,key,index) in s3_file_list" :key="index" >
    <el-collapse-item :title=key :name=index class="file">
      <div v-for="(item,index) in value" :key="index">
        <hr>
        <el-link class="down" type="primary"  @click="download(item)" >点击下载</el-link>
        {{item}}
      </div>
    </el-collapse-item>
  </el-collapse>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "s3_file_detail",
  data() {
    return {
      activeName: '1',
      s3_file_list: {},
      file_url:''
    }
  },
  methods :{
    download(item){
      console.log(item)
      this.file_url=''
      var id=this.$route.fullPath.split("=")[1]
      // window.open("http://localhost:8080/s3/download_file?id="+id+"&file="+item,'_blank')
      window.location.href="http://localhost:8080/s3/download_file?id="+id+"&file="+item
    }
  },
  mounted() {
    // const loading=this.$loading({
    //   text: '拼命加载中',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // });
    var id=this.$route.fullPath.split("=")[1]
    axios.get("http://localhost:8080/s3/s3detail?id="+id+"&detail=s3_file").then(
        res=>{
          this.s3_file_list=res.data.message
          // loading.close()
        },err=>{
          console.log(err)
        }
    )
  }
}
</script>

<style scoped>

.down{
  text-align: right;
  position: absolute;
  right: 5%;
}
.file{
  padding-left: 20px;
}

</style>
