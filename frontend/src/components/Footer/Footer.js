import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className="fixed bottom-0 left-0 right-0 p-8px text-center text-xs">{`LOJAS QUERO-QUERO S.A. ${year} | todos os direitos reservados`}</footer>;
};

export default Footer;