'use client';
import { car1, car2, car3, car4, car5 } from '@/util/images';
import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    let slider = document.querySelector('.slider .list') as HTMLElement;
    let items = document.querySelectorAll(
      '.slider .list .item'
    ) as NodeListOf<HTMLElement>;
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    if (!slider || !items || items.length === 0 || !next || !prev || !dots) {
      return;
    }

    let lengthItems = items.length - 1;
    let active = 0;

    next.onclick = function () {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    };

    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    };

    // let refreshInterval = setInterval(() => {
    //   next.click();
    // }, 5000);

    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + 'px';

      let last_active_dot = document.querySelector('.slider .dots li.active');
      if (last_active_dot) {
        last_active_dot.classList.remove('active');
      }
      dots[active].classList.add('active');

      // clearInterval(refreshInterval);
      // refreshInterval = setInterval(() => {
      //   next.click();
      // }, 3000);
    }

    dots.forEach((li, key) => {
      li.addEventListener('click', () => {
        active = key;
        reloadSlider();
      });
    });

    window.onresize = function (event) {
      reloadSlider();
    };
  }, []);
  return (
    <div className='slider' id='slider'>
      <div className='list'>
        <div className='item'>
          <img src={car1} alt={''} />
        </div>
        <div className='item'>
          <img src={car2} alt={''} />
        </div>
        <div className='item'>
          <img src={car3} alt={''} />
        </div>
        <div className='item'>
          <img src={car4} alt={''} />
        </div>
        <div className='item'>
          <img src={car5} alt={''} />
        </div>
      </div>
      <div className='buttons'>
        <button id='prev'>{'<'}</button>
        <button id='next'>{'>'}</button>
      </div>
      <ul className='dots'>
        <li className='active'></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default HomePage;
