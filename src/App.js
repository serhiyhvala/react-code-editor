import React from 'react'
import CodeBar from './components/CodeBar/CodeBar'
import { EditorProvider } from './context/Context'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { Preview } from './components/Preview/Preview'

const App = () => {
  return (
    <EditorProvider>
      <Header />
      <div className={styles.content}>
        <CodeBar />
        <Preview />
      </div>
    </EditorProvider>
  );
}

export default App
