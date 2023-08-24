import React from 'react';
import { useState } from 'react';
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const categoryItem = [...new Set(
    Menu.map((currElm) => {
        return currElm.category;
    })
), "All"
];


const Resturant = () => {
    const [menuData, setMenu] = useState(Menu);
    const [categoryItemData, setCategoryItemData] = useState(categoryItem);

    const filterItem = (item) => {
        const updatedList = Menu.filter((curElm) => {
            if (curElm.category === item) {
                return curElm;
            }
            if (item === "All") {
                return curElm;
            }
        });
        setMenu(updatedList);

    }

    return (
        <>

            <Navbar buttonCategoryItems={categoryItemData} filterItem={filterItem} />
            <MenuCard menuData={menuData} />
            <img src="../../public/images/chola.jpg" alt='image'/>
        </>
    )
}

export default Resturant
