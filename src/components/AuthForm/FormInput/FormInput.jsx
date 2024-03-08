const FormInput = ({
  refName,
  inputType,
  inputName,
  inputText,
  inputClassName,
  labelClassName,
  placeHolder,
  newUser,
  onChange,
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
        value={newUser}
        onChange={onChange}
      />
    </>
  );
};
export default FormInput;
