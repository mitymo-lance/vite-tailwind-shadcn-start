export const iris = {
  socket: null as WebSocket | null,
  serverAddress: "iris1.motionrocket.com",
  serverPort: "8765",
  orgName: "MOTIONROCKET",
  channelName: "web",
  channelId: "1603883785",

  connect: () => {
    

    try {
      const wsUrl = `wss://${iris.serverAddress}:${iris.serverPort}`;
      iris.socket = new WebSocket(wsUrl);
      iris.socket.onmessage = (event) => {
        //console.log('onmessage event:', event);
        //console.log('onmessage event data:', event.data);
        iris.onMessage(event.data);
        //console.log('sent data to onMessage');
      };
      iris.socket.onopen = () => {
        iris.login();
      }
      
    } catch (e) {
      console.error('Error connecting to socket:', e);
    }
  },

  login: () => {
    if(!iris.socket || iris.socket.readyState != WebSocket.OPEN) return;

    try {
      const payload = {
        org: iris.orgName,
        id: iris.channelId,
        channel: iris.channelName
      };

      iris.socket.send(JSON.stringify(payload));
    } catch (e) {
      console.error('Error logging in:', e);
    }
  },

  onMessage: (message: string) => {
    console.log('onMessage message:', message);
  },
  
  

  
}

