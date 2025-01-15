import React from 'react'

function HamburgerMenu({open, setOpen}) {

  function handleHamburgerState() {
    setOpen(!open)
  }

  return (
    <div onClick={handleHamburgerState}>
      {/* hamburger menu */}
      <span className="block w-6 h-1 my-1 mx-auto  bg-black"></span>
      <span className="block w-6 h-1 my-1 mx-auto  bg-black"></span>
      <span className="block w-6 h-1 my-1 mx-auto  bg-black"></span>
    </div>
  )
}

export default HamburgerMenu