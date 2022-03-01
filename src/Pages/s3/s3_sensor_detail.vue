<template>
  <div id="draw" style="overflow: scroll">
    <div id="ECG" style="width: 600px;height:400px;"></div>
    <div id="Temp" style="width: 600px;height:400px;"></div>
    <div id="spo2" style="width: 600px;height:400px;"></div>
    <div id="bp" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import timeStampToTime from '../../utils/timestampToTime.js'
import drawPicture from "../../utils/draw";
// 基于准备好的dom，初始化echarts实例

export default {
  name: "s3_sensor_detail",
  mounted() {
    // 获取当前url中的id

    var id = this.$route.fullPath.split("=")[1]
    var data = this.$store.state.s3Data[id.toString()]
    var date_list = []
    var ecg_list = []
    var temp_list = []
    var spo2_list = []
    var bp_list = []
    var data_obj = {}
    for (var item in data) {
      var ecg_sensor = 0;
      var temp_sensor = 0;
      var spo2_sensor = 0;
      var bp_sensor = 0;
      var format_date = timeStampToTime(data[item].recordTime)
      for (var i in data[item].sensor) {
        if (data[item].sensor[i].indexOf("ECG") !== -1) {
          ecg_sensor += 1;
        } else if (data[item].sensor[i].indexOf(".") !== -1) {
          temp_sensor += 1
        } else if (data[item].sensor[i].indexOf("O2") !== -1) {
          spo2_sensor += 1
        } else if (data[item].sensor[i].indexOf("BP") !== -1) {
          bp_sensor += 1
        }
      }
      data_obj[format_date] = {"ecg": ecg_sensor, "temp": temp_sensor, "spo2": spo2_sensor, "bp": bp_sensor}
    }
    for (var date in data_obj) {
      date_list.push(date)
      ecg_list.push(data_obj[date]["ecg"])
      temp_list.push(data_obj[date]["temp"])
      spo2_list.push(data_obj[date]["spo2"])
      bp_list.push(data_obj[date]["bp"])
    }
    drawPicture(date_list, ecg_list, "ECG设备", "ECG")
    drawPicture(date_list, temp_list, "Temp设备", "Temp")
    drawPicture(date_list, spo2_list, "SpO2设备", "spo2")
    drawPicture(date_list, bp_list, "BP设备", "bp")
  }
}
</script>

<style scoped>
/*#draw{*/
/*  position: relative;*/
/*}*/
#draw {

}

#ECG, #Temp, #spo2, #bp {
  float: left;
  margin-left: 10px;
}

</style>
