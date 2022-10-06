import React from 'react'
import CodeBar from './components/CodeBar/CodeBar'
import { EditorProvider } from './context/Context'


const App = () => {
  return (
    <EditorProvider>
        <CodeBar />      
    </EditorProvider>
  )
}

export default App