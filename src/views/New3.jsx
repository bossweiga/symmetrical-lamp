import { useState } from "react";
import './index.scss'
export default function  New3(){
  function allowDrop(ev)
{
	ev.preventDefault();
}
const [state,sets]=useState('on')
function drag(ev)
{
  console.log('ew',ev.target)
	ev.dataTransfer.setData("Text",ev.target.innerText);
	ev.dataTransfer.setData("choice","check");
}

function drop(ev)
{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	var state=ev.dataTransfer.getData("choice");
  console.log(data,'datra',ev.target)
  if(state ==="check"){
    sets("off")
  }
	ev.target.innerText=data;
}
  return(<div> 
     <div draggable={true} onDragStart={(e)=>drag(e)} className={state==='on'?'on':"off"}>我是被传递的值</div>
    <div id="div1" style={{backgroundColor:"red",height:'200px'}} onDrop={drop} onDragOver={allowDrop}></div>

  </div>)
}