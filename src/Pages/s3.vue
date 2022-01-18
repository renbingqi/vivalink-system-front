<template>
  <div class="div3">
    <div id="container">

      <div class="row">
        <div class="col-xs-6 col-md-3">

          <div class="thumbnail" @click="s3detail(item.id)" v-for="item in s3Data" :key="item.id">
            <div class="sub-thumbnail">{{ item.s3_name }}</div>
            <div class="sub-thumbnail">{{ item.recordTime }} Days</div>
            <div class="sub-thumbnail">运行状态
              <div v-if="item.status==='true'" class="status_green"></div>
              <div v-else class="status_red"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "s3",
  data() {
    return {
      s3Data: [],
    }
  },
  methods:{
    s3detail(id){
      console.log(id)
      this.$router.push("/home/s3/result?detail="+id)
    }
  },
  mounted() {
    axios.get(
        "http://localhost:8080/s3/s3Dashboard"
    ).then(res => {
          this.s3Data = res.data.message
        },
        err => {
          console.log(err)
        })
  }
}
</script>

<style scoped>


#container {
  background-color: white;
  margin: 10px;
  height: 100%;
  width: 100%;
}


.thumbnail {
  height: 180px;
  width: 180px;
  float: left;
  margin: 10px;
}

.col-xs-6, .col-md-3 {
  width: 100%;
  height: 100%;
}

.thumbnail:hover,
.thumbnail:focus,
.thumbnail:active {
  border-color: #337ab7;
  cursor: pointer;
}

.sub-thumbnail {
  padding: 10px 10px 10px 50px;
  font-size: 20px;
}

.status_green, .status_red {
  float: right;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transform: translate(-10%, 12%);
}

.status_green {
  background-color: green;
}

.status_red {
  background-color: red;
}
</style>
