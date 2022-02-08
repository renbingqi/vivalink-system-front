<template>
  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import * as echarts from 'echarts';
// 基于准备好的dom，初始化echarts实例

export default {
  name: "s3_sensor_detail",
  mounted() {
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: {
        text: 'ECG设备'
      },
      tooltip: {},
      xAxis: {
        data: ['2月1日', '2月2日', '2月3日', '2月4日', '2月5日']
      },
      yAxis: {
      },
      series: [
        {
          name: '活跃设备数',
          type: 'bar',
          data: [5, 20, 36, 10, 10]
        }
      ]
    });
  }
}
</script>

<style scoped>

</style>
