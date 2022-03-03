<template>
  <div id="api" style="width: 600px">
    <el-form ref="form" :model="sizeForm" label-width="120px" size="small" label-position="right">
      <el-form-item label="API">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Method">
        <el-radio-group v-model="sizeForm.method" size="medium">
          <el-radio border label="get"></el-radio>
          <el-radio border label="post"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Authorization">
        <el-radio-group v-model="sizeForm.authorization" size="medium">
          <el-radio border label="True"></el-radio>
          <el-radio border label="False"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Params">
        <el-input  rows=4 type="textarea"  v-model="sizeForm.params"></el-input>
      </el-form-item>
      <el-form-item label="Condition">
        <el-input rows=4 type="textarea"  v-model="sizeForm.condition"></el-input>
      </el-form-item>
      <el-form-item label="Alias">
        <el-input v-model="sizeForm.alias"></el-input>
      </el-form-item>
      <el-form-item label="Token">
        <el-select v-model="sizeForm.token" placeholder="请选择token">
          <el-option v-for="(token,i ) in token_list" :key="i" :label=token.name :value=token.id></el-option>
        </el-select>
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
  name: "api_add",
  data() {
    return {
      sizeForm: {
        name: '',
        method: '',
        authorization: '',
        params:'',
        condition:'',
        alias:'',
        token:''
      },
      token_list:[{"id":1,"name":"vivalnk-testing-ucsf-af"},{"id":2,"name":"vcloud_app_token"},
        {"id":3,"name":"swe_token"}]
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