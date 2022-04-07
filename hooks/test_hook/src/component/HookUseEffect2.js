import React,{useState,useEffect} from 'react'

function HookUseEffect2() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e =>{
        console.log("mouse event");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called");
        window.addEventListener('mousemove',logMousePosition)
    })
  return (
    <div>
        <h1>x - {x}, y - {y}</h1>
    </div>
  )
}

export default HookUseEffect2