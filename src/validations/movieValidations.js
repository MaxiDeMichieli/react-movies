const movieValidations = {
  title: {
    required: 'Ingrese el título de la película',
    maxLength: {
      value: 45,
      message: 'El título no puede superar los 45 caracteres',
     } 
  },
  rating: {
    required: 'Ingrese el rating de la película',
    min: {
      value: 1,
      message: 'El rating debe ser de 1 a 10'
    },
    max: {
      value: 10,
      message: 'El rating debe ser de 1 a 10',
    },
  },
  awards: {
    required: 'Ingrese la cantidad de premios de la película',
  },
  release_date: {
    required: true,
    validate: (value) => {
      const date = new Date(value).getTime();
      const today = new Date().getTime();
      return date > today
        ? 'La fecha no puede ser posterior a la fecha de hoy'
        : true;
    },
  },
  length: {
    required: 'Ingrese la duración de la película',
  },
  genre_id: {
    validate: (value) => {
      return +value === 0 ? 'Seleccione el género de la película' : true;
    },
  },
};

export default movieValidations;
