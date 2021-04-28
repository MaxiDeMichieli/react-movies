import './Input.css';

const Input = ({
  register,
  name,
  type,
  error,
  placeholder,
  defaultValue,
  label,
  validation,
  className,
}) => {
  return (
    <div className={`mb-3 ${className}`}>
      <label className="form-label w-100">
        {label && label}
        <input
          type={type}
          name={name}
          className={`form-control ${error ? 'input-error' : ''}`}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...register(name, validation)}
          autoComplete="off"
          autoCorrect="off"
        />
      </label>
        {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default Input;
