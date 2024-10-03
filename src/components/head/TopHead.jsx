import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
const TopHead = () => {
  return (
    

   
    <div className='bg-black p-3 text-white'>
      <div className='container'>
        <div className='flex flex-row justify-around'>
      <div className='flex flex-row justify-center gap-7 text-center   flex-grow-1'>
       
      <div className='text-center '>
           <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
           </p>
      </div>

      <div className='border-b-2'>
          <h4>
             ShopNow
          </h4>
      </div>

    </div>
    <div className=''>
    <NavDropdown title="English" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Arabic</NavDropdown.Item>
             
      </NavDropdown>
      </div>
      </div>
  
    </div>
    </div>
  )
}

export default TopHead
