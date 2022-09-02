import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { Todo } from "../model";
import "./style.css";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };


  const handleDelete = (id:number) =>{
    setTodos(todos.filter((todo) =>todo.id !==id))
  }


  
  return (
    <div className="px-20">
      <form className="todos_single sm:flex  gap-5 p-4 mt-5 bg-yellow-400 rounded-lg">
        
        {todo.isDone ? (
          <s className="todos_single--text flex-1">{todo.todo}</s>
        ) : (
          <span className="todos_single--text flex-1">{todo.todo}</span>
        )}


        <div className="flex gap-5 text-[20px] ">
          
          <div
            className="icon cursor-pointer"
            onClick={() => handleDelete(todo.id)}
            
          >
            <RiDeleteBin5Fill />
          </div>
          <div className="icon cursor-pointer" onClick={() => handleDone(todo.id)}>
          
            <MdDone />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
