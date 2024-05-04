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
    }
  ]

  // useStates
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autPlay, setAutoPlay] = useState(null)

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
  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 2500)
  })

// header component
function Header({ currentIndex }) {
  if (currentIndex === 1) {
    return <h1 className="basis-2/4 text-5xl">Exclusive Cool Summer</h1>
  } else {
    return <h1 className="basis-2/4 text-5xl">Exclusive Spring</h1>
  }
}
  

  return (
    <div className='flex max-w-full w-screen h-[80vh] relative group'>
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='transition-all w-full h-full bg-center bg-cover duration-500'
        >
          <div className="absolute left-[10%] top-[35%]">
            <h3 className="basis-1/3">Best Relaxing Collection</h3>
            <div className="my-8">
              <Header 
                currentIndex={currentIndex}
              />
              <h1 className="text-5xl">Collection</h1>  
            </div>
            <button className="rounded-full bg-slate-900 text-slate-300 px-7 py-2 basis-1/3 text-sm">VIEW MORE</button>  
          </div> 
        </div>
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
