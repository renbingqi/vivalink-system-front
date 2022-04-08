<template>
  <div id="body">
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
                <el-button  plain class="project-button" @click="handleClick(scope)"> {{scope.row}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div id="right-side">

    </div>
  </div>
</template>

<script>
export default {
  name: "apiTest",
  data(){
    return {
      tableData:["vcloud","vcloud2","vcloud3","vcloud4","vcloud5","vcloud6","vcloud7"]
    }
  },
  methods:{
    handleClick(scope){
      console.log(scope)
    }
  }
}
</script>

<style scoped>
#body{
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
  border: solid black;
  width: 70%;
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
.header,.project-list{
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

.project-list{
  position: absolute;
  top: 20%;
  width: 100%;
}
.add_item{
  width: 69px;
}
.project-button{
  width: 100%;
}
</style>
