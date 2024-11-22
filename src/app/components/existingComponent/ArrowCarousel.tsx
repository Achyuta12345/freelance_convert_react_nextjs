import React, { useState, useEffect } from "react"
 import { Pagination, A11y, Navigation } from 'swiper';
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import classNames from "classnames";
 
 export function ArrowCarousel({
     items, colorTheme = "Black", slidesPerView = 1
 }: {
     items: React.ReactElement[],
     slidesPerView : number
     colorTheme?: "White" | "Black",
 } ) {
     return (
         <Swiper
             modules={[Navigation, Pagination, A11y]}
             navigation
             pagination={true}
             slidesPerView={slidesPerView}
         >
             {items.map((item: React.ReactElement, i: number) => <SwiperSlide
                 className={classNames(colorTheme == "White" ? "bg-white" : "bg-black","p-10")} key={i}>
                 {item}
             </SwiperSlide>)}
         </Swiper>
     )
 }