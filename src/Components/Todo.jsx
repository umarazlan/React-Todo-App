import React, { useEffect, useState } from 'react'
import './Todo.css'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { getLocalStorageData, setLocalStorageData } from './TodoLocalStorage';


const Todo = () => {
    
  const [task, setTask] = useState(()=>getLocalStorageData() );

  const handleFormSubmit = (input) =>{
  const {id, content, checked} = input;

  //! to check if the input field is empty or not 
  if (!content) return;

  //! to check if the data is already existing or not
  //if(task.includes(input)) return;

  const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
  if (ifTodoContentMatched) {
   return;
  }
  //todo accoding to EcMaScript when id and data is match just right like below
  setTask((prevTask) => [...prevTask, { id, content, checked }]);
  }

  //todo  add data to localStorage
  setLocalStorageData(task)

  //! delete handle function
  const handleDelete = (value) =>{
    const updatedTask = task.filter((curTask)=> curTask.content !== value)
    setTask(updatedTask)
  }
  //! clear handle function
  const handleClearBtn = () =>{
    setTask([]);
  }
   //! Checked handle function
    const handleCheckedTodo = (content) => {
      const updatedTask = task.map((curTask) =>{
        if(curTask.content === content) {
          return {...curTask, checked: !curTask.checked }
        } else {
          return curTask;
        }
      })
      setTask(updatedTask);
    }

  return (
    <section className='todo-container'>
              <header>
                <h1>Todo List</h1>
              </header>
             <TodoForm onAddTodo={handleFormSubmit}/>
              <section className='unList'>
                       <ul>
                        { 
                        task.map((curTask, index)=>{
                            return (
                              <TodoList 
                              key={curTask.id} 
                              checked = {curTask.checked}
                              data={curTask.content}
                              onhandleDelete={handleDelete}
                              onHandleCheckedTodo={handleCheckedTodo}
                              />
                            )
                        })
                        }
                       </ul>
              </section>
              <section  >
                       <button className='clear-btn' onClick={handleClearBtn}>Clear</button>
              </section>
    </section>
  )
}

export default Todo