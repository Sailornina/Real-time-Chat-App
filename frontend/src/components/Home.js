import './home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="formContainer">
                <h1>{`WineLovers`}</h1>
                <input className="input" placeholder='Username...' />

                <select className="input option">
                    <option>-- Select Room --</option>
                    <option value='malbec'>Malbec</option>
                    <option value='pinot-noir'>Pinot Noir</option>
                    <option value='chardonnay'>Chardonnay</option>
                    <option value='cinsaut'>Cinsaut</option>
                </select>

                <button className="btn btn-secondary">Join Room</button>
            </div>
        </div>
    );
};

export default Home;