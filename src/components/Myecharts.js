import React from 'react'
import ReactEcharts from 'echarts-for-react';
export default function Myecharts() {



        const option = {
            title: {
                text: '第一个 ECharts 实例'
            },
            color: ['#00fa9a','#87cefa','#ff6666'],
            tooltip: {
                //此处必须是item传递值为对象，axis则是数组
                trigger: 'item',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                },
                formatter:(params)=>{
                    // console.log('params',params);

                }
              },
            legend: {
                top: 24, // 定位，和副标题一排
                right: 20, // 定位，和副标题一排，且在右边
                icon: "line", // 图例形状
                // circle,rect,line,roundRect,triangle,diamond,pin,arrow,none
                // itemWidth: 25, // 图例标记的图形宽度
                itemHeight: 20, // 图例标记的图形高度
                itemGap: 40, // 图例每项之间的间隔
                itemStyle: {}, // 图例的图形样式
                textStyle: {
                  // 图例文字属性
                  fontSize: 12,
                  color: "#333",
                  padding: [0, 0, 0, 8], // 修改文字和图标距离
                },
                data:['销量','金钱','时间'],
              
                itemWidth: 20,             // 图例图形宽度
               itemHeight: 14,      
            },
            xAxis: {
                data: ["1","2","3","4","5","6","7","8","9","0","11","12"],
                type: 'category',
            },
            
            yAxis: {},
            series: [
                {
                name: '销量',
                type: 'line', smooth: true,symbol: "none",
                data: [50, 40, 60, 56, 65, 45,63, 96, 56,75, 53, 63,]
            },
              
                {
                name: '金钱',
                type: 'scatter',
                data: [50, 25, 36, 20, 15, 20,10, 10, 20,20, 36, 10,],
            },
                {
                name: '时间',
                type: 'line',symbol: "none",
                data: [ 20,10, 10, 20,20, 36, 10,50, 25, 36, 20, 15,],
                smooth: true
            },
        
        ]
        };
    
  const onclick={
    click:(params)=>{
        //这里就可以控制模态框的弹出了
        console.log('params',params);
    }
  }
 
  return (
    <div>
        <div id='myecharts' style={{width:'90%',height:'300px'}}></div>
        <ReactEcharts option={option} onEvents={onclick}></ReactEcharts>
    </div>

  )
}
