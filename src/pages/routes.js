import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Register  from './Register';
import Login from './Login';
import Auth from './Register/Auth';
import ForgetMyPasswordAuth from './ForgetPassword/ForgetMyPasswordAuth'
import AuthorizedRegistration from './Register/Auth/AuthorizedRegistration';
import Dashboard from './Dashboard'
import ForgetMyPassword from './ForgetPassword'
import AuthorizedChangePassword from './ForgetPassword/ForgetMyPasswordAuth/AuthorizedChangePassword'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path='/register' element={<Register />} />
      <Route path='/register_authenticate' element={<Auth />} />
      <Route path='/register/authorized_registration' element={<AuthorizedRegistration />} />
      <Route path='/forgetmypassword' element={<ForgetMyPassword />} />
      <Route path='/forgetmypassword/ForgetMyPasswordAuth' element={<ForgetMyPasswordAuth />} />
      <Route path='/forgetmypassword/authorizedchangepassword' element={<AuthorizedChangePassword />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default MainRoutes;