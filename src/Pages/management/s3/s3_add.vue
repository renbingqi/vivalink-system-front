<template>
  <div id="api" style="width: 700px">
    <el-form ref="form" :model="sizeForm" label-width="250px" size="small" label-position="right">
      <el-form-item label="TenantName">
        <el-input v-model="sizeForm.TenantName"></el-input>
      </el-form-item>
      <el-form-item label="TenantId">
        <el-input v-model="sizeForm.TenantId"></el-input>
      </el-form-item>
      <el-form-item label="TenantKey">
        <el-input v-model="sizeForm.TenantKey"></el-input>
      </el-form-item>
      <el-form-item label="S3 Bucket">
        <el-input v-model="sizeForm.s3_bucket"></el-input>
      </el-form-item>
      <el-form-item label="aws_access_key_id">
        <el-input v-model="sizeForm.aws_access_key_id"></el-input>
      </el-form-item>
      <el-form-item label="aws_secret_access_key">
        <el-input v-model="sizeForm.aws_secret_access_key"></el-input>
      </el-form-item>
      <el-form-item label="File_Info">
        <el-select v-model="sizeForm.file_info.ECG" placeholder="请选择ECG文件数量">
          <el-option value=0></el-option>
          <el-option value=4></el-option>
          <el-option value=6></el-option>
          <el-option value=8></el-option>
          <el-option value=12></el-option>
        </el-select> ECG
        <br>
        <el-select v-model="sizeForm.file_info.Temp" placeholder="请选择Temp文件数量">
          <el-option value=0></el-option>
          <el-option value=1></el-option>
          <el-option value=2></el-option>
        </el-select> Temp
        <br>
        <el-select v-model="sizeForm.file_info.SpO2" placeholder="请选择SpO2文件数量">
          <el-option value=0></el-option>
          <el-option value=1></el-option>
          <el-option value=2></el-option>        </el-select> SpO2
        <br>
        <el-select v-model="sizeForm.file_info.BP" placeholder="请选择BP文件数量">
          <el-option value=0></el-option>
          <el-option value=1></el-option>
          <el-option value=2></el-option>        </el-select> BP
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "s3_add",
  data() {
    return {
      sizeForm: {
        TenantName: '',
        TenantId: '',
        TenantKey: '',
        s3_bucket:'',
        aws_access_key_id:'',
        aws_secret_access_key:'',
        file_info:{
          ECG:"6",
          Temp:"2",
          SpO2:"2",
          BP:"2"
        }
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.sizeForm);
    },
    onCancel(){
      this.$router.push("/home/s3management")
    }
  }
};
</script>

<style scoped>

#api{
  position: relative;
  top: 30px;
  left: 200px;
}
</style>
