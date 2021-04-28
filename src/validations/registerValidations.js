const registerValidations = {
    email:  {
        required: "El email es requerido",
        pattern: {
            value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            message: "Ingrese un email válido"
        },
    },
    pass: {
        required: "Ingrese la contraseña",
    }, 
};

export default registerValidations;