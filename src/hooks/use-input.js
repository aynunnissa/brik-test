import { useState } from 'react';

const useInput = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = (!valueIsValid && isTouched) || (!valueIsValid && isSubmit);

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const valueChangeManual = val => {
    setEnteredValue(val);
  };

  const defaultValueHandler = val => {
    setEnteredValue(val);
  };

  const inputBlurHandler = event => {
    setIsTouched(true);
  };

  const submitHandler = () => {
    setIsSubmit(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
    setIsSubmit(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueChangeManual,
    defaultValueHandler,
    inputBlurHandler,
    reset,
    submitHandler,
  };
};

export default useInput;
