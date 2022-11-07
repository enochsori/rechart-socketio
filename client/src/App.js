import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

function App() {
  const sendMessage = () => {
    socket.emit('send message', { message: 'Hello' });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      alert(data.message);
    });
  }, [socket]);
  return (
    <div>
      <input placeholder='Message' />
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}

export default App;
