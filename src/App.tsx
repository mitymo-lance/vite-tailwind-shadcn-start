import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Display from './components/Display'
import Row from './components/Row'
import './App.css'
import { Button } from '@/components/ui/button'
import gameTimer from './services/GameTimer'

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [displayTime, setDisplayTime] = useState('00:00');

  // Set initial time (15 minutes = 900 seconds)
  useEffect(() => {
    gameTimer.set(900);
  }, []);

  // Update display time every second
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        const remainingSeconds = gameTimer.countDown();
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        setDisplayTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const onStart = () => {
    setIsRunning(true);
    gameTimer.start();
  }

  const onStop = () => {
    setIsRunning(false);
    gameTimer.stop();
  }

  const onReset = () => {
    setIsRunning(false);
    gameTimer.reset();
    gameTimer.set(900); // Reset to 15 minutes
    setDisplayTime('15:00');
  }

  return (
    <Layout title="Scoreboard" subtitle="Welcome to the scoring system. Please sit and have a doughnut.">
      {/* Main Content Section */}
      <div>
        <Row>
          <Display title="Home Score" width="1/4">
            <p>2</p>
          </Display>
          <Display title="Game Time" width="1/2">
            <p className="text-6xl font-mono">{displayTime}</p>
            <div className="space-x-2 mt-4">
              {isRunning ? (
                <Button onClick={onStop} variant="destructive">Stop</Button>
              ) : (
                <Button onClick={onStart}>Start</Button>
              )}
              <Button onClick={onReset} variant="outline">Reset</Button>
            </div>
          </Display>
          <Display title="Visitor Score" width="1/4">
            <p>1</p>
          </Display>
        </Row>

        <br></br>
        <Row>
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500">
              Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </Row>
      </div>
    </Layout>
  )
}

export default App
