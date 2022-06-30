import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import App from './App'

import CourseProvider from './context/CourseProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CourseProvider>
      <App />
    </CourseProvider>
  </React.StrictMode>
)
