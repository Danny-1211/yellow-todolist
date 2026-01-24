import axios from 'axios';

const API_PATH = {
  BASE_URL: import.meta.env.VITE_BASE_URL,
  TODOS_URL: import.meta.env.VITE_API_TODOS,
}


async function getTodos() {
  const token = localStorage.getItem('todoToken');
  
  if(!token) {
    return [];
  }

  try {
    const response = await axios.get(`${API_PATH.BASE_URL + API_PATH.TODOS_URL}`, {
      headers: {
        'Authorization': `${token}`
      }
    });
    // console.log('res', response.data.data)
    return response.data;
  } catch (error) {
    console.error('error', error);
    return error.response.data
  }
}

export {
  getTodos
}