import React from 'react'

function AddTopicForm() {
    return (
        <div>
            <form className='p-6 m-5 mt-10 flex items-center justify-center flex-col gap-8 shadow-2xl rounded-2xl shadow-sidebar-accent-foreground'>
                <input type="text"
                    className='border-2 pl-5 border-gray-300 rounded-lg w-3/5 h-15 '
                    placeholder='Enter the Topic'
                />
                <textarea name="" id=""
                    className='pl-5 border-2 border-gray-300 rounded-lg w-3/5 h-20'
                    placeholder='Enter the Description'
                />

                <button className='bg-green-500 hover:bg-green-800 shadow-md active:shadow-2xl shadow-black text-white w-1/5 h-10 rounded-lg'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddTopicForm
