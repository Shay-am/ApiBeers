import { useState, useEffect } from 'react';

export const useValidate = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  useEffect(() => {}, [values, errors]);

  const handleChange = (e) => {
    setErrors(validate(values));
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      callback(e, ...Object.values(values));
    }

    setErrors(validate(values));
  };
  return { values, handleSubmit, errors, handleChange };
};
