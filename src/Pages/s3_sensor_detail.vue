<template>
  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import timeStampToTime from '../utils/timestampToTime.js'
import drawPicture from "../utils/draw";
// 基于准备好的dom，初始化echarts实例

export default {
  name: "s3_sensor_detail",
  mounted() {
    // 获取当前url中的id

    var id = this.$route.fullPath.split("=")[1]
    var data = this.$store.state.s3Data[id.toString()]

    var date_list = []
    var ecg_list = []
    var data_obj = {}
    for (var item in data) {
      var ecg_sensor = 0;
      var temp_sensor = 0;
      var spo2_sensor = 0;
      var bp_sensor = 0;
      var format_date = timeStampToTime(data[item].recordTime)
      var obj_data = JSON.parse(data[item].sensor)
      for (var i in obj_data) {
        if (i.indexOf("ECG") !== -1) {
          ecg_sensor += 1;
        } else if (i.indexOf(".") !== -1) {
          temp_sensor += 1
        } else if (i.indexOf("O2") !== -1) {
          spo2_sensor += 1
        } else if (i.indexOf("BP") !== -1) {
          bp_sensor += 1
        }
      }
      data_obj[format_date] = {"ecg": ecg_sensor, "temp": temp_sensor, "spo2": spo2_sensor, "bp": bp_sensor}
      console.log(data_obj)
    }
    for (var date in data_obj){
      date_list.push(date)
      ecg_list.push(data_obj[date]["ecg"])
    }
    drawPicture(date_list,ecg_list)
  }
}
</script>

<style scoped>

</style>
