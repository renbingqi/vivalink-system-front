<template >
  <div>
    <div id="operate">
      <el-button type="primary"  class="button" size="mini" icon="el-icon-circle-plus-outline" @click="add">新增</el-button>
      <el-button type="primary"  class="button" size="mini" icon="el-icon-s-promotion" @click="run">运行</el-button>
    </div>
    <el-table id="project"
              border="true"
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          label="编号"
          width="55"
          prop="id"
          align="center"
      >
      </el-table-column>
      <el-table-column
          label="项目名称"
          prop="name"
          align="center">
      </el-table-column>
      <el-table-column
          prop="count"
          label="用例数量"
          align="center">
      </el-table-column>
      <el-table-column
          prop="note"
          label="简要描述"
          show-overflow-tooltip
          align="center">
      </el-table-column>
      <el-table-column
          label="操作"
          show-overflow-tooltip
          align="center">
        <template slot-scope="scope">
          <el-button
              type="primary"
              size="mini"
              icon="el-icon-setting"
              @click="handleConfig(scope.$index, scope.row)">配置
          </el-button>
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
export default {
  name:"project",
  data() {
    return {
      tableData: [{
        id: 1,
        name: 'vCloud Data Query',
        count: 10,
        note:"vCloud Data Query API测试"
      },{
        id: 2,
        name: 'Analysis Service',
        count: 11,
        note:"Analysis API测试"
      },{
        id: 3,
        name: 'Server SDK',
        count: 2,
        note:"Server SDK API测试"
      }],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleConfig(){},
    add(){
      this.$router.push("project/add")
    },
    run(){
      console.log(this.multipleSelection)
    },
    show(){
      console.log("触发")
    }
  }
}
</script>
<style scoped>
  #project{
    padding:10px 10px 0 10px;

  }
  #operate{
    height: 40px;
  }
  .button{
    margin: 5px 0 5px 5px;
    text-align: center;
  }
</style>
