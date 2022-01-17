<template>
  <el-table
      :data="errorList"
      style="width: 100%; overflow: auto"
      :row-class-name="tableRowClassName"
      height="10px"
      :default-sort="{prop:'result',order:'descending'}">
    <el-table-column
        prop=""
        label=""
        width="80px">
    </el-table-column>
    <el-table-column
        prop="recordTime"
        label="recordTime">
    </el-table-column>
    <el-table-column
        prop="res"
        label="Result"
    >
    </el-table-column>
  </el-table>


</template>

<style>
.el-table .warning1-row {
  background: #f7e1b5;
}

.el-table .warning2-row {
  background: #eea236;
}

.el-table .warning3-row {
  background: #c9302c;
}

</style>

<script>
const axios = require('axios').default;

export default {
  name: "api_detail",
  data() {
    return {
      errorList: [],
    }
  },
  mounted() {
    //获取对应接口错误信息
    var aid=this.$route.fullPath.split('=')[1]
    axios.get(
        "http://localhost:8080/api/detail",
        {
          params:{
            "aid":aid
          }
        }
    ).then(res => {
      console.log(res)
      this.errorList=res.data.message
    }, error => {
      console.log(error)
    });
    //获取sweden相关数据


  },
}
</script>
