const FormInput = ({
  refName,
  inputType,
  inputName,
  inputText,
  inputClassName,
  labelClassName,
  placeHolder,
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
        placeholder={placeHolder}
        ref={refName}
        className={inputClassName}
        type={inputType}
        name={inputName}
      />
    </>
  );
};
export default FormInput;
