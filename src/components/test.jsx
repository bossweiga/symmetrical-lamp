import React from 'react'


import store from '../redux/store'
import {testone} from '../redux/actions'
export default function test() {
    const fn =()=>{
        store.dispatch(testone)
    }
  return (

    <div>
        <div>
            {store.getState()}
            <button onClick={()=>{fn()}}></button>
        </div>
    </div>
  )
}
