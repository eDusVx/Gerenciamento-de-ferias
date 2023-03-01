import React from "react";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Histórico de solicitações",
    path: "/histórico_solicitacoes",
    icon: <AiIcons.AiOutlineHistory   size={40}/>,
    cName: "nav-text",
  },
  {
    title: "Solicitações",
    path: "/solicitacoes",
    icon: <AiIcons.AiOutlineCalendar size={28}/>,
    cName: "nav-text",
  }
];