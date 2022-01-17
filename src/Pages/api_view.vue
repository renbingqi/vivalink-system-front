<template>
  <el-table
      :data="tableData"
      style="width: 100%; overflow: auto"
      :row-class-name="tableRowClassName"
      height="10px"
      :default-sort="{prop:'result',order:'descending'}">
    <el-table-column
        prop="api_name"
        label="接口名">
    </el-table-column>
    <el-table-column
        prop="result"
        label="错误率"
        sortable
    >
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
    },
    handleEdit(index,item){
      var aid=item.aid
      this.$router.push("/home/api/detail?aid="+aid)
    }
  },
  data() {
    return {
      tableData: [],
      vcloud_data: [],
      sweden_data: []
    }
  },
  watch: {
    $route: {
      handler: function (val) {
        var path = val.fullPath.split('/')[3]
        if (path === "vcloud") {
          this.tableData = []
          this.tableData = this.vcloud_data
        } else {
          this.tableData = []
          this.tableData = this.sweden_data
        }
      }, deep: true
    }
  },
  mounted() {
    //获取vcloud相关数据
    axios.get(
        "http://localhost:8080/api/apiresult",
        {
          params: {
            "server": "vcloud"
          }
        }
    ).then(res => {
      this.vcloud_data = res.data.message
      var path = this.$route.path.split('/')[3]
      if (path === "vcloud") {
        this.tableData = this.vcloud_data
      }
    }, error => {
      console.log(error)
    });
    //获取sweden相关数据
    axios.get(
        "http://localhost:8080/api/apiresult",
        {
          params: {
            "server": "sweden"
          }
        }
    ).then(res => {
      this.sweden_data = res.data.message
      var path = this.$route.path.split('/')[3]
      if (path === "sweden") {
        console.log(this.sweden_data)
        this.tableData = this.sweden_data
      }
    }, error => {
      console.log(error)
    });

  },
}
</script>
