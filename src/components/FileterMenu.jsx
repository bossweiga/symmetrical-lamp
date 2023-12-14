import { Button, Checkbox, Space } from "antd";
import React, { useState, useEffect } from "react"
export const FileterMenu = (props) => {

    const { list,getSearchList ,resetChange} = props;
    const [plainOptions , setplainOptions ] = useState([])
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const [checkedList, setCheckedList] = useState();
    const onCheckAllChange = (e) => {
        // console.log('e.target.checked',e.target.checked)
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      };
      const onChange = (list) => {
        // console.log(list,"list")
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
      };
    useEffect(() => {
        getMenuData()
    }, [])

    const getMenuData = () => {
        console.log("list", list)
        let result = [
            {
                label: 1,
                value: '1'
            },
            {
                label: 2,
                value: '2'
            },
            {
                label: 3,
                value: '3'
            },
        ]
        setplainOptions(result)
    }
    const searchin=()=>{
        // console.log("搜索")
        getSearchList(checkedList,list)
    }
    const reset=()=>{
        // console.log("重置所选项")
        setCheckedList([])
        setCheckAll(false)
        resetChange(list)

    }
    return (
        <div>
        <Checkbox  onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
            <Checkbox.Group options={plainOptions} value={checkedList} style={{display:'flex',flexDirection:"column"}} onChange={onChange}></Checkbox.Group>
            <Space><Button onClick={searchin}>搜索</Button>
                <Button onClick={reset}>重置</Button></Space>
        </div>
    )
}