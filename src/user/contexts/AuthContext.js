import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user && token) {
      setUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}users/login`, {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}users/logout`);
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const register = async (name, email, password, address, phone) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}users/register`, {
        name,
        email,
        password,
        address,
        phone,
      });

      const { user, token } = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      return token;
    } catch (error) {
      console.error(error);
      throw new Error('Đăng ký thất bại.');
    }
  };

  const checkLogin = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return false;
      
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}users/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.authenticated;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  

  const values = {
    user,
    login,
    logout,
    register,
    isAuthenticated,
    loading,
    checkLogin,
  };

  return (
    <AuthContext.Provider value={values}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export { AuthContext };
