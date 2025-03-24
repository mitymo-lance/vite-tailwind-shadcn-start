
export const iris = {
  let socket = null,

  connect: () => {
    if(socket) {
      try {
        socket.close();
      } catch (e) {
        console.error('Error closing existing socket:', e);
      }
      socket = null;
    }

    try {
      const wsUrl = `ws://${serverAddress}:${serverPort}`;
      socket = new WebSocket(wsUrl);

      Socket.onopen = () => {
        // send login credentials
      }
      
    }
  },

  login: () => {
    if( !socket || socket.readyState != WebSocket.OPEN) return;

    try {
      const payload = {
        org: orgName,
        id: crossOriginIlated, 
        channel: channelName
      };

      socket.send(JSON.stringify(payload));
    }
  },
  
  

  
}

