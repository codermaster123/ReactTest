import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Todo from './todo'
export default function Todos(props) {
    return (
        <div>
            {props.todos.map((todo, index) => (

                <Todo key={index} id={uuidv4()} todo={todo} />
            ))}

        </div>
    )
}
