

import React from 'react';
import { Layout,Row, Col,Modal,Table } from "antd";
import ReactEcharts from 'echarts-for-react';

const echarts = require('echarts');

//气泡图假定数据
var data = [
    [['10000人以上',37.5,100000000,'A7','无工作经验'],['1000-5000人',11.46,100000000,'A5','无工作经验'],['500-1000人',16,100000000,'A4','无工作经验'],['150-500人',16.92,100000000,'A3','无工作经验'],['50-150人',22.5,100000000,'A2','无工作经验'],['少于50人',11.11,100000000,'A1','无工作经验']],
    [['10000人以上',48.21,150000000,'B7','1-3年经验'],['5000-10000人',50,150000000,'B6','1-3年经验'],['1000-5000人',67.7,150000000,'B5','1-3年经验'],['500-1000人',31,150000000,'B4','1-3年经验'],['150-500人',43.85,150000000,'B3','1-3年经验'],['50-150人',39.17,150000000,'B2','1-3年经验'],['少于50人',46.67,150000000,'B1','1-3年经验']],
    [['10000人以上',10.71,200000000,'C7','3-5年经验'],['5000-10000人',50,200000000,'C6','3-5年经验'],['1000-5000人',14.58,200000000,'C5','3-5年经验'],['500-1000人',37,200000000,'C4','3-5年经验'],['150-500人',24.62,200000000,'C3','3-5年经验'],['50-150人',28.33,200000000,'C2','3-5年经验'],['少于50人',31.11,200000000,'C1','3-5年经验']],
    [['10000人以上',9.57,250000000,'D7','5-7年经验'],['1000-5000人',5.21,250000000,'D5','5-7年经验'],['500-1000人',12,250000000,'D4','5-7年经验'],['150-500人',12.31,250000000,'D3','5-7年经验'],['50-150人',8.67,250000000,'D2','5-7年经验'],['少于50人',11.11,250000000,'D1','5-7年经验']],
    [['500-1000人',4.8,300000000,'E4','7-10年经验'],['150-500人',5.77,300000000,'E3','7-10年经验'],['50-150人',6.83,300000000,'E2','7-10年经验']],
    [['1000-5000人',6.58,350000000,'F5','10年以上经验'],['150-500人',8.54,350000000,'F3','10年以上经验'],['50-150人',7.5,350000000,'F2','10年以上经验']],
];

class LineMarkerEcharts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone_data: [],
            price_data:[],
            isModalOpen:false,//是否显示对话框
            dataSource:[] //表格数据源
        }
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    

    getBubbleOption = ()=> {
        const bubbleOption= {
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                offset: 0,
                color: '#f7f8fa'
            }, {
                offset: 1,
                color: '#cdd0d5'
            }, {
                offset: 2,
                color: '#cdd0d5'
            }, {
                offset: 3,
                color: '#cdd0d5'
            }, {
                offset: 4,
                color: '#cdd0d5'
            }, {
                offset: 5,
                color: '#cdd0d5'
            }]),
            title: {
                text: '西安市不同规模企业对岗位工作经验要求情况',
                bottom: '5px',
                left: '150px',
            },
            backgroundColor: '#ffffff',
            legend: {
                right: 10,
                data: ['无工作经验', '1-3年经验','3-5年经验','5-7年经验','7-10年经验','10年以上经验']
            },
            tooltip:{
              formatter: function (params) {
                  var value = params.value;
                  return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); ' +
                      '              font-size: 16px;' +
                      '              padding-bottom: 2px;' +
                      '              margin-bottom: 2px;"' +
                      '>' + value[2] + '(' + value[1] + ')' +
                      '</div>';
              }  
            },
            xAxis: {
                data:['少于50人','50-150人','150-500人','500-1000人','1000-5000人','5000-10000人','10000人以上'],
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true,
                axisLabel : {
                    formatter: '{value} %'
                },
            },
            series: [
                {
                    name: '无工作经验',
                    data: data[0],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(251, 118, 123, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(251, 118, 123)'
                            }, {
                                offset: 1,
                                color: 'rgb(251, 118, 123)'
                            }])
                        }
                    }
                },
                {
                    name: '1-3年经验',
                    data: data[1],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(237, 125, 49, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(237, 125, 49)'
                            }, {
                                offset: 1,
                                color: 'rgb(237, 125, 49)'
                            }])
                        }
                    }
                },

                {
                    name: '3-5年经验',
                    data: data[2],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(255, 192, 0, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(255, 192, 0)'
                            }, {
                                offset: 1,
                                color: 'rgb(255, 192, 0)'
                            }])
                        }
                    }
                },

                {
                    name: '5-7年经验',
                    data: data[3],
                    type: 'line',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(91, 155, 213, 0.)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(91, 155, 213)'
                            }, {
                                offset: 1,
                                color: 'rgb(91, 155, 213)'
                            }])
                        }
                    }
                },

                {
                    name: '7-10年经验',
                    data: data[4],
                    type: 'line',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(112, 173, 71, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(112, 173, 71)'
                            }, {
                                offset: 1,
                                color: 'rgb(112, 173, 71)'
                            }])
                        }
                    }
                },

                { 
                    name: '10年以上经验',
                    data: data[5],
                    type: 'line',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(129, 227, 238, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(129, 227, 238)'
                            }, {
                                offset: 1,
                                color: 'rgb(25, 183, 207)'
                            }])
                        }
                    }
                },
            ]
        }
        return bubbleOption;
    }

    //鼠标单击气泡时，调用的对象
    onclick = {
        'click': this.onChartClick.bind(this)
       
    }
	
    onChartClick(param) { //参数param就是当前鼠标单击的气泡数据
        console.log('param.data',param)
        
        this.setState({ 
            isModalOpen: true  //对话框可见
        })
        let temp = []
           temp.push({ //将当前的气泡数据存入临时数组temp中
               name:param.data[0],
               count:param.data[1],
               readCount:param.data[2],
               type:param.data[3],
               value:param.data[4]
           })

        this.setState({
            dataSource: temp  //将临时数组temp放入Table组件的数据源中
        })
    }
    handleOk(){
        this.setState({
            isModalOpen: false //关闭对话框
        })
    }
    handleCancel(){
        this.setState({
            isModalOpen: false //关闭对话框
        })
    }
    render() {
        const columns = [  //表格的列
            {
                title: '描述',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '人数',
                dataIndex: 'count',
                key: 'count',
            },
            {
                title: '类别',
                dataIndex: 'type',
                key: 'type',
            },
            {
                title: '访问量',
                dataIndex: 'readCount',
                key: 'readCount',
            },
            {
                title: '经验值',
                dataIndex: 'value',
                key: 'value',
            },
        ]
        return (
            <>
                <Modal title="详细信息" className='tabless' visible={this.state.isModalOpen} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Table dataSource={this.state.dataSource} columns={columns} />
                    123
                </Modal>

                <Layout>
                    
                    <Row>
                        <Col span={12}>
                            <ReactEcharts
                                option = { this.getBubbleOption() }
                                style={{  margin: 'auto',height:'260px' }}
                                className={'react_for_echarts'}
                                onEvents={ this.onclick } /* 气泡的单击事件 */ 
                            />
                        </Col>
                    </Row>
                </Layout>
            </>
        )
    }
}

export default LineMarkerEcharts;


