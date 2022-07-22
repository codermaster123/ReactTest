import React from 'react'


import Todo from './todo'
export default function Todos(props) {
    return (
        <div>
            {props.todos.map((todo) => (

                <Todo key={todo.id} id={todo.id} todo={todo.todo} />
            ))}

        </div>
    )
}
