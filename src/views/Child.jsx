// import React from 'react'
// import {useEffect,useState} from 'react'
// import * as echarts from 'echarts'
// export default function Child() {
//   useEffect(()=>{
//     console.log(123);
//     let options = {
//       title: {
//         text: '销售量统计'
//       },
//       xAxis: {
//         data: ['冰淇淋', '面包', '巧克力', '矿泉水', '方便面', '饼干', '锅巴']
//       },
//       yAxis: {},
//       series: [
//         {
//           name: '销量',
//           type: 'line',
//           data: [100, 150, 120, 90, 30, 130, 110]
//         }
//       ]
//     }
//     let mychart = echarts.init(document.getElementById('myEcharts'))

//     const ws = new WebSocket('ws://localhost:9998')

//     ws.onopen = () => {
//       console.log('连接服务器端成功');
//       ws.send(1)
//     }
//     ws.onerror = () => {
//       console.log('连接服务器失败');
//     }
//     ws.onmessage = (msg) => {
//       console.log('接收到服务端发送的数据');
//       console.log(JSON.parse(msg.data));
//       options.series[0].data = JSON.parse(msg.data)
//       mychart.setOption(options)
//     }
//   },[])
//   return (
//     <div> <div id='myEcharts' style={{ width: '500px', height: '500px' }}></div></div>
//   )
// }
