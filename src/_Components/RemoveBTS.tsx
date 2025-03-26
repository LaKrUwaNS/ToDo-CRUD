import React from 'react'
import { Trash2 } from 'lucide-react';

interface INB{
    widght:string,
    height:string
}

const RemoveBTS = ({ widght, height }: INB) => {
    return (
        <button className='hover:text-red-500 bg-red-500 rounded-2xl p-2 border-1 hover:border-red-500 hover:bg-white hover:scale-110 m-0 '>
            <Trash2 style={{ width: widght, height: height }} />
        </button>
    )
}

export default RemoveBTS
