import { useState, useEffect } from 'react';
import { useApiKey } from './../context/ApiKeyContext';
import MovieCard from './MovieCard';

interface Movie {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
  
}



export default function ListMovies() {
    const [movies, setMovies] = useState([]);
    const { apiKey } = useApiKey();

    useEffect(() => {
        if (apiKey) {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Données reçues:', data);
                    setMovies(data.results)
                }
                )
                .catch(error => console.error('Erreur lors de la récupération des films:', error));
        }
    }, [apiKey]);

    return (
        <>
            <h2>Liste des Films</h2>
            <div className='container'>
                <div className="row">
                    {movies.map((movie : Movie) => (
                           <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    );
}