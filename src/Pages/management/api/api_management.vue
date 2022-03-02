<template>
  <div style="width: 100%;overflow: scroll">
    <el-button
        class="addUser"
        size="mini"
        icon="el-icon-circle-plus-outline"
        @click="adduser">新增API监控
    </el-button>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="Id"
          width="50px"
          prop="id">

      </el-table-column>
      <el-table-column
          label="Token"
          prop="token">
      </el-table-column>
      <el-table-column
          label="Name"
          prop="name">

      </el-table-column>
      <el-table-column
          label="Type"
          prop="type">
      </el-table-column>
      <el-table-column
          label="Auth "
      prop="auth">
      </el-table-column>
      <el-table-column
          label="Params"
      prop="params">
      </el-table-column>
      <el-table-column
          label="Condition"
      prop="condition">
      </el-table-column>
      <el-table-column
          label="Alias"
      prop="alias">
      </el-table-column>
      <el-table-column label="操作">
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
              @click="handleEdit(scope.$index, scope.row)">删除
          </el-button>


        </template>

      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "api_management",
  data() {
    return {
      tableData: [],
      Superamdin:false
    }
  },
  methods: {
    adduser() {
      this.$router.push("/home/adduser")
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index) {
      var user = this.tableData[index]
      //调用后端删除用户的接口
      axios.get(
          "http://localhost:8080/user/delUser",
          {
            "params": {
              "uid": user.uid
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
        "http://localhost:8080/api/apiManagement"
    ).then(res => {
      var user_obj = res.data.message
      user_obj.forEach((val => {
          this.tableData.push(val)
        }
      ))
    }, error => {
      console.log(error)
    })
  }
}
</script>
<style>
.addUser {
  float: right;
  margin: 8px;
}
</style>
