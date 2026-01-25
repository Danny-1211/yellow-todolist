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
    return response.data;
  } catch (error) {
    console.error('error', error);
    return error
  }
}

async function addTodo(para) {
  const token = localStorage.getItem('todoToken');
  
  if(!token) {
    return;
  }

  try {
    const response = await axios.post(`${API_PATH.BASE_URL + API_PATH.TODOS_URL}`, para, {
      headers: {
        'Authorization': `${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('error', error);
    return error
  }
}

async function deleteTodo(id) {
  const token = localStorage.getItem('todoToken');
  if(!token) {
    return [];
  }

  try {
    const response = await axios.delete(`${API_PATH.BASE_URL + API_PATH.TODOS_URL + id}`, {
      headers: {
        'Authorization': `${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('error', error);
    return error
  }
}

export {
  getTodos,
  addTodo,
  deleteTodo
}