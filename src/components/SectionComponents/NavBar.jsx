import TopNav from '../UnitComponents/TopNav';
import BottomNav from '../UnitComponents/BottomNav';
import HamburgerMenu from '../Mobile/HamburgerMenu';
import MobileMenu from '../Mobile/MobileMenu';
import { useState } from 'react';

function NavBar() {
    const [open, setOpen ] = useState(false);
    return (
        <>
            {/* Desktop */ } 
            <div className="md:block hidden">
                <TopNav />
                <BottomNav />
            </div>
            {/* mobile */}
            <div className="md:hidden flex justify-between items-center">
                <ul className="flex justify-between items-center mb-4">
                    <li className="text-4xl font-medium">
                        <a href="#">Poveria</a>
                    </li>
                </ul>
                <HamburgerMenu open={open} setOpen={setOpen}/>
            </div>
            {open ? <MobileMenu /> : <></>}
        </>
    )
}

export default NavBar