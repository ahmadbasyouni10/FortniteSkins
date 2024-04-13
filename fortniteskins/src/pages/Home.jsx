import fortimage from '../assets/FORTNITESKINS.png'
import './Home.css'
const Home = () => {
    return (
        <div className="Home">
            <h2>HERE IS WHERE YOU CAN CREATE AND CONTROL YOUR OWN FORTNITE SKINS</h2>
            <img className='imagefort' src={fortimage} alt="fortnite skins" />
        </div>
)
}

export default Home