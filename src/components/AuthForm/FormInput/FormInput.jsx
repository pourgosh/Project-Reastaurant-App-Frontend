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
}) => {
  const refFunc = (refrence) => {
    refrence.current.focus();
  };

  return (
    <>
      <label
        className={labelClassName}
        onClick={() => {
          refFunc(refName);
        }}
      >
        {inputText}
      </label>
      <input
        required={required}
        placeholder={placeHolder}
        ref={refName}
        className={inputClassName}
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={onChange}
      />
    </>
  );
};
export default FormInput;
