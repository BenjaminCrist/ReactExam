
import { useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
<Link to="/home" className="btn btn-primary">Retour à la page d'accueil</Link>
interface Movie {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
}



function SearchPage() {
    const location = useLocation();
    const searchResults = location.state?.results || [];

    return (
        <div className='container'>
            <Link to="/home" className="btn btn-primary">Retour à la page d'accueil</Link>
            <div className="row">
                {searchResults.map((movie: Movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
