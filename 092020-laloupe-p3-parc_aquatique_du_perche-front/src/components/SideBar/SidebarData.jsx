import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

const SideBarData = [
  {
    title: "Accueil",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Activités",
    path: "/Activites",
    icon: <FaIcons.FaReact />,
    cName: "nav-text",
  },
  {
    title: "Espaces",
    path: "/Espaces",
    icon: <FaIcons.FaCarSide />,
    cName: "nav-text",
  },
  {
    title: "Réservation aquagym",
    path: "/Aquagym",
    icon: <FaIcons.FaReact />,
    cName: "nav-text",
  },
  {
    title: "Actualités",
    path: "/Actualites",
    icon: <RiIcons.RiCommunityLine />,
    cName: "nav-text",
  },
];

export default SideBarData;
