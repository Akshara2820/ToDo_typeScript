import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function Inputfeild({ todo, setToDo, handleAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input flex  relative items-center" 
    onSubmit={(e) =>{
      handleAdd(e);
      inputRef.current?.blur()
    }}>
      <input
        ref={inputRef}
        className="input_box rounded-full p-4 outline-none"
        type="text"
        placeholder="enter a task..."
        value={todo}
        onChange={(e) => setToDo(e.target.value)}
      ></input>
      <button
        className="input_submit hover:bg-blue-400
      hover:text-black right-0 absolute bg-blue-500 rounded-full 
      p-2 text-white"
      >
        Submit
      </button>
    </form>
  );
}

export default Inputfeild;
