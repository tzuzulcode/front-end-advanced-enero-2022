import React,{useEffect} from 'react'


const EDITOR_ID = "editorjs"

export default function Editor({ejInstance}) {

    useEffect(()=>{
        import("@editorjs/editorjs")
        .then(EditorJS=>{
            if(!ejInstance.current){
                initEditor(EditorJS.default)
            }
        })
        

        // Clean up
        return ()=>{
            if(ejInstance.current){
                ejInstance.current.destroy()
                ejInstance.current = null
            }
        }
    },[])

    const initEditor = (EditorJS) =>{
        const editor = new EditorJS({
            holder:EDITOR_ID,
            logLevel:"ERROR",
            onReady:()=>{
                console.log("Editor listo")
                ejInstance.current = editor
            },
            onChange:()=>{
                
            }
        })
    }
  return (
    <div className='prose prose-xl prose-invert max-w-none leading-10 prose-p:my-16 p-5 md:0 mx-auto bg-slate-700 my-10'>
        <div id={EDITOR_ID}></div>
    </div>
  )
}
