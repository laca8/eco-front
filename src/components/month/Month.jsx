import React from 'react'
import Button from 'react-bootstrap/Button';

const Month = () => {
  return (
    
    <div className='container'>
        
    <div className='flex flex-row gap-2 mt-4 mb-4 ml-2'>
    
        <span className='bg-red-800 w-2.5 h-4 text-red-800 rounded-sm'>.</span>
        <span className='text-red-800 text-xs font-bold'>This Month</span>
    </div>
<div className='flex flex-row justify-between'>


        <h1 className='text-6xl'>Best Selling Products</h1>
        <div className=''>
            <button className='bg-red-800 text-white p-2 mb-5  rounded-sm'>View All</button>
        </div>
        </div>
  <div className='flex flex-row justify-between'>
  <div className='cart relative'>
            <img className='h-3/4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrQZsGfjNuunUqEPlbvD90bEoNftMxFGeOw&s' />
          <div className='absolute top-0 flex flex-row justify-between w-full'>
            <span className='text-white font-bold bg-red-800 text-center text-sm h-3/4 p-1 m-2  rounded-md'>-40%</span>
            <div className='m-2 flex flex-col gap-2'>
            <p className='bg-white p-1 rounded-full mr-2'>
                &
            </p>
            <p className='bg-white p-1 rounded-full mr-2'>
                $
            </p>
            </div>
          

          </div>
          <span className='text-left'>Iphone</span>
            <div className='text-left'>
            <span className='text-red-800 mr-3'>$120</span>  {' '} {' '} <del className='text-gray-600'>$160</del>
            </div>
            </div>
            
            <div className='cart relative'>
            <img className='h-3/4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrQZsGfjNuunUqEPlbvD90bEoNftMxFGeOw&s' />
          <div className='absolute top-0 flex flex-row justify-between w-full'>
            <span className='text-white font-bold bg-red-800 text-center text-sm h-3/4 p-1 m-2  rounded-md'>-40%</span>
            <div className='m-2 flex flex-col gap-2'>
            <p className='bg-white p-1 rounded-full mr-2'>
                &
            </p>
            <p className='bg-white p-1 rounded-full mr-2'>
                $
            </p>
            </div>
          

          </div>
          <span className='text-left'>Iphone</span>
            <div className='text-left'>
            <span className='text-red-800 mr-3'>$120</span>  {' '} {' '} <del className='text-gray-600'>$160</del>
            </div>
            </div>  
            <div className='cart relative'>
            <img className='h-3/4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrQZsGfjNuunUqEPlbvD90bEoNftMxFGeOw&s' />
          <div className='absolute top-0 flex flex-row justify-between w-full'>
            <span className='text-white font-bold bg-red-800 text-center text-sm h-3/4 p-1 m-2  rounded-md'>-40%</span>
            <div className='m-2 flex flex-col gap-2'>
            <p className='bg-white p-1 rounded-full mr-2'>
                &
            </p>
            <p className='bg-white p-1 rounded-full mr-2'>
                $
            </p>
            </div>
          

          </div>
          <span className='text-left'>Iphone</span>
            <div className='text-left'>
            <span className='text-red-800 mr-3'>$120</span>  {' '} {' '} <del className='text-gray-600'>$160</del>
            </div>
            </div>
            <div className='cart relative'>
            <img className='h-3/4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrQZsGfjNuunUqEPlbvD90bEoNftMxFGeOw&s' />
          <div className='absolute top-0 flex flex-row justify-between w-full'>
            <span className='text-white font-bold bg-red-800 text-center text-sm h-3/4 p-1 m-2  rounded-md'>-40%</span>
            <div className='m-2 flex flex-col gap-2'>
            <p className='bg-white p-1 rounded-full mr-2'>
                &
            </p>
            <p className='bg-white p-1 rounded-full mr-2'>
                $
            </p>
            </div>
          

          </div>
          <span className='text-left'>Iphone</span>
            <div className='text-left'>
            <span className='text-red-800 mr-3'>$120</span>  {' '} {' '} <del className='text-gray-600'>$160</del>
            </div>
            </div>  

  </div>
    
<img className='mt-10 w-full rounded-md' style={{height:'400px'}} src='https://english.bharatexpress.com/wp-content/uploads/2023/12/5bbf2e37645d9f9b29464671b0b407f62535e556.jpg'/>
</div>
  )
}

export default Month