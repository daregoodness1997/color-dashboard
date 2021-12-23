import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const MenuItem = ({ name, subMenus, iconClassName, onClick, to }) => {
  const [expand, setExpand] = useState(false);
  return (
    <li onClick={onClick}>
      <Link
        onClick={() => setExpand(!expand)}
        to={to}
        exact
        className='menu-item'
      >
        <div className='menu-icon'>
          <i className={iconClassName}></i>
        </div>
        <span>{name}</span>
        {subMenus && subMenus.length > 0 ? (
          <ul className={`sub-menu ${expand ? 'active' : ''}`}>
            {subMenus.map((menu, index) => (
              <li key={index}>
                <NavLink to={menu.to} style={{ color: 'white' }}>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : null}
      </Link>
    </li>
  );
};

export default MenuItem;
