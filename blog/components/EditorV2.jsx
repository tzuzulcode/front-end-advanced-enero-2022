import React, { useCallback, useRef } from 'react'
import { createReactEditorJS } from 'react-editor-js'

const ReactEditorJS = createReactEditorJS()

import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

export default function EditorV2({instance}) {
    const tools = {
        header:Header,
        list:List,
        embed:{
          class: Embed,
          config:{
            services:{
              youtube:true
            }
          }
        }
    }

    const initialize = useCallback((ins)=>{
      instance.current = ins
    },[])
  return (
    <>
    <ReactEditorJS onInitialize={initialize} tools={tools} />
    </>
  )
}
