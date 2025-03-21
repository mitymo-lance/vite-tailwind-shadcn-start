import { useState } from 'react'
import Layout from './components/Layout'
import './App.css'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout title="Scoreboard" subtitle="Welcome to the scoring system. Please sit and have a doughnut.">
      <div className="min-h-screen bg-gray-100 w-full">
        {/* Header Section */}
        <div className="bg-white shadow-md w-full" style={{ display: 'none'}}>
          <div className="px-4 py-8 sm:px-6 lg:px-8">
          </div>
        </div>

        {/* Main Content Section */}
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <p>Hey whats happening?</p>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">Current Score</h2>
                <p className="text-4xl font-bold text-blue-600">{count}</p>
              </div>
              <Button 
                variant="default" 
                onClick={() => setCount((count) => count + 1)}
                className="px-6 py-2"
              >
                Increment Score
              </Button>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-500">
                Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
              </p>
            </div>
          </div>

        </div>

        {/* Footer Section */}
        <div className="bg-white shadow-md mt-8 w-full">
          <div className="px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-center text-gray-600">
              Uses <a href="https://tailwindcss.com/" className="text-blue-500">Tailwind CSS</a> and <a href="https://shadcn.com/" className="text-blue-500">Shadcn</a> for styling and components.
            </p>
          </div>
        </div>


      </div>
    </Layout>
  )
}

export default App
