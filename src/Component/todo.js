import React from 'react'
import { useState } from 'react';

export default function Todo(props) {
    const key = props.id;
    const init = 0;
    const [Dclicks, setDclick] = useState(init);
    const [Iclicks, setIclick] = useState(init);
    const Edit = document.getElementById("edit");
    const Delete = document.getElementById("delete");
    const handleTodoClick = () => {

        console.log(Dclicks, Iclicks);
        dispaly("hidden", "block");
        if (Dclicks > 1 && Iclicks === 1) {
            dispaly("block", "hidden");
        }
        else if (Dclicks >= 1 && Iclicks === 0) {
            setDclick(init);
            dispaly("block", "hidden");
        }
        setDclick(Dclicks + 1);
    }
    //     if (getEle.classList.contains("hidden")) {

    //         getEle.classList.replace("hidden", "block");

    //     }
    //     else if (getEle.classList.contains("block") && clicks == 2) {

    //         getEle.classList.replace("block", "hidden");
    //     }

    // }
    const check = (e) => {
        setIclick(Iclicks + 1);
        e.currentTarget.name = "save-outline";
        const para = document.getElementById("para1");
        para.setAttribute("contentEditable", "true");

        if (Iclicks === 1) {
            onSave();
            dispaly("block", "hidden");
        }



    };
    const onSave = () => {
        console.log("save");
    }
    const dispaly = (class1, class2) => {
        const getEle = document.getElementById(key);
        getEle.classList.replace(class1, class2);
    }
    return (
        <div className=' flex border-2 border-gray-10 h-10' id='edit' onClick={handleTodoClick}>
            <p className="font-bold mt-2" id="para1">{props.todo}</p>
            <span className="ml-auto hidden" id={key}>
                <ion-icon name="create-outline" size="large" id="edit" onClick={check} ></ion-icon>
                <ion-icon name="trash-outline" size="large" id="delete"></ion-icon>
            </span>
        </div>
    )
}
