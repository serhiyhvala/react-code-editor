import React, { useContext } from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/snippets/html'
import 'ace-builds/src-noconflict/ext-language_tools'
import { EditorProvider } from '../../context/Context'

export const HtmlEditor = () => {
  const { html, setHtml } = useContext(EditorProvider)

  return (
    <AceEditor
      placeholder="Write Your HTML Code Here"
      value={html}
      onChange={(value) => setHtml(value)}
      mode="html"
      theme="monokai"
      name="editor_html"
      fontSize="16"
      height={'100%'}
      width={'100%'}
      showPrintMargin={false}
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
