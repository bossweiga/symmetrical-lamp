import { useEffect, useState, useRef } from 'react';
import { Spin } from 'antd';
import 'jsmind/style/jsmind.css'
import api from "../api"
export default function MiaoshuList() {
    const [loading, setLoading] = useState(false)
    const loadingRef = useRef()
    loadingRef.current = loading
    const getRef = () => {
        const doms = testList.current;
        doms.addEventListener('scroll', loadMore)
    }
    const [pageNo, setPageNo] = useState(1)
    const [nowdata, setnoewdata] = useState([])
    //下拉触发事件
    const loadMore = (e) => {
        const { offsetHeight, scrollTop, scrollHeight } = e.target
        if (offsetHeight + scrollTop > scrollHeight - 1) {
            console.log(loadingRef, '下拉加载之前')
            if (loadingRef.current) return
            setPageNo((pageNo) => pageNo + 1)
        }
    }
    const getqueay = async (val) => {
        setLoading(true)
        let result = await api.test.getmd()
        if (pageNo > 1) {
            setnoewdata([...nowdata,...result.data])
        } else {
            setnoewdata(result.data)
        }
        setLoading(false)
    }
    const testList = useRef()
    useEffect(() => {
        getRef()
    }, [])
    useEffect(() => { getqueay() }, [pageNo])
    const [jms, setJm] = useState(null)//用来存储js获取不到的问题
    //放大
    return (
        <>
            <div>
                <div style={{ height: '300px', overflowY: 'scroll', backgroundColor: 'pink' }} ref={testList}>
                    {nowdata.map((item, index) => {
                        return (<div key={index}>{item.val2}</div>)
                    })}
                    <Spin loading={loading}/>
                </div>
            </div>
        </>
    )
}