import React from 'react'


const Header = () => {
  return (
    <>
    

<nav className=" text-black flex flex-row justify-around m-3">
    <div className='container'>
        <div className='flex flex-row justify-between items-center'>

   

      <h1 className="font-bold text-2xl">Exclusive</h1>

<div>
    <ul className='flex flex-row justify-between gap-5 text-gray mt-2 cursor-pointer'>
        <li className='border-b-4 border-black hover:border-b-4 border-black'>
            <a>Home</a>
        </li>
        <li className='hover:border-b-4 border-black'>
            <a>Contact</a>
        </li>
        <li className='hover:border-b-4 border-black'>
            <a>About</a>
        </li>
        <li className='hover:border-b-4 border-black'>
            <a>Sign Up</a>
        </li>
    </ul>
</div>
<div className="relative">
        
       <input type='text' placeholder='search any product.?' className='bg-gray-100 p-2 mt-2 border-2 border-white rounded-lg'/>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="absolute top-5 right-3 text-black" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
    </div>
   <div className='flex flex-row gap-3'>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
   </div>
   </div>
   </div>
</nav>

<hr/>
    </>
  )
}

export default Header