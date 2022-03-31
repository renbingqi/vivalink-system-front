<template>
  <div id="api" style="width: 600px">
    <el-form ref="form" :model="s3Info" label-width="250px" size="small" label-position="right">
      <el-form-item label="TenantName">
        <el-input v-model="s3Info.tenantName"></el-input>
      </el-form-item>
      <el-form-item label="TenantId">
        <el-input v-model="s3Info.tenantId"></el-input>
      </el-form-item>
      <el-form-item label="TenantKey">
        <el-input v-model="s3Info.tenantKey"></el-input>
      </el-form-item>
      <el-form-item label="S3 Bucket">
        <el-input v-model="s3Info.s3_bucket"></el-input>
      </el-form-item>
      <el-form-item label="aws_access_key_id">
        <el-input v-model="s3Info.aws_access_key_id"></el-input>
      </el-form-item>
      <el-form-item label="aws_secret_access_key">
        <el-input v-model="s3Info.aws_secret_access_key"></el-input>
      </el-form-item>
      <el-form-item label="file_info">
        <el-input v-model="s3Info.file_info"></el-input>
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
  name: "s3_edit",
  data(){
    return{
      s3Info:"",
    }
  },
  mounted() {
    var aid=this.$route.fullPath.split("=")[1]
    this.$store.state.s3_list.forEach(val=>{
      if(val.id === parseInt(aid)){
        this.s3Info = val
        console.log(this.s3Info)
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
          this.$router.push("/home/s3management")
        }
      })
    },
    onCancel(){
      this.$router.push("/home/s3management")
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
