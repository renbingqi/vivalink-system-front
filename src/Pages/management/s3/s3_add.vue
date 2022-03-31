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
      <el-form-item label="file_info">
        <el-input v-model="sizeForm.file_info"></el-input>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
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
        file_info:''
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.sizeForm);
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