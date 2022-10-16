import { json } from "react-router-dom";
import { API } from "../../backend";

export const signup = (user) => {
  return fetch(`${API}auth/register`, {
    method: "POST",
    headers: { 
        Accept: "application/json", 
        "content-type": "application/json" 
    },
    body: JSON.stringify(user),
  })
  .then((response) => {
    return response.json()
})
.catch((err) => {
    return console.log(err);
})
};

export const signin = (user) => {
  return fetch(`${API}auth/login`,
  {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    return response.json()
  })
  .catch(err=>{
    console.log(err);
  })
}

export const autnenticate = (data,next)=>{
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt",JSON.stringify(data))
    next()
  }
};

export const signout = (next) =>{
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt")
    next();
  }
}

export const isAuthenticated = () =>{
  if (typeof window == "undefined") {
    return false
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"))
  }
  else{
    return false
  }
}