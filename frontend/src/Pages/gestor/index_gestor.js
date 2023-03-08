import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profile';
import Registration_form from '../../components/Form/Registration_form';
import Example from '../../components/Notifications/Notifications'

export const Index_gestor = () => {
  return (
  <>
    <Header/>
    <Profile />
    <Registration_form/>
    {/* <Example/> */}
  </>
  )
}