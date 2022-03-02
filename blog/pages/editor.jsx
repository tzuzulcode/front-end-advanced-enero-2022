import React, { useState } from 'react'
import ReactMarkdown from "react-markdown"




export default function Editor() {

    

  return (
    <div>
        

        <article className='prose prose-invert'>
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    </div>
  )
}
