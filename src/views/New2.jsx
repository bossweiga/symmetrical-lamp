import React, { useEffect } from 'react'
import ReactEcharts from "echarts-for-react";
// import  china from './js/china'
export default function New2(props) {
  const {info} = props;
  // useEffect(()=>{

  // },[info])
  const data = [
    { name: "标签1", value: 10 },
    { name: "标签2", value: 20 },
    { name: "标签3", value: 30 },
    { name: "标签4", value: 20 },
    { name: "标签5", value: 10 },
    // 其他数据...
  ];
  const options = {
    title: {
      text: "柱状图示例",
      left: "center",
    },
    tooltip: {},
    xAxis: {
      type: "category",
      data: data.map((item) => item.name),
    },
    yAxis: {},
    series: [
      {
        name: "柱状图",
        type: "bar",
        data: data.map((item) => item.value),
      },
    ],
  };
  return (
    <div>    <div style={{ width: "100%", height:  info ===true? "500px" :"0px"}}>
    <ReactEcharts option={options} style={{ height:  info ===true ?"100%" :"0%", width: "100%" }} />
  </div></div>
  )
}
