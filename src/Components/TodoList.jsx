import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { FaCheckSquare } from 'react-icons/fa'

export const TodoList = ({data, checked ,onhandleDelete , onHandleCheckedTodo}) => {
  return (
    <li  className='todo-item'>
        <span className={checked ? "checkedList" : ""}>{data}</span>
        <button className='icon1' onClick={() => onHandleCheckedTodo(data)}><FaCheckSquare  /></button>
        <button className='icon2' onClick={() => onhandleDelete(data)}><AiTwotoneDelete /></button>
    </li> 
  )
}
