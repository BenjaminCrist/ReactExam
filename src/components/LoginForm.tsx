import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import { useApiKey } from './../context/ApiKeyContext';
import { useNavigate } from "react-router";

export interface LoginFormPropsI {
    setKey: Dispatch<SetStateAction<string>>
}

export default function LoginForm() {
    const [localKey, setLocalKey] = useState('');
    const { validateApiKey } = useApiKey();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValid = await validateApiKey(localKey);
        if (isValid) {
            console.log('ça marche');
            navigate('/home')

        }else{
            
            setError(true);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">API Key</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       onChange={e => setLocalKey(e.target.value)}/>
                {error && <div className="alert alert-danger mt-2" role="alert">
                    Invalid API Key. Please try again.
                </div>}
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
