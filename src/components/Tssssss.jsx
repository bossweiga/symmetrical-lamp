
import React, { useEffect, useRef, useState } from 'react'

import { LoadingOutlined } from '@ant-design/icons'; 
import getmd from "./../api/modules/test"
export default function Tssssss() {
    const [list, setList] = useState([])
    const [pageNum, setPageNum]=useState(1)
    const [loading, setLoading] = useState(false)
    const wrapRef = useRef(null)
    const loadingRef = useRef()
    loadingRef.current = loading
    // loadingRef = loading
    useEffect(() => {
      const Dom = wrapRef.current
        Dom.addEventListener('scroll',loadMore)
        console.log(Dom,loading)
      return () => {
        console.log('清空监听事件')
        Dom.removeEventListener('scroll',loadMore)
      }
      // eslint-disable-next-line
    },[])
    useEffect(() => {
      getList()
      // eslint-disable-next-line
    },[pageNum])
    const getList = async() => {
        let result =await getmd()
    console.log("123",result)
      setLoading(true)
    //   getScrollLoadList({pageNum}).then((res) => {
    //     const temp = res.result
    //     const nowList = pageNum === 1 ? temp : [...list,...temp]
    //     setList(nowList)
    //   }).finally(() => {
    //     setLoading(false)
    //   })
    }
    const loadMore = (e) => {
      const {offsetHeight, scrollTop, scrollHeight} = e.target
      if(offsetHeight + scrollTop === scrollHeight) {
        console.log(loadingRef, '下拉加载之前')
        // if(loadingRef) return
        if(loadingRef.current) return
        setPageNum((pageNum)=> pageNum + 1)
      }
    }
    return (
      <div ref={wrapRef} >
        {
          list && list.length && list.map(item => (
            <div key={item}>{item}</div>
          ))
        }
        {loading && <div ><LoadingOutlined /></div> }
      </div>
    )
}
