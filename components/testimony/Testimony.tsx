"use client"
///Testimony component

///Libraries -->
import styles from "./testimony.module.scss"
import React, { useEffect, useRef, useState } from 'react';
//import { SwiperContainer, SwiperSlide } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper as SwiperCore } from 'swiper/types';
import { EffectCoverflow, Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from "next/image"
import { companyName, shuffleArray } from "@/config/utils";
import { testimonies } from "@/config/database";

///Commencing the code 

/**
 * @title Testimony Component
 * @returns The Testimony component
 */
const Testimony = () => {
    const swiperRef = useRef<SwiperCore>();
    const [stars, setStars] = useState<Array<number>>([1, 2, 3, 4, 5])
  //console.log('Current page:', routerPath);

  return (
    <div className={styles.main} id="testimonials">
        <div className={styles.brief}>
            <div className={styles.brief1}>Everyday we welcome new {companyName} investors</div>
            <div className={styles.brief2}>What some of our Clients have said</div>
        </div>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            slidesPerView={'auto'}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            }}
            fadeEffect={{ crossFade: true }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            //navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
            modules={[ EffectCoverflow, Pagination, Navigation, Autoplay, EffectFade ]}
            className={styles.swipeContainer}
        >
            {shuffleArray(testimonies).map((testimony, id) => (
                <SwiperSlide className={styles.slider} key={id}>
                    <div className={styles.imageDiv}>
                        <Image 
                            className={styles.image}
                            src={testimony?.image?.src}
                            alt=""
                            width={testimony?.image?.width}
                            height={testimony?.image?.height}
                        />
                    </div>
                    <div className={styles.bio}>
                        <span className={styles.bio1}>{testimony?.name}</span>
                        <span className={styles.bio2}>{testimony?.profession}</span>
                    </div>
                    <div className={styles.testimony}>{testimony?.testimony}</div>
                    <div className={styles.stars}>
                        {stars.map((star, id) => (
                            <StarIcon className={styles.starIcon} key={id} />
                        ))}
                    </div>
                </SwiperSlide>
            ))}
            
           
        </Swiper>
        <div className={styles.controller}>
            <button className={`arrow-left arrow ${styles.prev}`} onClick={() => swiperRef.current?.slidePrev()}>
                <KeyboardArrowLeftIcon />
            </button>
            <div className={`swiper-pagination ${styles.pagination}`}></div>
            <button className={`arrow-right arrow ${styles.next}`} onClick={() => swiperRef.current?.slideNext()}>
                <KeyboardArrowRightIcon />
            </button>
            
        </div>
    </div>
  );
};

export default Testimony;