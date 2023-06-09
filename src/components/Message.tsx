import React from 'react'
import { ListProps } from '../types/Type'

type MessageProps = {
    list:ListProps[],
    handleDelete:(params:any) =>void
}


const Message:React.FC<MessageProps> = ({list,handleDelete}) => {
  return (
    <div>
       <ul>
       {
            list?.map((item)=>(
                <div style={{display:"flex",alignItems:"center", justifyContent:"center",gap:"20px",marginBottom:"10px"}} key={item?.id}>
                    <li >{item?.name}</li>
                    <button onClick={()=>handleDelete(item)}>Delete</button>
                </div>
            )
            )
        }
       </ul>
    </div>
  )
}

export default Message