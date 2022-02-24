<template>
  <el-table
      :data="result"
      style="width: 100%; overflow: auto"
      height="10px"
      :default-sort="{prop:'result',order:'descending'}">
    <el-table-column
        label=""
      width="50px">
    </el-table-column>
    <el-table-column
        prop="recordTime"
        label="日期"
        sortable>
    </el-table-column>
    <el-table-column
        prop="file_info"
        label="文件详情">
    </el-table-column>
    <el-table-column
        prop="sensor"
        label="设备详情">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import timeStampToTime from "../utils/timestampToTime";
export default {
  name: "s3_detail_result",
  data() {
    return {
      result: []
    }
  },
  mounted() {
    var finally_data=[]

    var id=this.$route.fullPath.split("=")[1]
    axios.get(
        "http://localhost:8080/s3/s3detail?id="+id+"&detail=result"
    ).then(res => {
      for (var i in res.data.message){
        var data_obj={}
        var format_time=timeStampToTime(res.data.message[i].recordTime)
        data_obj["file_info"]=res.data.message[i].file_info
        data_obj["recordTime"]=format_time
        data_obj["sensor"]=res.data.message[i].sensor
        finally_data.push(data_obj)
      }

      this.result = finally_data;
      var str_id=id.toString()
      var data={};
      data[str_id]=this.result
      this.$store.commit("setS3Data",data)
    }, err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
