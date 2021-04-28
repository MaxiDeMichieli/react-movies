import { useForm } from 'react-hook-form';
import validations from '../../validations/registerValidations';
import Button from '../Button/index';
import Input from '../Input';

const Register = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`container p-4 d-flex justify-content-center ${className}`}>
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
        <div className="col-12 col-md-8">
          <h3 className="text-center pb-3">Registrate</h3>
        </div>
        <div className="col-12 col-md-9">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
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

            <Button type="submit" text="ENVIAR" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
