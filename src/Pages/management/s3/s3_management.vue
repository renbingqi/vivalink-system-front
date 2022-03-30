<template>
  <div style="width: 100%;overflow: scroll">
    <el-button
        class="addUser"
        size="mini"
        icon="el-icon-circle-plus-outline"
        @click="adds3">新增S3监控
    </el-button>
    <el-table
        :data="tableData"
        style="width: 100%">

      <el-table-column
          label="TenantName"
          prop="tenantName"
      width="650px">

      </el-table-column>
      <el-table-column
          label="S3 Bucket"
          prop="s3_bucket">
      </el-table-column>
      <el-table-column label="操作"
      width="200px">
        <template slot-scope="scope">
          <el-button
              size="mini"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>


        </template>

      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "s3_management",
  data() {
    return {
      tableData: [],
      Superamdin:false
    }
  },
  methods: {
    adds3() {
      this.$router.push("/home/adds3")
    },
    handleEdit(index, row) {
      var aid=row.id
      this.$router.push("/home/apiedit?aid="+aid)
    },
    handleDelete(index) {
      var obj = this.tableData[index]
      //调用后端删除api的接口
      axios.get(
          "http://localhost:8080/api/apiDelete",
          {
            "params": {
              "aid": obj.id
            }
          }
      ).then(res => {
        console.log(res)
        this.tableData.splice(index, 1)
      }, error => {
        alert(error.toString())
      })

    }
  },
  mounted() {
    axios.get(
        "http://localhost:8080/s3/s3Management"
    ).then(res => {
      var user_obj = res.data.message
      user_obj.forEach((val => {
          this.tableData.push(val)
            console.log(val)
        }
      ))
    }, error => {
      console.log(error)
    })
    this.$store.state.api_list=this.tableData
  }
}
</script>
<style>
.addUser {
  float: right;
  margin: 8px;
}
</style>
