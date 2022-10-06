import React, { useState } from 'react'
import { CssEditor } from '../Edtior/CssEditor'
import { HtmlEditor } from '../Edtior/HtmlEditor'
import { JsEditor } from '../Edtior/JsEditor'
import styles from './CodeBar.module.css'

const CodeBar = () => {
  const [activeTab, setActiveTab] = useState('html')
  return (
    <div className={styles.codebar}>
      <nav className={styles.tab}>
        <button
          onClick={() => setActiveTab('html')}
          className={`${styles.item} ${
            activeTab === 'html' ? styles.activeTab : ''
          }`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab('css')}
          className={`${styles.item} ${
            activeTab === 'css' ? styles.activeTab : ''
          }`}
        >
          CSS
        </button>
        <button
          onClick={() => setActiveTab('js')}
          className={`${styles.item} ${
            activeTab === 'js' ? styles.activeTab : ''
          }`}
        >
          JS
        </button>
      </nav>
      <div className={styles.editor}>
        {activeTab === 'html' ? <HtmlEditor /> : null}
        {activeTab === 'css' ? <CssEditor /> : null}
        {activeTab === 'js' ? <JsEditor /> : null}
      </div>
    </div>
  )
}

export default CodeBar
