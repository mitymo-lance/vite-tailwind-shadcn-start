import { useState, useEffect } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Hello World</h1>
        <Button variant="destructive" onClick={() => setCount(count + 1)}>Say Hi! {count}</Button>
        
      </div>
    </>
  )
}

export default App
