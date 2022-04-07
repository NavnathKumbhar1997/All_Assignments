import React,{useState} from 'react'

function HookCounterTwo() {
    const initalValue = 0
    const [count,setCount] = useState(initalValue)

    const increamentByFive =()=>{
        for(let i=0;i<5;i++){
            setCount(prevValue =>prevValue + 1)
        }
    }

  return (
    <div>
     count: {count}
     <button onClick={()=>setCount(initalValue)}>reset</button>
     <button onClick={()=>setCount(prevValue =>prevValue + 1)}>increment</button>
     <button onClick={()=>setCount(prevValue =>prevValue -1)}>decrement</button>
     <button onClick={increamentByFive}>by 5</button>

    </div>
  )
}

export default HookCounterTwo