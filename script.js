"use strict"

document.addEventListener('DOMContentLoaded', () => {

        const next = document.querySelector('.next'),
        prev = document.querySelector('.prev'),
        slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width,
        height = window.getComputedStyle(slidesWrapper).height;

        let slideIndex = 1;
        let offset = 0;


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => slide.style.width = width);

    function deleteNoDigits(str) {
        return +str.replace(/\D/g, '');
    }
    // next button
    next.addEventListener('click', () => {

        if (offset == deleteNoDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNoDigits(width); 
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
    });
    // prev button
    prev.addEventListener('click', () => {

        if (offset == 0) {
            offset = deleteNoDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNoDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
    });

});