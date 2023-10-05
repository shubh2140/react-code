import React from 'react';

const Maps = () => {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const print=()=>{
    return products.map((item, index)=>(
     <div>{item.title}</div> 
    ))
  }

  return (
    <div>{print()}</div>
  );
};

export default Maps;
