import React, { useEffect, useState } from 'react';
import MenuItem from '../menuitem/MenuItem';

export const menuItems = [
  {
    name: 'Dashboard',
    exact: true,
    to: '/',
    iconClassName: 'bi bi-speedometer2',
  },
  {
    name: 'Content',
    exact: true,
    to: `/content`,
    iconClassName: 'bi bi-speedometer2',
    subMenus: [
      { name: 'Courses', to: '/content/courses' },
      { name: 'Videos', to: '/content/videos' },
    ],
  },
  { name: 'Design', to: `/design`, iconClassName: 'bi bi-vector-pen' },
  {
    name: 'Content 2',
    exact: true,
    to: `/content-2`,
    iconClassName: 'bi bi-speedometer2',
    subMenus: [
      { name: 'Courses', to: '/content-2/courses' },
      { name: 'Videos', to: '/content-2/videos' },
    ],
  },
  { name: 'Design 2', to: `/design-2`, iconClassName: 'bi bi-vector-pen' },
  { name: 'Design 3', to: `/design-3`, iconClassName: 'bi bi-vector-pen' },
  { name: 'Design 4', to: `/design-4`, iconClassName: 'bi bi-vector-pen' },
];

const Sidemenu = ({ onCollapse }) => {
  const [inactive, setInactive] = useState(false);

  console.log(inactive);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll('.sub-menu').forEach(el => {
        el.classList.remove('active');
      });
    }

    // onCollapse(inactive);
  }, [inactive]);

  // Remove active class from submenu

  const removeActiveClassFromSubMenu = () => {};

  useEffect(() => {
    let menuItems = document.querySelectorAll('.menu-item');
    console.log(menuItems);

    menuItems.forEach(el => {
      el.addEventListener('click', e => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach(el => el.classList.remove('active'));
        el.classList.toggle('active');
        console.log(next, 'click');

        if (next !== null) {
          next.classList.toggle('active');
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? 'inactive' : ''}`}>
      <div className='top-section'>
        <h2 style={{ color: 'white' }}>Yo</h2>
        <div className='toggle-menu-btn' onClick={() => setInactive(!inactive)}>
          {inactive ? (
            <i className='bi bi-arrow-right-square-fill'></i>
          ) : (
            <i className='bi bi-arrow-left-square-fill'></i>
          )}
        </div>
      </div>

      <div className='search-controller'>
        <button className='search-btn'>
          <i class='bi bi-search'></i>
        </button>

        <input type='text' placeholder='search' />
      </div>

      <div className='divider'></div>

      <div className='main-menu'>
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={e => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
