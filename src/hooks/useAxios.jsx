import axios from 'axios';
import React from 'react'

const instance = axios.create({
  baseURL: 'https://assignment-server-virid.vercel.app/api/v1',
    // baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
  });
const useAxios = () => {
  return instance;
}

export default useAxios