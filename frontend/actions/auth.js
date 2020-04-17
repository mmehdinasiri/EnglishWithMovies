require("es6-promise").polyfill();
require("isomorphic-fetch");
import Cookies from "js-cookie";
import { API } from "../config";

export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (err) {
      console.log(err);
    });
};
export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (err) {
      console.log(err);
    });
};
export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
  return fetch(`${API}/signout`, { method: "GET" })
    .then(() => {
      console.log("signout successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

//set cookie
export const setCookie = (key, value) => {
  if (process.browser) {
    Cookies.set(key, value, { expires: 7 });
  }
};
//remove cookie
export const removeCookie = (key, value) => {
  if (process.browser) {
    Cookies.remove(key, {
      expires: 1,
    });
  }
};
//get cookie
export const getCookie = (key, value) => {
  if (process.browser) {
    return Cookies.get(key);
  }
};

//localStorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
export const removeLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};
//authentication user by pass data to cookie and localStorage
export const authentication = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    if (getCookie("token")) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
