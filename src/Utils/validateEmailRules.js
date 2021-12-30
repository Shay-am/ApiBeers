export const validateEmailRules = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.login) {
    errors.login = 'Login is required';
  } else if (values.login.length < 2) {
    errors.login = 'Login must be at least 3 characters';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 7) {
    errors.password = 'Password must be at least 7 characters';
  }

  return errors;
};
