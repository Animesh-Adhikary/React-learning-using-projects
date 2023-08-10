import React from 'react';
import { useState } from 'react';
import Menu from "./menuApi";
import MenuCard from './MenuCard';

const Resturant = () => {
    const [menuData, setMenu] = useState(Menu);
    console.log(menuData);

    const filterItem = (item) => {
        const updatedList = Menu.filter((curElm) => {
            if (curElm.category === item) {
                return curElm;
            }
            if(item === "All"){
                return curElm;
            }
        });
        setMenu(updatedList);

    }

    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
                    <button className='btn-group__item' onClick={() => filterItem("All")}>All</button>
                </div>
            </nav>

            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant