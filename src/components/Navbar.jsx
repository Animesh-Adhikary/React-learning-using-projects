import React from 'react'
 

const Navbar = ({ categoryItemData, filterItem }) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                          categoryItemData && categoryItemData.map((currElm) => {//here i was facing problem
                            return (
                                <button className='btn-group__item' onClick={() => filterItem(currElm)}>{currElm}</button>
                            );
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar