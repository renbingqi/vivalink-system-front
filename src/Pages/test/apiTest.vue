<template>
  <div id="body">
    <el-dialog title="新增API" :visible.sync="dialogFormVisible" width="95%" top="1vh">
      <div style="height: 500px;">
        <div class="header">
          <div class="Method">
            <el-select v-model="value" placeholder="Method">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="url">
            <el-input></el-input>
          </div>
          <div class="send">
            <el-button type="primary" round>Send</el-button>
          </div>
        </div>
        <div class="header_type">
          <el-tabs v-model="activeName" @tab-click="handleClick_tag">
            <el-tab-pane label="Params" name="first">
              <div>
                <el-table
                    :data="tableData_Params"
                    border
                    style="width: 100%"
                height="150px">
                  <el-table-column
                      prop="key"
                      label="KEY"
                      width="280">
                  </el-table-column>
                  <el-table-column
                      prop="value"
                      label="VALUE"
                      width="280">
                  </el-table-column>
                  <el-table-column
                      prop="description"
                      label="DESCRIPTION"
                      width="280">
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Headers" name="second">Headers</el-tab-pane>
            <el-tab-pane label="Body" name="third">Body</el-tab-pane>
          </el-tabs>
        </div>

      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <div id="left-side">
      <div class="header">
        <div class="search">
          <el-input placeholder="搜索项目" style="width: 80%" size="small"></el-input>
        </div>
        <div class="search-button">
          <el-button type="primary" size="small" class="add_item">添加项目</el-button>
        </div>

      </div>
      <div class="project-list">
        <div class="table">
          <el-table
              :data="tableData"
              style="width: 100%">
            <el-table-column
                label="项目列表"
                align="center">
              <template slot-scope="scope">
                <el-button plain class="project-button" @click="handleClick(scope)"> {{ scope.row }}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div id="right-side">
      <el-table id="project"
                border="true"
                ref="multipleTable"
                :data="tableData_api"
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
            label="用例名称"
            prop="name"
            align="center">
        </el-table-column>
        <el-table-column
            prop="module"
            label="模块"
            align="center">
        </el-table-column>
        <el-table-column
            prop="createTime"
            label="创建时间"
            show-overflow-tooltip
            align="center">
        </el-table-column>
        <el-table-column
            prop="updateTime"
            label="更新时间"
            show-overflow-tooltip
            align="center">
        </el-table-column>
        <el-table-column
            label="操作"
            show-overflow-tooltip
            align="center"
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
      <div class="block" style="width: 100%">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="23"
            class="pagination">
        </el-pagination>
        <el-button type="primary"
                   size="mini"
                   icon="el-icon-circle-plus-outline"
                   style="margin-left: 480px"
                   @click="dialogFormVisible = true">新增
        </el-button>
        <el-button type="danger"
                   size="mini"
                   icon="el-icon-delete"
                   style="margin-left: 20px">删除选中项
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "apiTest",
  data() {
    return {
      tableData_api: [{
        id: 1,
        name: 'vCloud Data Query ',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/01"
      }, {
        id: 2,
        name: 'Analysis Service',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/03"
      }, {
        id: 3,
        name: 'Server SDK',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/05"
      }, {
        id: 1,
        name: 'vCloud Data Query',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/01"
      }, {
        id: 2,
        name: 'Analysis Service',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/03"
      }, {
        id: 3,
        name: 'Server SDK',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/05"
      }, {
        id: 1,
        name: 'vCloud Data Query',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/01"
      }, {
        id: 2,
        name: 'Analysis Service',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/03"
      }, {
        id: 3,
        name: 'Server SDK',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/05"
      }, {
        id: 1,
        name: 'vCloud Data Query',
        module: "Get Token",
        createTime: "2022/04/01",
        updateTime: "2022/04/01"
      }],
      tableData: ["vcloud", "vcloud2", "vcloud3", "vcloud4", "vcloud5", "vcloud6", "vcloud7", "vcloud5", "vcloud6", "vcloud7"],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      options: [
        {
          value: '选项1',
          label: 'GET'
        },
        {
          value: '选项2',
          label: 'POST'
        },

      ],
      activeName: 'second',
      tableData_Params: [{
        key: '2016-05-02',
        value: '王小虎',
        description: '上海市普陀区金沙江路 1518 弄'}]

    }
  },
  methods: {
    handleClick(scope) {
      console.log(scope)
    },
    handleClick_tag(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
#body {
  position: relative;
}

#left-side {
  background-color: white;
  width: 20%;
  height: 600px;
  margin: 5px 0 0 20px;
  position: absolute;
  overflow: auto;
}

#right-side {
  width: 75%;
  height: 200px;
  margin: 5px 20px 0 0;
  position: absolute;
  right: 5px;
}

.search {
  position: absolute;
  width: 70%;
  margin-top: 15px;
  /*margin-left: 15px;*/
}

.header, .project-list {
  position: absolute;
  width: 100%;
}

.search-button {
  position: absolute;
  width: 30%;
  margin-top: 15px;
  right: 12px;
  /*margin-right: 10px;*/
}

.project-list {
  position: absolute;
  top: 10%;
  width: 100%;
}

.add_item {
  width: 69px;
}

.project-button {
  width: 100%;
}


.url, .Method, .send {
  position: absolute;
}

.Method {
  width: 100px;
  left: 200px;
}

.url {
  width: 600px;
  left: 300px;
}

.send {
  left: 950px;
}

.header_type, .header {
  position: absolute;
}

.header_type {
  top: 120px;
  left:220px
}
</style>
