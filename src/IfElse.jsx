import React from 'react'

const IfElse = () => {
    let isLogin=false;
    let num;
    const print=()=>{
        if(num)
            return "Yes"
        else
            return "No"
    }
  return (
    <div>
        {isLogin ? <h1>Hello</h1> : <h2>Bye</h2>}
        {print()}
    </div>
  )
}

export default IfElse