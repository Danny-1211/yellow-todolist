
import axios from 'axios';
import { getToken } from "../utils/storage.js"
const API_PATH = {
  BASE_URL: "https://todolist-api.hexschool.io",
  SIGN_IN_URL: "/users/sign_in",
  SIGN_UP_URL: "/users/sign_up",
  SIGN_OUT_URL: "/users/sign_out",
  CHECK_OUT_URL: "/users/checkout"
}

async function checkSignIn(para) { // 登入
  try {
    const response = await axios.post(`${API_PATH.BASE_URL + API_PATH.SIGN_IN_URL}`, para);
    return response.data;
  } catch (error) {
    console.error('error', error);
    return error.response.data
  }
}

async function signUp(para) { // 註冊
  try {
    const response = await axios.post(`${API_PATH.BASE_URL + API_PATH.SIGN_UP_URL}`, para);
    return response.data;
  } catch (error) {
    console.error('error', error);
    return error.response.data
  }
}

async function signOut() { // 登出
  const token = getToken();
  if (!token) {
    return;
  }
  try {
    const response = await axios.post(`${API_PATH.BASE_URL + API_PATH.SIGN_OUT_URL}`, {}, {
      headers: {
        'Authorization': `${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('error', error);
    return error.response.data
  }
}

async function checkoutToken() { // 檢查 token 是否過期
  const token = getToken();
  if (!token) {
    return;
  }
  try {
    const response = await axios.get(`${API_PATH.BASE_URL + API_PATH.CHECK_OUT_URL}`,{
      headers: {
        'Authorization': `${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('error', error);
    return error.response.data
  }
}


export {
  checkSignIn,
  signUp,
  signOut,
  checkoutToken
}