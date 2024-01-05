
interface Movie { 
    id: number;
    title: string;
    overview: string;
    backdrop_path: string; 
}

interface MovieCardProps {
    movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    return (
        <div className="col-md-3">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
