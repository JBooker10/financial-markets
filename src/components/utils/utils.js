export const validate = res =>
  Object.keys(res.response).length === 0 ? "No Results" : res.response;

export const validateArray = res =>
  res.response === undefined || res.response.length == 0
    ? "No Results"
    : res.response;

export const validation = res =>
  Object.keys(res.response).length === 0 ||
  res.response === undefined ||
  res.response.length == 0
    ? "No Results"
    : res.response;

export const log = res =>
  Object.keys(res.response).length === 0
    ? "No Results"
    : console.log(res.response);

export const setHighsAndLows = number =>
  Math.sign(number) === -1 ? "negative" : "positive";
