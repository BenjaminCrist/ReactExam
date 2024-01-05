import { useState } from 'react';
import { useApiKey } from './../context/ApiKeyContext';

// Définissez un type pour les props de votre composant
interface SearchBarProps {
    onSearch: (results: any[]) => void; // Remplacez 'any[]' par un type plus spécifique si vous l'avez
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const { apiKey } = useApiKey();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        if (!searchTerm) return;
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchTerm)}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                onSearch(data.results); // Assurez-vous que 'data.results' est de type 'any[]'
            })
            .catch(error => console.error('Erreur lors de la recherche:', error));
    };

    return (
        <>
            <div className="input-group">
                <div className="form-outline">
                    <input 
                        type="search" 
                        id="form1" 
                        className="form-control" 
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSearch}>
                    Rechercher
                </button>
            </div>
        </>
    );
}
