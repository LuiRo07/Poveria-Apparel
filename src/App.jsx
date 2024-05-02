import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function App() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, 
    {
      url: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1682096572836-9f77d9b32c25?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  // useStates
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [autoPlay, setAutoPlay] = useState(null)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // autoplay logic
  // UseEffect
  // useEffect(() => {
  //   timeOut = 
  //     autoPlay && setTimeout(() => {
  //       nextSlide();
  //     }, 2500);
  // })

  return (
    <div className='flex max-w-full w-screen h-screen relative group'>
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='transition-all w-full h-full bg-center bg-cover duration-500'
        ></div>
      {/* left arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      {/* right arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
    </div>
  )
}

export default App
