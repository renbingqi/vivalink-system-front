<template>
  <div id="addProject">
    <div id="form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="项目名称:" prop="name">
          <el-input v-model="ruleForm.name" ></el-input>
        </el-form-item>
        <hr>
        <el-form-item label="基本路径:" prop="url">
          <el-input v-model="ruleForm.url"></el-input>
        </el-form-item>
        <el-form-item label="描述:" prop="note">
          <el-input type="textarea" v-model="ruleForm.note"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "addProject",
  data() {
    return {
      ruleForm: {
        name: '',
        url: '',
        note: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入项目名称', trigger: 'blur'},
          {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
        ],
        url: [
          {required: true, message: '请输入基本路径', trigger: 'change'}
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style scoped>
#addProject {
  width: 98%;
  height: 80%;
  margin: 1%;
  background-color: white;
  padding-top: 30px;
}
#form{
  width: 50%;
  padding: 60px;
}

</style>
