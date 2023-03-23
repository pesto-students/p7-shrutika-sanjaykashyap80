import React from "react"
import { increaseValue, decreaseValue } from '../redux/action-creater'
import { useSelector, useDispatch } from "react-redux"

function Index() {
    const myState = useSelector(state=>state.ourState.count)
    const disPatch = useDispatch()
    console.log("+++mystate++++", myState)
  return (
    <div>
        <h1>Hello world</h1>
        <button onClick={() => disPatch(increaseValue())}>Increment</button>
        <p>{myState}</p>
        <button onClick={() => disPatch(decreaseValue())}>Decrement</button>
    </div>
  )
}

export default Index