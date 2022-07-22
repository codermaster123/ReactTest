import React from 'react'

export default function Todo(props) {
    const id = props.id;
    const handelRemove=()=>{
		props.onRemoveTodo(id);
	}
    return (
        <div className=' flex border-2 border-gray-10 h-10' id='edit'>
            <p className="font-bold mt-2" id="para1">{props.todo}</p>
            <span className="ml-auto" >
                
                <ion-icon name="trash-outline" size="large" id="delete" onClick={handelRemove}></ion-icon>
            </span>
        </div>
    )
}
