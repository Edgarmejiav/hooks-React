import {useState} from "react";

export const useForms = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return [values, handleInputChange, reset];
}

/*   const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm ); */
