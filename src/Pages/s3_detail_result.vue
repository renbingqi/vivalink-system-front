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
        sortable
        width="100px">
    </el-table-column>
    <el-table-column
        prop="file_info"
        label="S3文件详情"
        align="center">
      <el-table-column
          label="ECG"
          width="150px"
          prop='ecg'>
      </el-table-column>
      <el-table-column
          label="Temp"
          width="150px"
          prop='temp'>
      </el-table-column>
      <el-table-column
          label="Sp02"
          width="150px"
          prop='SpO2'>
      </el-table-column>
      <el-table-column
          label="BP"
          width="150px"
          prop='BP'>
      </el-table-column>
    </el-table-column>
    <el-table-column
        prop="sensor"
        label="活跃设备详情"
        align="center">

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
    var finally_data = []

    var id = this.$route.fullPath.split("=")[1]
    axios.get(
        "http://localhost:8080/s3/s3detail?id=" + id + "&detail=result"
    ).then(res => {
      for (var i in res.data.message) {
        var data_obj = {}
        var format_time = timeStampToTime(res.data.message[i].recordTime)
        var res_data=res.data.message[i]
        data_obj["ecg"] = JSON.parse(res_data.file_info).ecg
        data_obj["temp"] = JSON.parse(res_data.file_info).temperature
        data_obj["SpO2"] = JSON.parse(res_data.file_info).SpO2
        data_obj["BP"] = JSON.parse(res_data.file_info).BP
        data_obj["recordTime"] = format_time
        var sensor_data=JSON.parse(res.data.message[i].sensor)
        var sensor_list=Object.keys(sensor_data)
        var finally_sensor_list=[]
        sensor_list.sort()
        for (var n=0; n<sensor_list.length;n++){
          if (n+1 < sensor_list.length){
            finally_sensor_list.push(sensor_list[n]+"， ")
          }else {
            finally_sensor_list.push(sensor_list[n])
          }

        }
        data_obj["sensor"] = finally_sensor_list
        finally_data.push(data_obj)
      }
      this.result = finally_data;
      var str_id = id.toString()
      var data = {};
      data[str_id] = this.result
      this.$store.commit("setS3Data", data)
    }, err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
