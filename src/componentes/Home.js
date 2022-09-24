import {Link} from 'react-router-dom';
import Nav from './Nav';


export default function Home(){
    return(
        <>
        {Nav()}
        <div className="container">
            <h1 className="position-absolute top-20 start-50 translate-middle">Home</h1>
            <Link to='/juego'>
                <h2 className="position-absolute top-50 start-50 translate-middle" >Haz click para jugar!</h2>
            </Link>
        </div>
        
        </>
        
    )
}