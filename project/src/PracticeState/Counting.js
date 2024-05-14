import React,{useState} from 'react'

export default function Counter() {
    const [count,setCount]= useState(0);

    const increment=()=>{
        setCount(prevcount=>prevcount+1)
    }

    const decrement=()=>{
        setCount(prevcount=>prevcount-1)
    }
  return (
    <>
        <h1>Count:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}
