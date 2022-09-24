//import Desarrolladores from "./Desarrolladores";
import desarrolladores from "./desarrolladores.json"
export function DesarrolladoresGrid() {
    return (
        <ul>
            {desarrolladores.map((desarrollador) => (
                <article key={desarrollador.id}>
                    <img src= {desarrollador.img}/> 
                    <h1> {desarrollador.nombre}</h1>
                    <p> {desarrollador.descripcion}</p>
                </article>
            ))}
        </ul>
    );
}