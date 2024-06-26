import React from "react";
import { Link } from "react-router-dom";

const Navs = () => {
  const LINKS = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Starred",
      to: "/Starred",
    },
  ];
  return (
    <div>
      <ul>
        {LINKS.map((item) =>( 
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
