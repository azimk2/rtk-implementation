export const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email required";
    if (!values.password) { errors.password = "Password required";}
    else if (values.password.length < 4) { errors.password = "Password must be more than 4 characters";}
    else if (values.password.length > 10) { errors.password = "Password can not exceed more than 10 characters";}
    return errors;
}