import './chat.css';
import moment from 'moment';
import { useState, useEffect } from 'react';

const Messages = ({ socket }) => {
  const [messagesReceived, setMessagesReceived] = useState([]);

  useEffect(() => { // a socket event is recieved from the server.
    socket.on('receive_message', (data) => {
      setMessagesReceived((prevMessagesReceived) => [
        ...prevMessagesReceived,
        {
          message: data.message,
          username: data.username,
          createdTime: data.createdtime
        }
      ])
    });
    return () => socket.off('receive_message');
  }, [socket]);

  return (
    <div className="messagesColumn">
      {messagesReceived.map((msg, item) => (
        <div className="message" key={item}>
          <div>
            <span className="msgUser">{msg.username}</span>
            <span className="msgUser">
              {moment(msg.createdtime).format('h:mma')}
            </span>
          </div>
          <p className="msgText">{msg.message}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Messages;