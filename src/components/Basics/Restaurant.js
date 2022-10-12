import React, { useState } from 'react'
import './style.css';
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';

const Restaurant = () => {
const [menuData, setMenuData] = useState(Menu);

const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
    });
    setMenuData(updatedList);
};
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={() => filterItem("Popular")}>Popular</button>
            <button className='btn-group__item' onClick={() => filterItem("EveryDay Combos")}>EverDay Combos</button>
            <button className='btn-group__item' onClick={() => filterItem("Sides")}>Sides</button>
            <button className='btn-group__item' onClick={() => filterItem("Desserts")}>Desserts</button>
            <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
        </div>
    </nav>
    <MenuCard MenuData={menuData} />
    </>
  );
};

export default Restaurant;