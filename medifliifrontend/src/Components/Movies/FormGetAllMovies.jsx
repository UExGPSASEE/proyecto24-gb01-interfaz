import React, { useState } from 'react';
import moviesServices from '../../Controller/movieController';
import Loading from '../Loading';
import { useSearchParams } from 'react-router-dom';

export default function FormGetAllMovies () {
    const params = useSearchParams()
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError('');
        setMovies([]);

       
            // Llamada a la API para obtener todas las películas
            moviesServices.getAllMovies().then((response)=> {
                setMovies(response); // Asignar la lista de películas al estado
                console.log(response)

                if (response.length === 0) {
                    setError('No se encontraron películas.');
                
                }
            }).catch((err)=>{
                console.error('Error al obtener las películas:', error);
            setError('Hubo un problema al obtener las películas.');
            })
            
            
        
        setTimeout(()=> setLoading(false),3000)
    };

    return (
        <>
        {loading? <Loading/> : <div className="card-body">
            <h3 className="text-center">Obtener todas las películas</h3>
            <form onSubmit={handleFormSubmit}>
                <button className="btn btn-primary" type="submit">Buscar</button>
            </form>

            {error && <div className="alert alert-danger mt-3">{error}</div>}

            {movies.length > 0? (
                <div className="mt-4">
                    <h4>Lista de Películas</h4>
                    <ul className="list-group">
                        {movies.map((movie) => (
                            <li key={movie.id} className="list-group-item">
                                <strong>{movie.title}</strong><br />
                                <small><em>Duración:</em> {movie.duration} minutos</small><br />
                                <small><em>Fecha de estreno:</em> {movie.releaseDate}</small>
                                {/* Puedes agregar más detalles si lo deseas */}
                            </li>
                        ))}
                    </ul>
                </div>
            ): <p>No ha películas disponibles</p> }
        </div>}
        
        </>
    );
};
