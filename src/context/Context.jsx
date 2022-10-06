import React, { createContext, useState } from "react";

export const EditorContext = createContext()

export const EditorProvider = ({children}) => {

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    const value = {
        html, css, js, setJs, setHtml, setCss
    }
    
    return (
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    )
}