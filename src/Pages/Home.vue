<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <MyMenu></MyMenu>
    <el-container>
      <MyHeader></MyHeader>
    </el-container>
  </el-container>
</template>


<style>
.el-tabs--border-card>.el-tabs__content{
  padding: 0;
}
</style>

<script>
import MyMenu from '../components/my_menu'
import MyHeader from '../components/my_header'
export default {
  name:"Hone",
  data() {
    return {
      name:"Vivalnk_admin"
    }
  },
  components:{
    MyMenu,
    MyHeader
  },

};
</script>
