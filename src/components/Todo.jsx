// Todo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import { BsSearch } from "react-icons/bs";
import { updateSearchTerm } from "../redux/action";

const Todo = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal TODO APP
      </h2>
      <TaskInput />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      <TaskList />
    </div>
  );
};

export default Todo;
