export const upperFirst = (str) => {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// export const firstWord = (str) => str.split(" ")[0];
export const firstWord = (str) => str;

export const goodMsg = (body) => {
  return { variant: "success", body: body };
};

export const warningMsg = (body) => {
  return { variant: "warning", body: body };
};

export const badMsg = (body) => {
  return { variant: "danger", body: body };
};

export const successResponse = (response) => {
  return 200 <= response.status && response.status <= 299;
};

export const cloneObj = (obj) => JSON.parse(JSON.stringify(obj));

export const formatDate = (date) => {
  return date.substr(0, 10).split("-").reverse().join(".");
};

export const isEmptyObject = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const proxy_url = "";

// FETCHERS
export const getFetch = (url) => {
  return fetch(proxy_url + url, {
    method: "GET",
  }).then((result) => result.json());
};

export const postFetch = (url, body) => {
  console.log("body", body);
  return fetch(proxy_url + url, {
    method: "POST",
    body: body,
  }).then((result) => result.json());
};

// BROWSER
export const reloadPage = () => window.location.reload(false);

export const setItem = (key, value) => localStorage.setItem(key, value);
export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch (e) {
    return {};
  }
};
export const removeItem = (key) => localStorage.removeItem(key);
