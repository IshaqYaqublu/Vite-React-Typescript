import React from 'react'

type InputProps = {
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd:()=>void
}

const Input:React.FC<InputProps> = ({todo,setTodo,handleAdd}) => {
  return (
    <div>
        
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Əlave edin...' />
        <button onClick={handleAdd}>ADD</button>

    </div>
  )
}

export default Input