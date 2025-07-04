// src/Pages/Services/Apiservices.js
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users'; // Replace with your actual API

const apiService = {
  getData: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('GET error:', error);
      return [];
    }
  },

  postData: async (data) => {
    try {
      const response = await axios.post(BASE_URL, data);
      return response.data;
    } catch (error) {
      console.error('POST error:', error);
    }
  },

  putData: async (id, data) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('PUT error:', error);
    }
  },

  deleteData: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('DELETE error:', error);
    }
  },
};

export default apiService;
