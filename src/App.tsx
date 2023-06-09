import React, { useState } from 'react'

import Input from './components/Input'
import Message from './components/Message'
import { ListProps } from './types/Type'

import "./App.css"

interface IDeleteProps {
  id:number
}

const App:React.FC = () => {
  const [todo,setTodo] =useState<string>("")
   const [list,setList ] =useState<ListProps[]>([])

   
   
   const handleAdd = ()=> {
    if(todo)
    setList([...list,{name:todo, id:list.length +1}])
    setTodo("")

   }
   const handleDelete = (params:IDeleteProps) =>{
    setList(list?.filter(item=>item?.id !== params.id))
   }

  return (
    <div className='App'> 
    <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd}/> 
    <Message handleDelete={handleDelete} list={list}/>
    </div>
  )
}

export default App