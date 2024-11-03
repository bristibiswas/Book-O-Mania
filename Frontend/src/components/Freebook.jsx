import React, { useEffect, useState } from 'react';
import list from '../assets/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {

    const filterdata = list.filter((data)=>data.catagory === "Free")



    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
  <>

  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>

    <div>
    <h1 className='text-xl font-semibold pb-2'>Free Offered Books</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eius provident harum necessitatibus iste nostrum porro sint expedita accusantium dolorem minima deleniti dolor sed, tempora, quasi soluta similique. Consequatur, dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eos dolorem? Vero dolores iste minima voluptas! Expedita distinctio assumenda iusto?</p>
    </div>

  
   


  <div>
  <Slider {...settings}>
        {filterdata.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
  </div>
  </div>
  
  </>
  )
}

export default Freebook
