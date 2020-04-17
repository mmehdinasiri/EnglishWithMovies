require("es6-promise").polyfill();
require("isomorphic-fetch");
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
