import { useState, useEffect } from 'react';

export const useValidate = (callback, validate) => {
  const [values, setValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // console.log(errors);
    // if (Object.keys(errors).length === 0 && isSubmitting) {
    //   callback();
    // }
  }, [values, errors]);

  const { message } = callback();
  if (message) {
    setErrors((errors.email = message));
  }

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
    setIsSubmitting(true);
  };
  return { values, setErrors, setIsSubmitting, handleSubmit, errors, isSubmitting, handleChange };
};
