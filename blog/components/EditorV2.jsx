import React from 'react'
import { createReactEditorJS } from 'react-editor-js'

const ReactEditorJS = createReactEditorJS()
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

export default function EditorV2() {
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
  return (
    <>
    <ReactEditorJS tools={tools} />
    </>
  )
}
