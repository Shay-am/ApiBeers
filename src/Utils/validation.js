export const checkEmail = (params, callback) => {
  if (!params.email) {
    callback(false);
  } else if (!/\S+@\S+\.\S+/.test(params.email)) {
    callback(false);
  } else {
    callback(true);
  }
};

export const checkPassword = (params, callback) => {
  if (params.password.length < 5) {
    callback(false);
  } else {
    callback(true);
  }
};
