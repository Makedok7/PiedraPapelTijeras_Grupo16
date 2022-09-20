import {Link} from 'react-router-dom';


export default function Home(){
    return(
        <>
            <h1>Piedra,Papel o Tijeras</h1>
            <Link to='/juego' className='btn-principal'>Empezar a Jugar</Link>
            <Link to='/desarrolladores' className='btn-principal'>Desarrolladores</Link>
        </>
    )
}