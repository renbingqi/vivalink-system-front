import * as echarts from "echarts";

function drawPicture(date_list,sensor_list){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
        title: {
            text: 'ECG设备'
        },
        tooltip: {},
        xAxis: {
            data: date_list
        },
        yAxis: {},
        series: [
            {
                name: '活跃设备数',
                type: 'bar',
                data: sensor_list
            }
        ]
    });
}

export default drawPicture