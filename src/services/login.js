
import axios from 'axios';

const API_PATH = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  SIGN_IN_URL: import.meta.env.VITE_API_SIGN_IN_URL,
  SIGN_UP_URL: import.meta.env.VITE_API_SIGN_UP_URL 
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


export {
  checkSignIn,
  signUp
}