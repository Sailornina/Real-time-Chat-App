import './home.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{`WineLovers`}</h1>
                <input className={styles.input} placeholder='Username...' />

                <select className={styles.input}>
                    <option>-- Select Room --</option>
                    <option value='malbec'>Malbec</option>
                    <option value='pinot-noir'>Pinot Noir</option>
                    <option value='chardonnay'>Chardonnay</option>
                    <option value='cinsaut'>Cinsaut</option>
                </select>Cinsaut

                <button className='btn btn-secondary'>Join Room</button>
            </div>
        </div>
    );
};

export default Home;