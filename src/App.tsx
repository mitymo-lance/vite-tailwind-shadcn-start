import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Panel from './components/Panel'
import ScoreDisplay from './components/ScoreDisplay'
import Row from './components/Row'
import './App.css'
import { iris } from './services/iris'


function App() {
  const [displayTime, setDisplayTime] = useState('00:00');
  const [homeScore, setHomeScore] = useState(0);
  const [visitorScore, setVisitorScore] = useState(0);
  const [homeTimeout, setHomeTimeout] = useState(0);
  const [visitorTimeout, setVisitorTimeout] = useState(0);
  const [period, setPeriod] = useState(0);
  const [down, setDown] = useState(0);
  const [toGo, setToGo] = useState(0);
  const [ballOn, setBallOn] = useState(0);
  const [scoreboardActive, setScoreboardActive] = useState(0);

  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'disconnected'>('disconnected');


  // Connect to Iris server when component mounts
  useEffect(() => {
    const handleConnect = async () => {
      try {
        setConnectionStatus('connecting');
        await iris.connect();
        setConnectionStatus('connected');
      } catch (error) {
        console.error('Failed to connect to Iris:', error);
        setConnectionStatus('disconnected');
      }
    };

    handleConnect();
    
    // Set up message handler
    iris.onMessage = (message) => {
       if(message == 'AUTH_SUCCESS') return;

      try {
        const cleanMessage = message.replace(/[\x02\x03]/g, '');
        
        const data = JSON.parse(cleanMessage);
        //console.log(data);

        // Handle different message types
        const clockNode = data.Nodes.find((node: any) => node.VBLDesc === 'clock');
        setDisplayTime(clockNode.VBLValue);
        
        const homeScoreNode = data.Nodes.find((node: any) => node.VBLDesc === 'homeScore');
        setHomeScore(homeScoreNode.VBLValue);

        const visitorScoreNode = data.Nodes.find((node: any) => node.VBLDesc === 'guestScore');
        setVisitorScore(visitorScoreNode.VBLValue);

        const homeTimeoutNode = data.Nodes.find((node: any) => node.VBLDesc === 'homeTOL');
        setHomeTimeout(homeTimeoutNode.VBLValue);

        const visitorTimeoutNode = data.Nodes.find((node: any) => node.VBLDesc === 'guestTOL');
        setVisitorTimeout(visitorTimeoutNode.VBLValue);

        const periodNode = data.Nodes.find((node: any) => node.VBLDesc === 'period');
        setPeriod(periodNode.VBLValue);

        const downNode = data.Nodes.find((node: any) => node.VBLDesc === 'down');
        setDown(downNode.VBLValue);

        const toGoNode = data.Nodes.find((node: any) => node.VBLDesc === 'togo');
        setToGo(toGoNode.VBLValue);

        const ballOnNode = data.Nodes.find((node: any) => node.VBLDesc === 'ballon');
        setBallOn(ballOnNode.VBLValue);

        const scoreboardActiveNode = data.Nodes.find((node: any) => node.VBLDesc === 'scoreboardActive');
        setScoreboardActive(scoreboardActiveNode.VBLValue);

      } catch (error) {
        console.error('Error processing Iris message:', error);
        console.log('message: ' + message);
      }
    };
    
    // Cleanup function to handle component unmount
    return () => {
      try {
        if (iris.socket) {
          iris.socket.close();
          iris.socket = null;
        }
      } catch (error) {
        console.error('Error disconnecting from Iris:', error);
      }
    };
  }, []); // Empty dependency array means this runs once on mount


  return (
    <Layout title="Scoreboard" subtitle="Welcome to the scoring system. Please sit and have a doughnut.">
      {/* Connection Status */}
      <div className={`text-sm mb-4 text-center ${
        connectionStatus === 'connected' ? 'text-green-500' :
        connectionStatus === 'connecting' ? 'text-yellow-500' :
        'text-red-500'
      }`}>
        Status: {connectionStatus.charAt(0).toUpperCase() + connectionStatus.slice(1)}
      </div>

      {/* Main Content Section */}
      <Panel bgColor="black" className="bg-black">
        <Row>
          <ScoreDisplay title="Period" width="full">
            <div className="lcd-display">
              <p className="lcd-display-font">{period}</p>
            </div>
          </ScoreDisplay>
          <ScoreDisplay title="" width="full" type="timer">
            <div className="lcd-display">
              <p className="text-6xl font-mono lcd-display-font text-red-500">{displayTime}</p>
            </div>
          </ScoreDisplay>
          <ScoreDisplay title="Down" width="full" >
            <div className="lcd-display">
              <p className="lcd-display-font">{down}</p>
            </div>
          </ScoreDisplay>
        </Row>
      </Panel>
    
      <Row>
        <Panel>
          <ScoreDisplay title="Home" width="full" type="score">
            <div className="lcd-display">
              <p className="lcd-display-font">{homeScore}</p>
            </div>
          </ScoreDisplay>
          <ScoreDisplay title="Timeouts" width="full">
            <div className="space-x-2 mt-4">
              <p className="text-sm font-semibold text-gray-800 text-center uppercase font-mono">{homeTimeout}</p>
            </div>
          </ScoreDisplay>
        </Panel>
        <Panel>
          <ScoreDisplay title="Visitor" width="full" type="score">
            <div className="lcd-display">
              <p className="lcd-display-font">{visitorScore}</p>
            </div>
          </ScoreDisplay>
          <ScoreDisplay title="Timeouts" width="full">
            <div className="space-x-2 mt-4">
              <p className="text-sm font-semibold text-gray-800 text-center uppercase font-mono">{visitorTimeout}</p>
            </div>
          </ScoreDisplay>
        </Panel>
      </Row>

      <Panel bgColor="black">
        <Row>
          <ScoreDisplay title="To Go" width="full">
            <div className="lcd-display">
              <p className="lcd-display-font">{toGo}</p>
            </div>
          </ScoreDisplay>
          <ScoreDisplay title="Ball On" width="full">
            <div className="lcd-display">
              <p className="lcd-display-font">
                {ballOn}
              </p>
            </div>
          </ScoreDisplay>
          <ScoreDisplay title="Scoreboard Active" width="full">
            {scoreboardActive}
          </ScoreDisplay>
        </Row>
      </Panel>
    </Layout>
  )
}

export default App
