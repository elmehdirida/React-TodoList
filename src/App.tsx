import React,{useState} from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import {NewTodoForm} from './components/newTodoForm';
export const App =() => {
  const [showAddForm , setShowAddForm] = useState(false);

  const [todos,setTodos]  = useState( [
    {rowNumber:1,rowDesc:'feed puppy',rowAssigned:'user one'},
    {rowNumber:2,rowDesc:'water plants',rowAssigned:'user two'},
    {rowNumber:3,rowDesc:'make dinner',rowAssigned:'user one'},
    {rowNumber:4,rowDesc:'charge phone battery',rowAssigned:'user one'}
  ])
  const addTodo = (description : string ,assigned : string) =>  {
    let rowNum=0;
    if (todos.length>0) {
      rowNum = todos[todos.length -1].rowNumber +1
    }else {
      rowNum=1;
  }
    const newTodo = {rowNumber : rowNum ,
    rowDesc : description,
    rowAssigned : assigned };
    setTodos(todos => [...todos,newTodo])
    
  }
  const deleteTodo = (deleteTodoRowNum  : number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNum
    });
    setTodos(filtered);
  }
  return (
    <div className='mt-5 container' >
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' onClick={()=> {
            setShowAddForm(!showAddForm)
          }}>
            {showAddForm ? 'Close New Todo' : 'New Todo'}
            </button>
            {showAddForm && 
             <NewTodoForm addTodo = {addTodo}/>
            }
        </div>
      </div>
    </div>
  );
}

