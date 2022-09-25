import { Route } from "react-router-dom"
import Nav from './Nav';
import "./DesarrolladoresStyle.css"

export default function Desarrolladores() {
    const users = [
        {
            id: 1,
            name: 'Abalos, Alan Nicolas',
            ima: 'https://robohash.org/user1',
            description: 'hola tengo x años soy estudiante de la unju sueño con hacer videojuegos '
        },
        {
            id: 2,
            name: 'Cabrera, Fabricio Gaston',
            ima: 'https://robohash.org/user2',
            description: 'hola tengo x años soy estudiante de la unju sueño con hacer videojuegos'
        },
        {
            id: 3,
            name: 'Cordoba, Juan Brian Joel',
            ima: 'https://robohash.org/user3',
            description: 'hola tengo x años soy estudiante de la unju sueño con hacer videojuegos '
        },
        {
            id: 4,
            name: 'Macedo, Facundo Emanuel',
            ima: 'https://robohash.org/user4',
            description: 'hola tengo x años soy estudiante de la unju sueño con hacer videojuegos '
        },
        {
            id: 5,
            name: 'Palacios, Carlos Javier',
            ima: 'https://robohash.org/user5',
            description: 'hola tengo x años soy estudiante de la unju sueño con hacer videojuegos '
        },
        {
            id: 6,
            name: 'Sosa, Rodrigo Emanuel Lozano',
            ima: 'https://robohash.org/user6',
            description: 'hola tengo x años soy estudianto de la unju sueño con hacer videojuegos '
        }
    ]
    return (
        <>
            {Nav()}
            <h1 className="title">Desarrolladores</h1>
            <div class="contenedor">

                {users.map((user, i) => {
                    return (<div key={i}>
                        <section className="list">
                            <ul>
                                <h3>{user.name}</h3>
                                <img src={user.ima} />
                                <p>{user.description}</p>
                            </ul>
                        </section>
                    </div>

                    );
                })}
            </div>

        </>
    )

}