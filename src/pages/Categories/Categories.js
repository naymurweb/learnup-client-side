import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from '../others/Card/DetailsCard/DetailsCard';

const Categories = () => {
    const data=useLoaderData()
    console.log('dd',data);
    return (
        <div>
            {
                data.map(items=><DetailsCard item={items} key={items.id}></DetailsCard>)
            }
        </div>
    );
};

export default Categories;