import React from 'react'
import TopHead from '../components/head/TopHead'
import Header from '../components/head/Header'
import Slider from '../components/slider/Slider'
import Today from '../components/today/Today'
import Categories from '../components/categories/Categories'
import Month from '../components/month/Month'
const Home = () => {
  return (
    <>
    <TopHead/>
    <Header/>
    <Slider/>
    <Today/>
    <Categories/>
    <Month/>
    </>
  )
}

export default Home