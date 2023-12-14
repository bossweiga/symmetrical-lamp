import React from 'react'
import { useState } from 'react'
import { Button, Form, Input, Table, Card, Select } from 'antd'
const Option = Select.Option;
export default function ThirdChild() {
  const handleChange = (value) => {
    setvalue(value)
  };
  const handleChange2 = (val) => {
    setval(val)
  }
  const [valuesss, setvalue] = useState(undefined)
  const [valueaaa, setval] = useState(undefined)
  const [switc, setSwitc] = useState('2')
  const qunima = (params) => {
    console.log('params', params);
    setSwitc(params)
  }
  const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },]
  return (
    <div>
      <div>
        <div>
          <button onClick={() => qunima("1")}>按钮1</button>
          <button onClick={() => qunima("2")}>按钮2</button>
        </div>
        {switc === "1" ? <div>
          <Select
            style={{ width: 120 }}
            onChange={handleChange}
            placeholder="请输入11"
            value={valuesss}>
            {options.map(item => {
              return <Option value={item.value} key={item.label}>{item.label}</Option>;
            })}
          </Select></div> : <div>
          <Select
            style={{ width: 120 }}
            onChange={handleChange2}
            placeholder="请输入22"
            value={valueaaa}>
            {options.map(item => {
              return <Option value={item.value} key={item.label}>{item.label}</Option>;
            })}
          </Select></div>}
      </div>
    </div>
  )
}
