import React, { useState } from 'react'
import AdminPage from '../../../components/AdminPage'
import dynamic from 'next/dynamic'
import '@uiw/react-markdown-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css'

const MarkDownEditor = dynamic(
    ()=>import("@uiw/react-markdown-editor").then((mod)=>mod.default),{
        ssr:false
    }
)

export default function Create() {
    const [content,setContent] = useState("")

    const saveContent = () =>{
        console.log(content)
    }

  return (
    <AdminPage>

        <div className='p-7'>
            <MarkDownEditor
                value={content}
                onChange={(editor,data,value)=>{
                    setContent(value)
                }}
            />
            <button className='bg-yellow-200 text-black px-5 py-2 rounded-md mt-10' onClick={saveContent}>Guardar</button>
        </div>

    </AdminPage>
  )
}
