import React from 'react';
import useMenu from '../../../hooks/useMenu';

const AllFood = () => {
    const [menu] = useMenu()
    console.log(menu);
    return (
        <div>
            All Food List
        </div>
    );
};

export default AllFood;