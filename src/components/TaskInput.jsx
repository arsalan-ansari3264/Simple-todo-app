import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";

const TaskInput = () => {
  const dispatch = useDispatch();

  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };
  return (
    <div className="flex items-center mb-4">
    
      <input
        id="addTodoInput"
        className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Add Todo"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button
        className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleAddTodoClick}
      >
        <BsPlus size={20} />
      </button>
    </div>
  );
};

export default TaskInput;
