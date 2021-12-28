<template>
  <div style="width: 100%">
    <el-button
        class="addUser"
        size="mini"
        @click="adduser">添加用户
    </el-button>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="编号"
          width="280px">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.uid }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="姓名">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.userName }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          label="权限">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" v-if="scope.row.role ===1">管理员账号</el-tag>
            <el-tag size="medium" v-else>普通账号</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
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
  name: "userManagement",
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    adduser(){
      this.$router.push("/home/adduser")
    },
    handleEdit(index,row) {
      console.log(index,row);
    },
    handleDelete(index) {
      var user=this.tableData[index]
      //调用后端删除用户的接口
      console.log(user)
      this.tableData.splice(index,1)
    }
  },
  mounted() {
    axios.get(
        "http://localhost:8080/user/management"
    ).then(res=>{
      var user_obj=JSON.parse(res.data.message)
      user_obj.forEach((val=>{
        this.tableData.push(val)
      }))
    },error=>{
      console.log(error)
    })
  }
}
</script>
<style>
.addUser{
  float: right;
  margin: 8px;
}
</style>
