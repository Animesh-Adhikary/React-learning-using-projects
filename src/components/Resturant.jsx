import React from 'react';
import { useState } from 'react';
import Menu from "./menuApi";
import MenuCard from './MenuCard';

const Resturant = () => {
    const [menuData, setMenu] = useState(Menu);
    console.log(menuData);

    return (
        <>
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant