import React from 'react'
import RemoveBTS from './RemoveBTS'
import Link from 'next/link'
import { NotebookPen } from 'lucide-react';

function TopicList() {
    return (

        <div className='flex justify-between m-10 p-5 mt-5 border-none shadow-md shadow-green-500'>
            <div>
                <div className="flex justify-between text-5xl font-bold m-2">
                    <h1>Topic</h1>
                    <div className='m-0 p-0 flex items-start justify-between gap-3 w-fit h-fit'>
                        <RemoveBTS widght='25' height='25' />
                        <Link href='/EditTopics' className='hover:text-blue-500 bg-blue-500 rounded-2xl p-2 border-1 hover:border-blue-500 hover:bg-white hover:scale-110 m-0 '>
                            <NotebookPen />
                        </Link>
                    </div>
                </div>
                <div className="mt-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ducimus incidunt inventore repellendus quasi accusantium odit dolorum quis facilis esse. Sit saepe a incidunt quidem voluptate ducimus molestiae ad exercitationem?
                </div>
            </div>

        </div>


    )
}

export default TopicList
