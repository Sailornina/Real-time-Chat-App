import './home.css';
import { useNavigate } from 'react-router-dom'; 

const Home = ({ username, setUsername, room, setRoom, socket }) => {

    const joinRoom = () => {
        if (room !== '' && username !== '') {
          socket.emit('join-room', { username, room });
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const handleOnUser = (e) => {
        setUsername(e.target.value);
    };

    const handleOnRoom = (e) => {
        setRoom(e.target.value);
    };

    const navigate = useNavigate();

    navigate('/chat', { replace: true });

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit} className="formContainer">
                <h1>WineLovers</h1>
                <input className="input" placeholder='Username...' onChange={handleOnUser}/>
                <select className="input option" onChange={handleOnRoom}>
                    <option>-- Select Room --</option>
                    <option value='malbec'>Malbec</option>
                    <option value='pinot-noir'>Pinot Noir</option>
                    <option value='chardonnay'>Chardonnay</option>
                    <option value='cinsaut'>Cinsaut</option>
                </select>
                <button className="btn btn-secondary" onClick={joinRoom}>Join Room</button>
            </form>
        </div>
    );
};

export default Home;