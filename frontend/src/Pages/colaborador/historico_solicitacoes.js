import React from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profile';
import Example from '../../components/Notifications/Notifications';
import Navbar from '../../components/Sidebar/Sidebar2';

export const Index_colaborador = () => {
  const [navVisible, showNavbar] = useState(false);
  return (
  <>
    {/* <Header/> */}
    <Navbar visible={ navVisible } show={ showNavbar }/>
  </>
  )
}
