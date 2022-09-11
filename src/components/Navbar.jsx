import { useState } from "react";

function Navbar(){

    const [navBar,setNavBar] = useState(false)
    
    const navToggle = () =>{
        setNavBar(!navBar);
        console.log('activando el toggle')
    }

    return(
        <div className='nav-container'>
            <span
                className='menu'    
                onClick={navToggle}
            >
                X
            </span>

            <div className={navBar ? 'overlay' : ''}>
            </div>
                <ul className={navBar ? 'nav-menu nav-menu-active' : 'nav-menu'}>
                    <li 
                        onClick={navToggle}
                        className='toggle-button icon'
                    >
                        X
                    </li>
                    <li className='menu-item'>Home</li>
                    <li className='menu-item'>Portfolio</li>
                    <li className='menu-item'>About me</li>
                </ul>
       
        </div>
        




    )
}
export default Navbar;