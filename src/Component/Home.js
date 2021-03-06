import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'


import Todos from './todos';
import NewTodos from './NewTodos';

export default function Home() {
    const [todos, setTodos] = useState([]);
    const handleNewTodos = (todo) => {
        setTodos((prevTodos)=>{

          return [...prevTodos, {id:uuidv4() ,todo}];
		
			
		})
    }
	const handleRemoveTodo=(id)=>{

		setTodos((prevTodos)=>{
           const filterTodos=prevTodos.filter((todo)=>todo.id!==id)
			return filterTodos;
			
		})
		
	}
    return (
        <div className="bg-gray-300 border-2 border-teal-500 flex-row m-10 rounded ">
            <NewTodos onTodo={handleNewTodos} />
			<Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
        </div>
    )
}
