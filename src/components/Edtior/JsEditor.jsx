import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/snippets/javascript'
import "ace-builds/src-noconflict/ext-language_tools";

export const JsEditor = () => {
  return (
    <AceEditor 
        placeholder='Write Your JS Code Here'
        mode="javascript"
        theme='monokai'
        name='editor_js'
        fontSize="16"
        height={'100%'}
        width={'100%'}
        showPrintMargin={true}
        showGutter={false}
        highlightActiveLine={true}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            tabSize: 2
        }}
    />
  )
}
