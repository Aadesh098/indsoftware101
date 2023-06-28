import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({ setCatnavMobile }) => {
  const [showCategories, setShowCategories] = useState(false);
  const { data } = useFetch('/categories');

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className='w-full h-full bg-primary p-8'>
      <div
        onClick={() => setCatnavMobile(false)}
        className='flex justify-end mb-8 cursor-pointer'
      >
        <FiX className='text-3xl' />
      </div>
      <div className='flex flex-col gap-y-8'>
      <button
  onClick={toggleCategories}
  className='uppercase font-medium'
  style={{ textAlign: 'left', float: 'left' }}
>
  Our Products
</button>


        {/* Further Navigation Section */}
        {showCategories && (
          <div className='pl-4'>
            {data?.map((category) => (
              <Link
                to={`/products/${category.id}`}
                className='block uppercase font-medium'
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            ))}
          </div>
        )}
        {/* End of Further Navigation Section */}

        <Link to='/vision' className='uppercase font-medium'>
          Our Vision
        </Link>
        <Link to='/contact' className='uppercase font-medium'>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default CategoryNavMobile;
