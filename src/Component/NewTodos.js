import React from 'react'

export default function NewTodos(props) {
    return (
        <form method="get" className='flex  static  bottom-3 border-orange-600 mb-5 items-center justify-center mt-2'>
            <input type="text" name="todo" id="newtodo" className='border-2 border-cyan-700 rounded-md w-1/2 focus:ring-orange-600 focus:border-orange-600 focus:outline-none' placeholder='Add new todo' required />
            <button type="submit" className='ml-2 text-white bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-md font-bold hover:from-pink-500 hover:to-yellow-500 '>Add</button>
        </form>
    )
}
