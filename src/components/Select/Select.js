const Select = ({
  register,
  name,
  error,
  placeholder,
  defaultValue,
  label,
  className,
  options,
  validation
}) => {
  return (
    <div className={`mb-3 ${className}`}>
      <label className="form-label w-100">
        {label && label}
        <select
          name={name}
          className={`form-select ${error ? 'input-error' : ''}`}
          defaultValue={defaultValue}
          {...register(name, validation)}
          autoComplete="off"
          autoCorrect="off"
        >
          <option hidden value="0">{placeholder}</option>
          {options &&
            options.map((option) => (
              <option value={option.id} key={option.id}>{option.name}</option>
            ))}
        </select>
      </label>
      {error && <span className="text-danger">{error.message}</span>}
    </div>
  );
};

export default Select;
