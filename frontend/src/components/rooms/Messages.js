import './chat.css';
import moment from 'moment';
import { useState, useEffect } from 'react';

const Messages = ({ socket }) => {
    const [messagesRecieved, setMessagesReceived] = useState([]);

    useEffect(() => { // a socket event is recieved from the server.
        socket.on('messageResponse', (data) =>
            setMessagesReceived([
                ...messagesRecieved,
                data.message,
                data.username,
                data.createdtime
            ]));
    }, [socket, messagesRecieved]);

    return (
        <div className="messagesColumn">
        {messagesRecieved.map((msg, item) => (
          <div className="message" key={item}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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