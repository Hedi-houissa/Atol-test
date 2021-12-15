import axios from "axios";
import { FARMEGETFAIL, FARMELOAD } from "../ActionType/FarmeActionType";

export const getAllFarms = () => async (dispatch) => {
  console.log('in get all farms')
  dispatch({ type: FARMELOAD });

  try {
   


    // const requestOptions = {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //     auth: {
    //       username: 'admin',
    //       password: 'pass'
    //    }
    //   }

    // ------------------------
    // var session_url = "http://admin.laitespoir.com:8187/api/farms/list";
    // var username = "admin";
    // var password = "pass";
    // var basicAuth = "Basic " + btoa(username + ":" + password);
    // axios
    //   .get(session_url, {
    //     headers: { Authorization: +basicAuth },
    //     withCredentials: true,
    //   })
    //   .then(function (response) {
    //     console.log("Authenticated");
    //   })
    //   .catch(function (error) {
    //     console.log("Error on Authentication");
    //   });
    // -------------------------------------

    //   return fetch('http://admin.laitespoir.com:8187/api/farms/list', requestOptions)
    //   .then(res => res.json())
    //   .then(user => {  console.log("result", user); });



    let conf = {
      headers: { authorization: localStorage.getItem("user") },
    };
     let result = await axios.get("http://admin.laitespoir.com:8187/api/farms/list",conf)

    //  let result = await axios.get("",{},{ auth: { username: 'admin', password: 'pass' } } )

    // const fetchAuthToken = await axios({
    //   url: 'http://admin.laitespoir.com:8187/api/farms/list',
    //   method: 'GET',
    //   auth: {
    //     Username: 'admin',
    //     Password: 'pass',
    //   },
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Access-Control-Allow-Origin': '*',
    //   }
    // });

    // const err = await axios
    //   .get("http://admin.laitespoir.com:8187/api/farms/list", {
    //     auth: {
    //       username: "admin",
    //       password: "pass", // Bad password
    //     },
    //   })
    //   .catch((err) => err);
    // console.log('msg', err.message); // "Request failed with status code 401"
    // console.log('msg 2 :',err.response.status) // 401 "Unauthorized"


    

    console.log("result get : farms",result);


  } catch (error) {
    console.log("catch");
    dispatch({ type: FARMEGETFAIL });
    console.log(error);
  }
};
