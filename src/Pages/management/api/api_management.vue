<template>
  <div style="width: 100%;overflow: scroll">
    <el-button
        class="addUser"
        size="mini"
        icon="el-icon-circle-plus-outline"
        @click="addapi">新增API监控
    </el-button>
    <el-table
        :data="tableData"
        style="width: 100%">

      <el-table-column
          label="Name"
          prop="name"
      width="650px">

      </el-table-column>
      <el-table-column
          label="Type"
          prop="type">
      </el-table-column>
      <el-table-column
          label="Alias"
      prop="alias">
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
  name: "api_management",
  data() {
    return {
      tableData: [],
      Superamdin:false
    }
  },
  methods: {
    addapi() {
      this.$router.push("/home/addapi")
    },
    handleEdit(index, row) {
      var aid=row.id
      this.$router.push("/home/apiedit?aid="+aid)
    },
    handleDelete(index) {
      //调用后端删除api的接口
      this.$confirm("此操作将删除该S3监控，是否继续?","删除提示",{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
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
          if( res.data.code === 200){
            this.$message({
              message:"接口:"+obj.alias +" 删除成功",
              type:"success"
            })
          }else {
            this.$message({
              message:"接口:"+obj.alias +" 删除失败",
              type:"error"
            })
          }
        }, error => {
          alert(error.toString())
        })
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
