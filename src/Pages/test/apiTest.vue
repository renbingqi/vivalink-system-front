<template>
  <div id="body">
    <div id="left-side">
      <div class="header">
        <p style="margin-left: 20px">项目列表</p>
        <div>
          <el-input placeholder="搜索项目" class="search"></el-input>
          <el-button type="primary"  class="search-button">添加项目</el-button>
        </div>
      </div>
      <div class="project-list"></div>
    </div>
    <div id="right-side">

    </div>
  </div>
</template>

<script>
export default {
  name: "apiTest"
}
</script>

<style scoped>

  #left-side{
    background-color: white;
    width: 30%;
    height: 500px;
    margin:5px 0 0 20px;
    float: left;
  }
  #right-side{
    border: solid black;
    width: 65%;
    height: 200px;
    float: right;
    margin:5px 20px 0 0;
  }
  .search{
    float: left;
    width: 55%;
    margin-left: 15px;
  }
  .search-button{
    float: right;
    width: 30%;
    margin-right: 10px;
  }
</style>
