import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
  const handledToast = (name) => toast.success(`${name} added to cart`);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {
          FoodData.filter((item) => {
            if (category === 'All') {
              return item.name.toLowerCase().includes(search.toLowerCase());
            } else {
              return category === item.category && item.name.toLowerCase().includes(search.toLowerCase());
            }
          }).map((item) => (
            <FoodCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              desc={item.desc}
              rating={item.rating}
              img={item.img}
              handledToast={handledToast}
            />
          ))
        }
      </div>
    </>
  )
}

export default FoodItems