import React from 'react'
import { useState } from 'react';

export default function Todo(props) {
    const key = props.id;
    
    return (
        <div className=' flex border-2 border-gray-10 h-10' id='edit'>
            <p className="font-bold mt-2" id="para1">{props.todo} {props.id}</p>
            <span className="ml-auto" id={key}>
                
                <ion-icon name="trash-outline" size="large" id="delete"></ion-icon>
            </span>
        </div>
    )
}
