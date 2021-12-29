<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
    <el-table-column
        prop="api_name"
        label="接口名">
    </el-table-column>
    <el-table-column
        prop="result"
        label="错误率">
    </el-table-column>

    <el-table-column label="查看详情">
      <template slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">查看错误详情
        </el-button>
      </template>
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
  name: "api_view",
  methods: {
    tableRowClassName({row}) {
      var error = parseFloat(row.result)
      if (error > 0.3) {
        return 'warning3-row';
      } else if (error > 0.08) {
        return 'warning2-row';
      } else if (
          error > 0.03
      ) {
        return 'warning1-row'
      }
      return '';
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    axios.get(
      "http://localhost:8080/api/apiresult"
    ).then(res=>{
      this.tableData=res.data.message
    },error=>{
      console.log(error)
    })
  }
}
</script>
