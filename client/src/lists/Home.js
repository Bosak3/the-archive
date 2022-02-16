import NavBar from "../NavBar"
import '../styling/Home.css'

function Home (){

    
    return (
    <div className="backgroundhome" >
        <img src='https://www.pngplay.com/wp-content/uploads/12/Bank-Vault-PNG-Photos.png' className="vaultimage"/>
        <br></br>
        <br></br>
        <br></br>
        <div className="home">
            <h1 style={{ fontSize : 75}}>The Archive</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="home">
            <a href="http://localhost:4000/games">
                <h2 >GAMES</h2>
            </a>
            <br></br>
            <br></br>
            <a href="http://localhost:4000/books">
                <h2>BOOKS</h2>
            </a>
            <br></br>
            <br></br>
            <a href="http://localhost:4000/movies">
                <h2>MOVIES</h2>
            </a>
            
        </div>
    

    </div>

)


}

export default Home