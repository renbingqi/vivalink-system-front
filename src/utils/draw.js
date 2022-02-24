import * as echarts from "echarts";

function drawPicture(date_list,sensor_list,sensorType,id){
    var tab_id=id
    var myChart = echarts.init(document.getElementById(tab_id));
    myChart.setOption({
        title: {
            text: sensorType
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
