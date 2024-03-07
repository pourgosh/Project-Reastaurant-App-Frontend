const FormInput = ({ refName, inputType, inputName, inputText }) => {
  const refFunc = (refrence) => {
    refrence.current.focus();
  };

  return (
    <>
      <label
        onClick={() => {
          refFunc(refName);
        }}
      >
        {inputText}
      </label>
      <input ref={refName} type={inputType} name={inputName} />
    </>
  );
};
export default FormInput;
