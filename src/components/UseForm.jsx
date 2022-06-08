import { useState, useEffect } from "react";
 
const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        // size: '',
        // quantity: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        setErrors(validate(values));
        setIsSubmitting(true)
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            // window.location.reload(false);  
        }
    },[errors]);

    return { handleChange, values, handleSubmit, errors};
};

export default useForm;