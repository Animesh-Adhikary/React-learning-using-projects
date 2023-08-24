import React from 'react'


const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className='main-card--container'>
                {menuData.map((currElm) => {
                    console.log(currElm.image)
                    return (
                        <>
                            <div className="card-container" key={currElm.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{currElm.id}</span>
                                        <span className='card-author subtle'>{currElm.category}</span>
                                        <h2 className='card-title'>{currElm.name}</h2>
                                        <span className='card-description subtle'>
                                            {currElm.description}
                                        </span>
                                    </div>
                                    <div className="card-read">Read</div>
                                    <img src={currElm.image} alt={currElm.name + " image"} className='card-media' />

                                    <span className='card-tag subtle'>Order now</span>
                                </div>
                            </div>
                        </>
                    );
                })}
            </section>

        </>
    );
}

export default MenuCard