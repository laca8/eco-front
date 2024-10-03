import React from 'react'
import SliderCategory from './SliderCategory'

const Categories = () => {
  return (
    
   
    <div className='container'>
        
    <div className='flex flex-row mt-4 gap-2 mb-4 ml-2'>
    
        <span className='bg-red-800 w-2.5 h-4 text-red-800 rounded-sm'>.</span>
        <span className='text-red-800 text-xs font-bold'>Categories</span>
    </div>

        <h1 className='text-6xl mr-5'>Browse By Category</h1>

    <div className='mt-10'>
   <SliderCategory/>
    </div>
    
<hr className='mt-10'/>
</div>
  )
}

export default Categories