import React, { createContext, useState, useContext, ReactNode } from 'react';


interface ApiKeyContextType {
    apiKey: string;
    setApiKey: (key: string) => void;
    isValidApiKey: boolean;
    validateApiKey: (key: string) => Promise<boolean>;
};


export const apiKeyContext = createContext<ApiKeyContextType>({
    apiKey: '',
    setApiKey: () => { },
    isValidApiKey: false,
    validateApiKey: async () => { return false}
});


interface ApiKeyProviderProps {
    children: ReactNode;
};

export const ApiKey: React.FC<ApiKeyProviderProps> = ({ children }) => {
    const [apiKey, setApiKey] = useState<string>('');
    const [isValidApiKey, setIsValidApiKey] = useState<boolean>(false);

    const validateApiKey = async (key: string) => {
        const url = `https://api.themoviedb.org/3/movie/157336?api_key=${key}`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                setApiKey(key);
                setIsValidApiKey(true);
                return true;
            } else {
                setIsValidApiKey(false);

                return false;
               
            }
        } 
        catch (error) {
            console.error('Erreur lors de la vérification de la clé API:', error);
            setIsValidApiKey(false);
      
            return false
        }
    };

    return (
   
        <apiKeyContext.Provider value={{apiKey, setApiKey, isValidApiKey, validateApiKey }} > { children } </apiKeyContext.Provider>
        
        );
};

// Hook personnalisé pour utiliser le contexte
export const useApiKey = () => useContext(apiKeyContext);
