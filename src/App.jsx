import { useState } from 'react'
import Dashboard from './components/dashboard/dashboard'
import Sidebar from './components/sidebar/sidebar'
import './App.css'

function App() {
  return (
    <>
      <main className='grid gap-4 p-4 grid-cols-[200px_1fr]'>
        <Sidebar />
        <Dashboard />
      </main>
    </>
  )
}

export default App
