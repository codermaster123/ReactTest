import React from 'react'
import { useState } from 'react';
import Todos from './todos';
import NewTodos from './NewTodos';
const dummytodo = ["todo1", "todo2"];
export default function Home() {
    const [todos, setTodos] = useState(dummytodo);
    const handleNewTodos = (newtodo) => {

        setTodos([...Todos, newtodo]);
    }
    return (
        <div className="bg-gray-300 border-2 border-teal-500 flex-row m-10 rounded ">
            <NewTodos onGet={handleNewTodos} />
            <Todos todos={todos} />
        </div>
    )
}
