import React, { useState } from 'react'





export default function Editor() {

    

  return (
    <div>
        

        <article className='prose prose-invert'>
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    </div>
  )
}
