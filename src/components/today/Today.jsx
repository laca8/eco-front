import React,{useEffect,useState} from 'react'
import SliderToday from './SliderToday'

const Today = () => {
    const [time, setTime] = useState()
    const [day, setDay] = useState()
    const [hours, setHours] = useState()
    const [min, setMin] = useState()
    const [sec, setSec] = useState()

    useEffect(() => {
  
      setInterval(() => {
  
        const dateObject = new Date()
        const days = dateObject.getDay()
        const hour = dateObject.getHours()
        const minute = dateObject.getMinutes()
        const second = dateObject.getSeconds()
  
        const currentTime = days  +  ':' + hour + ' : ' + minute + ' : ' + second
        
        setTime(currentTime)
        setDay(days)
        setHours(hour)
        setMin(minute)
        setSec(second)


      }, 1000)
  
    }, [])
  return (
    <div className='container'>
        
        <div className='flex flex-row gap-2 mb-4 ml-2'>
        
            <span className='bg-red-800 w-2.5 h-4 text-red-800 rounded-sm'>.</span>
            <span className='text-red-800 text-xs font-bold'>Today`s</span>
        </div>

        <div className='flex flex-row gap-10'>
            <h1 className='text-6xl mr-5'>Flash Sales</h1>
            <div className='flex flex-row gap-10'>
                
                <div>
                    <p className='font-bold'>days</p>{' '}
                      <span className='font-bold text-2xl'>{day}</span>{' '}
                      <span className='text-2xl text-red-800 ml-10'>:</span>{' '}
                </div>
                

                <div>
                    <p className='font-bold'>hour</p>{' '}
                      <span className='font-bold text-2xl'>{hours}</span>{' '}
                      <span className='text-2xl text-red-800 ml-10 '>:</span>{' '}
                </div>
    
          

                <div>
                    <p className='font-bold'>minute</p>{' '}
                      <span className='font-bold text-2xl'>{min}</span>{' '}
                      <span className='text-2xl text-red-800 ml-10'>:</span>{' '}
                </div>
                  
          
                <div>
                    <p className='font-bold'>second</p>{' '}
                      <span className='font-bold text-2xl'>{sec}</span>{' '}
                      <span className='text-2xl text-red-800'></span>{' '}
                </div>
            
               
            </div>

        </div>

        <div className='mt-10'>
       <SliderToday/>
        </div>
        <div className='flex justify-center'>
            <button className='bg-red-800 text-white p-2 mb-5 mt-5 rounded-sm'>View All Products</button>
        </div>
<hr/>
    </div>
  )
}

export default Today