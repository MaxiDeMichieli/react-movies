import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import validations from '../../validations/registerValidations';
import Button from '../Button/index';
import Input from '../Input';
import http from '../../API/http';

const Register = ({ className, setToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await http.post('register', data);
      window.localStorage.setItem('_Token', response.data.token);
      setToken(response.data.token);
      console.log(response.data);
      history.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container p-4 d-flex justify-content-center ${className}`}>
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
        <div className="col-12 col-md-8">
          <h3 className="text-center pb-3">Registrate</h3>
        </div>
        <div className="col-12 col-md-9">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              className="col-12"
              name="email"
              type="email"
              placeholder="Email"
              register={register}
              validation={validations.email}
              error={errors.email}
            />

            <Input
              className="col-12"
              name="pass"
              type="password"
              placeholder="Contraseña"
              register={register}
              validation={validations.pass}
              error={errors.pass}
            />

            <Button type="submit" text="ENVIAR" loading={loading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
