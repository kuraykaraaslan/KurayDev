
'use client';
import React, { useState, ReactNode, useRef, useEffect, useCallback } from 'react';

const buttonClass = "btn btn-circle border-1 border-white text-white hover:bg-white hover:text-black active:bg-white active:text-black bg-opacity-20 sm:bg-opacity-0 hidden sm:flex shadow-lg border border-base-200 group-hover:bg-white group-hover:text-black";
const mobileButtonClass = "btn rounded-full dark:text-black dark:hover:text-white sm:hidden rounded-full -py-2 w-10 h-10  shadow-lg border border-base-200";

const DefaultCaresoulSmooth = ({ children }: { children?: ReactNode[] }) => {
    const [active, setActive] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleRight = useCallback(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const scrollAmount = slider.scrollLeft;
            if (!children) {
                return;
            }
            const slideWidth = slider.scrollWidth / children?.length;
            const slideCount = Math.round(scrollAmount / slideWidth);
            const nextSlide = slideCount + 1;
            const nextScroll = nextSlide * slideWidth;
            if (nextSlide >= children?.length) {
                slider.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }
            else {
                slider.scrollTo({
                    left: nextScroll,
                    behavior: 'smooth'
                });
            }

            setActive(nextSlide);
           
        }
    }, [children]);

    const handleLeft = useCallback(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const scrollAmount = slider.scrollLeft;
            if (!children) {
                return;
            }
            const slideWidth = slider.scrollWidth / children?.length;
            const slideCount = Math.round(scrollAmount / slideWidth);
            const nextSlide = slideCount - 1;
            const nextScroll = nextSlide * slideWidth;
            if (nextSlide < 0) {
                slider.scrollTo({
                    left: slider.scrollWidth - slideWidth,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollTo({
                    left: nextScroll,
                    behavior: 'smooth'
                });
            }

            setActive(nextSlide);
        }
    }, [children]);

    const setSlide = useCallback((index: number) => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            if (!children) {
                return;
            }

            const slideWidth = slider.scrollWidth / children?.length;
            const nextScroll = index * slideWidth;
            slider.scrollTo({
                left: nextScroll,
                behavior: 'smooth'
            });
            setActive(index);
        }
    }
    , [children]);

    const handleScroll = useCallback(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            if (!children) {
                return;
            }
            const slideWidth = slider.scrollWidth / children?.length;
            const slideCount = Math.round(slider.scrollLeft / slideWidth);
            setActive(slideCount);
        }
    }
    , [children]);

    useEffect(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            slider.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (sliderRef.current) {
                const slider = sliderRef.current;
                slider.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);

    
    //create a timer for auto slide
    const timer = useRef<NodeJS.Timeout | null>(null);

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }
        timer.current = setInterval(() => {
            handleRight();
        }, 10000);
    }

    function stopTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }
    }

    function handleMouseEnter() {
        stopTimer();
    }

    function handleMouseLeave() {
        startTimer();
    }

    useEffect(() => {
        //if screen is mobile, do not start timer
        /*
        if (window.innerWidth < 640) {
            return;
        }
        */
        startTimer();
        return () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        };
    }, []);

    return (
        <>
            <div className="group carousel bg-base-100 w-full min-h-screen" style={{ top: '0', left: '0'}} ref={sliderRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onPointerEnter={handleMouseEnter} onPointerLeave={handleMouseLeave}>
                {children?.map((child, index) => (
                    <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index}>
                        {child}
                        <a className={buttonClass} style={{ zIndex: 20, position: 'absolute', top: '50%', left: '5', marginLeft: '30px' }} onClick={handleLeft}>&#10094;</a>
                        <a className={buttonClass} style={{ zIndex: 20, position: 'absolute', top: '50%', right: '0', marginRight: '30px' }} onClick={handleRight}> &#10095;</a>
                    </div>
                ))}
            </div>
            <div className="flex carousel-indicators gap-2" style={{ zIndex: 50, position: 'relative', left: '0', right: '0', transform: 'translateY(-50%)', margin: 'auto',
                        bottom: '70px', height: '20px', display: 'flex', justifyContent: 'center' }}>
                {children?.map((_, index) => (
                    <a className={`${mobileButtonClass} ${index === active ? 'active bg-primary' : 'bg-gray-300'} rounded-full overflow-text`} style={{ height: '50px', width: '10px' }}
                    key={index} onClick={() => setSlide(index)}>
                        <span>{index + 1}</span>
                    </a>
                ))}
            </div>
        </>
    );
};

export default DefaultCaresoulSmooth;
