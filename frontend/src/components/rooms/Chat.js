import './chat.css';
import Messages from './Messages';
import SendingMessage from './SendingMessage';

const Chat = ({ socket }) => {
  return (
    <div className="chatContainer">
      <div>
        <Messages socket={socket} />
        <SendingMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;