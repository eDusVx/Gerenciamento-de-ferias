import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profile';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

export const Index_colaborador = () => {
  return (
  <>
    <Navbar/>
    <Profile />
    <Footer/>
  </>
  )
}
