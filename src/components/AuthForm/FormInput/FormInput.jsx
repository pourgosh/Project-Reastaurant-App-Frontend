const FormInput = ({
  refName,
  inputType,
  inputName,
  inputText,
  inputClassName,
  labelClassName,
  placeHolder,
  inputValue,
  onChange,
  required,
  checked,
  minValue,
  maxValue,
}) => {
  const refFunc = (refrence) => {
    refrence.current.focus();
  };

  return (
    <>
      <label
        className={labelClassName && labelClassName}
        onClick={() => {
          refFunc(refName);
        }}
      >
        {inputText}
      </label>
      <input
        checked={checked && checked}
        required={required && required}
        placeholder={placeHolder && placeHolder}
        ref={refName && refName}
        className={inputClassName && inputClassName}
        type={inputType && inputType}
        name={inputName && inputName}
        value={inputValue && inputValue}
        onChange={onChange && onChange}
        min={minValue && minValue}
        max={maxValue && maxValue}
      />
    </>
  );
};
export default FormInput;
