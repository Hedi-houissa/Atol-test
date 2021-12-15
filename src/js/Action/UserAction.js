import axios from "axios";
import {
  USERLOAD,
  LOGINUSERFAIL,
  USERSUCC,
} from "../ActionType/UserActionType";

// check login user
export const logUser = (user) => async (dispatch) => {
  console.log("in login");
  console.log("user", user);
  if (user.username === "" || user.password === "") {
    console.log("if user");
    return dispatch({
      type: LOGINUSERFAIL,
      payload: "Tous les champs sont obligatoires",
    });
  }

  try {
    // const result = await axios.post(
    //   "http://admin.laitespoir.com:8187/auth/login",
    //   user
    // );
    // if (result.data.username !== undefined) {
    //   console.log("try login");
    //   console.log(result.data);

      localStorage.setItem("token", "result.data.username");
      localStorage.setItem("user", "JSON.stringify(result.data)");
    //   dispatch({ type: LOGINUSERSUCC, payload: result.data });

      window.location.href = "/acceuil";
    // } else {
    //   window.location.href = "/login";
    //   dispatch({
    //     type: LOGINUSERFAIL,
    //     payload: "Nom d'utilisateur ou mot de passe incorrect ",
    //   });
    // } 

    // : setTimeout(() => {
    //   toast.error("nom utilisateur ou mot de passe incorrect");
    // }, 400);
  } catch (error) {
    dispatch({
      type: LOGINUSERFAIL,
      payload: "Tous les champs sont obligatoires",
    });
    console.log("catch", error);
  }
};

export const AddUser = (user) => async (dispatch) => {
  console.log("inn add user ", user);
  dispatch({ type: USERLOAD });
  try {
    console.log('in try post add')
    let conf = {
      headers: { auth: localStorage.getItem("user") },
    };

    let result = await axios.post(
      "http://admin.laitespoir.com:8187/api/users/save",
      user,
      conf
    );

    // let uri = "http://admin.laitespoir.com:8187/api/users/save";

    // let h = new Headers();
    // h.append("Accept", "application/json");
    // // h.append("Access-Control-Allow-Origin", "http://localhost:3000");
    // h.append("Access-Control-Allow-Origin", "*");
    // // h.append("Access-Control-Allow-Credentials", "true");
    // let encoded = window.btoa("admin:$2a$10$OVZW24OB90wU5qhkFDdEMeZQzDvDDyJxrMGhFHohCeolN0Jsm/t1a");
    // let auth = "Basic " + encoded;
    // h.append("Authorization", auth);
    // console.log(auth);
    // let req = new Request(uri, {
    //   mode: 'cors',
    //   method: "POST",
    //   headers: h,
    // });
    // //credentials: 'same-origin'

    // fetch(req)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw new Error("BAD HTTP stuff");
    //     }
    //   })
    //   .then((jsonData) => {
    //     console.log("json data :", jsonData);
    //   })
    //   .catch((err) => {
    //     console.log("ERROR:", err.message);
    //   });

    // var session_url = "http://admin.laitespoir.com:8187/api/users/save";

    // var username = 'admin';
    // var password = 'pass';
    // var basicAuth = 'Basic ' + btoa(username + ':' + password);
    // axios.post(session_url, user, {
    //   headers: { 'Authorization': + basicAuth }
    // }).then(function(response) {
    //   console.log('Authenticated');
    // }).catch(function(error) {
    //   console.log('Error on Authentication');
    // });

    // axios
    //   .post(
    //     session_url,
    //     {
    //       withCredentials: true,
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     },
    //     {
    //       auth: {
    //         Password: "pass",
    //         Username: "admin",
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     console.log("Authenticated");
    //   })
    //   .catch(function (error) {
    //     console.log("Error on Authentication");
    //   });

    dispatch({ type: USERSUCC, payload: result.data });
    console.log(result.data);
  } catch (error) {
    console.log("bad request");
    console.log(error);
  }
};
