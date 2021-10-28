import React, {useEffect, useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {validate} from "./validator";
import {toastHandler} from "../../common/toastify";
/*import {setErrors, errors, getMovie} from "../../features/movies/moviesSlice";
import {useDispatch, useSelector} from "react-redux";*/

const Create = () => {
    const initialValues = {email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isValidated, setIsValidated] = useState(false);
    /*const err = useSelector(errors);
    const dispatch = useDispatch()*/
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate(formValues);
        setFormErrors(errors);
        //dispatch(setErrors(errors));
        setIsValidated(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isValidated) {
            toastHandler(201, 'Movie created successfully!')
        }
    }, [formErrors]);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        isInvalid={!!formErrors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder=""
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        isInvalid={!!formErrors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formErrors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Create;
