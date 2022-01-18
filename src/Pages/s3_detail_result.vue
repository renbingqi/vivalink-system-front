<template>
  <el-table
      :data="result"
      style="width: 100%; overflow: auto"
      :row-class-name="tableRowClassName"
      height="10px"
      :default-sort="{prop:'result',order:'descending'}">
    <el-table-column
        label=""
      width="50px">
    </el-table-column>
    <el-table-column
        prop="recordTime"
        label="日期">
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

export default {
  name: "s3_detail_result",
  data() {
    return {
      result: []
    }
  },
  mounted() {
    var id=this.$route.fullPath.split("=")[1]
    axios.get(
        "http://localhost:8080/s3/s3detail?id="+id+"&detail=result"
    ).then(res => {
      this.result = res.data.message
      console.log(this.result)
    }, err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
