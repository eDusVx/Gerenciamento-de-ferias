import React from "react";
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="position: fixed; bottom: 0px; ">{`LOJAS QUERO-QUERO S.A. ${year} | todos os direitos reservados`}</footer>;
};

export default Footer;