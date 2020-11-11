import React from "react";
import "./NavMenu.css";


export const NavMenu = (props) => (
  <nav className="main-nav">
    <ul>
        {props.items.map(item => (
            <li>
                <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
            </li>
        ))}
    </ul>
  </nav>
);
