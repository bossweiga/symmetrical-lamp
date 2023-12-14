import { Button, Checkbox, Table } from 'antd'
import React, { useEffect, useState,useRef } from 'react'
import api from '../api'
import './index.scss'
export default function NewTable() {
  const [nowData,setNowData]=useState([])
  const [cols,setCols]=useState([])

  const col =[
    {title:"new1",dataIndex:'new1',key:'new1'},
    {title:'new2',dataIndex:'new2',key:'new2'},
    {title:'new3',dataIndex:'new3',key:'new3'}
  ]
  useEffect(()=>{
    let cols = col.map((item)=>{
     return {
      title:titleFilter(item),
      dataIndex:item.dataIndex,
      key:item.key
     }
    })
    console.log('sssss',cols)
    setCols(cols)
  },[])
    const queryData=async()=>{
      try {
        let result =await api.test.getmd()
        console.log(result.data)
        setNowData(result.data)
      } catch (error) {
        console.log(error)
      }
        
    }
    //显示的窗口存在
    const showWindow=(e)=>{
      console.log('e',e.target)
      let div3 = document.createElement("div");
      console.log('ineeee',innerBOx())
      div3.innerHTML=innerBOx()
      div3.className="infly"
      e.target.appendChild(div3);
    }
    //实际窗口内容
const innerBOx=()=>(  
    <Checkbox.Group style={{display:'flex',flexDirection:'column'}}>
{nowData.map((item)=> (<Checkbox key={item.val2} value={item.val2}>{item.val2}</Checkbox>)
)}
</Checkbox.Group>
)
    //进行渲染
    const titleFilter=(val)=>{
      console.log(val)
      return (<div>
        {val.title}
        <span onClick={(e)=>showWindow(e)} style={{position:"relative"}}>CLICK ME!</span>
      </div>)
    }
    const dataSource=[
      {new1:'1',new2:'2',new3:'3'},
      {new1:'4',new2:'5',new3:'6'},
      {new1:'1',new2:'2',new3:'3'}
    ]

  return (
    <div>
        <Button onClick={()=>queryData()}>点击查询</Button>
        <div className='big'>123</div>
        <Checkbox>全选</Checkbox>
        <div>
          <Table  columns={cols} dataSource={dataSource}/> 
          <Checkbox.Group style={{display:'flex',flexDirection:'column'}}>
          {nowData.map((item)=> (<Checkbox key={item.val2} value={item.val2}>{item.val2}</Checkbox>)
        )}
          </Checkbox.Group>
     
        </div>
    
    </div>
  )
}
