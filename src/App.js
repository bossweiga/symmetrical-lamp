import React, { useState } from 'react'
// import Child from './views/Child'
import Myecharts from './components/Myecharts'
import MiaoshuList from './components/MiaoshuList'
import Tssssss from './components/Tssssss'
import Radio from './views/Radio'
import NewTable from './views/NewTable'
import ChinaMapChart from './views/New2'
import New3 from './views/New3'
import Newindex from './views/Newindex'
import { Button } from 'antd'
// import anyh from './views/New2'
// import Mybasic from './components/Mybasic'
// import ThirdChild from './views/ThirdChild'

export default function App() {
  const [info,setinfo]=useState(true)
  return (
    <div>
      {/* <div>1233333333333333333333</div> */}
      <></>
      {/* <Mybasic></Mybasic>
<ThirdChild></ThirdChild> */}
{/* <Myecharts></Myecharts> */}
{/* <MiaoshuList></MiaoshuList> */}
{/* <Radio></Radio> */}

{/* <Button onClick={()=>setinfo(!info)}>点击切换</Button>
<ChinaMapChart info = {info}></ChinaMapChart> */}
{/* <New3 info = {info}></New3> */}
<Newindex></Newindex>

{/* <Tssssss></Tssssss> */}
    </div>
  )
}