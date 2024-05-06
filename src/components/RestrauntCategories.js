import React, { useState } from 'react'
import CategoriesItemList from './CategoriesItemList';

const RestrauntCategories = (props) => {
    const {data, showItems, setShowIndex} = props;
    console.log(props);


    const handle_Hide_Show = () => {
      setShowIndex();
    }


    return (

    <div>

      <div className='w-8/12  p-4 my-4 m-auto'>
        <div className='flex justify-between cursor-pointer items-center p-4 rounded-md m-2' onClick={handle_Hide_Show}>
        <span className='font-bold text-lg'>{data.title}  ({data.itemCards.length})</span>
        <span>🔻</span>
        </div>
        

      <div className='flex flex-col'> 
      { showItems && <CategoriesItemList items={data.itemCards}/>}
      </div>
       
      </div>

      <hr className='w-8/12 m-auto h-2 border-none  bg-gray-200'/>
   
    </div>
  )
}

export default RestrauntCategories
