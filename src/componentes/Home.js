import { Link } from 'react-router-dom';
import Nav from './Nav';


export default function Home() {
    return (
        <div className='bg-dark'style={{height:"800px"}}>
            {Nav()}
            <div className="container ">
                <h1 className="text-center text-info display-1" style={{fontWeight:"bold",fontStyle:"italic",fontFamily:"sans-serif"}}>HOME</h1>
                <img className='img-thumbnail rounded mx-auto d-block py-3 ' src='./images/portada.jpg' alt='portada'/>
                <Link to='/juego' style={{textDecoration:"none"}}>
                    <h2 className="text-center text-info py-5 text-decoration-none" style={{fontStyle:"oblique",fontFamily:"fantasy"}}>Haz click para jugar!</h2>
                </Link>
            </div>
        </div>

    )
}