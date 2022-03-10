<template>
  <div id="api" style="width: 600px">
    <el-form ref="form" :model="apiInfo" label-width="120px" size="small" label-position="right">
      <el-form-item label="API">
        <el-input v-model="apiInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="Method">
        <el-radio-group v-model="apiInfo.type" size="medium">
          <el-radio border label="get"></el-radio>
          <el-radio border label="post"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Authorization">
        <el-radio-group v-model="apiInfo.auth" size="medium">
          <el-radio border label="True"></el-radio>
          <el-radio border label="False"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Params">
        <el-input  rows=4 type="textarea"  v-model="apiInfo.params"></el-input>
      </el-form-item>
      <el-form-item label="Condition">
        <el-input rows=4 type="textarea"  v-model="apiInfo.condition"></el-input>
      </el-form-item>
      <el-form-item label="Alias">
        <el-input v-model="apiInfo.alias"></el-input>
      </el-form-item>
      <el-form-item label="Token">
        <el-select v-model="apiInfo.token" placeholder="请选择token">
          <el-option v-for="(token,i ) in token_list" :key="i" :label=token.name :value=token.id></el-option>
        </el-select>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">修改</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "api_edit",
  data(){
    return{
      apiInfo:"",
      token_list:[{"id":1,"name":"vivalnk-testing-ucsf-af"},{"id":2,"name":"vcloud_app_token"},
        {"id":3,"name":"swe_token"}]
    }
  },
  mounted() {
    var aid=this.$route.fullPath.split("=")[1]
    this.$store.state.api_list.forEach(val=>{
      if(val.id === parseInt(aid)){
        this.apiInfo = val
      }
    })
  },
  methods:{
    onSubmit() {
      axios.post(
          "http://localhost:8080/api/apiUpdate",
          {
            "id":this.apiInfo.id,
            "name":this.apiInfo.name,
            "type":this.apiInfo.type,
            "auth":this.apiInfo.auth,
            "params":this.apiInfo.params,
            "condition":this.apiInfo.condition,
            "alias":this.apiInfo.alias,
            "token":this.apiInfo.token
          },
      ).then(res=>{
        if (res.data.code === 200){
          this.$router.push("/home/apimanagement")
        }
      })
    },
    onCancel(){
      this.$router.push("/home/apimanagement")
    }
  }
}
</script>

<style scoped>
#api{
  position: relative;
  top: 30px;
  left: 200px;
}
</style>
