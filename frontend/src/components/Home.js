import './home.css';
import { useNavigate } from 'react-router-dom'; 

const Home = ({ username, setUsername, room, setRoom, socket }) => {

    const joinRoom = () => {
        if (room !== '' && username !== '') {
          socket.emit('join_room', { username, room });
        }
    };

    const navigate = useNavigate();

    navigate('/chat', { replace: true });

    return (
        <div className="container">
            <div className="formContainer">
                <h1>WineLovers</h1>
                <input className="input" placeholder='Username...' onChange={(e) => setUsername(e.target.value)}/>

                <select className="input option" onChange={(e) => setRoom(e.target.value)}>
                    <option>-- Select Room --</option>
                    <option value='malbec'>Malbec</option>
                    <option value='pinot-noir'>Pinot Noir</option>
                    <option value='chardonnay'>Chardonnay</option>
                    <option value='cinsaut'>Cinsaut</option>
                </select>

                <button className="btn btn-secondary" onClick={joinRoom}>Join Room</button>
            </div>
        </div>
    );
};

export default Home;