import './chat.css';
import Messages from './Messages';

const Chat = ({ socket }) => {
  return (
    <div className="chatContainer">
      <div>
        <Messages socket={socket} />
      </div>
    </div>
  );
};

export default Chat;