import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Inputfeild from './component/Inputfeild';
import { Todo } from './model';
import TodoList from './component/TodoList';




const App: React.FC = ()=> {

  const [todo, setToDo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if (todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setToDo('')
    }
  };


  console.log("ToDo:",todos)


  return (
    <div className="App">
      <span className='heading text-[40px]'>ToDo</span>
      <Inputfeild todo={todo} setToDo={setToDo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      {/* {todos.map((t) =>(
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
}

export default App;
