import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);


  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fa-solid fa-w"></i>izer      
            <i class="fa-solid fa-splotch"></i>
            </Link>
            
                

            <div className='menu-icon' onClick={handleClick}>
                <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Courses' className='nav-links' onClick={closeMobileMenu}>
                        Courses
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/features' className='nav-links' onClick={closeMobileMenu}>
                        Features
                    </Link>
                </li>
              <li className='nav-item'>
                     <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
                         Pricing
                     </Link>
                 </li>

                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign In
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign In</Button>}

        </div>
    </nav>

    </>
  )
}

export default Navbar;


// import React, {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import {Button} from './Button';
// import './Navbar.css';
// import verifyToken from '../api/verifyToken';

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if(window.innerWidth <= 960){
//             setButton(false)
//         } else {
//             setButton(true)
//         }
//     };

//     useEffect(() => {
//         showButton();
//       }, []);

//     window.addEventListener('resize', showButton);


    
//   return (
//     <>
//     <nav className="navbar">
//         <div className="navbar-container">
            
//             <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//             Wizer      
//             <i class="fa-solid fa-splotch"></i>
//             </Link>
            
                

//             <div className='menu-icon' onClick={handleClick}>
//                 <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
//             </div>

//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                         Home
//                     </Link>
//                 <li className='nav-item'>
//                     <Link to='/Courses' className='nav-links' onClick={closeMobileMenu}>
//                         Courses
//                     </Link>
//                 </li>
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/features' className='nav-links' onClick={closeMobileMenu}>
//                         Features
//                     </Link>
//                 </li>
            
//                 <li className='nav-item'>
//                     <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
//                         Pricing
//                     </Link>
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
//                         Contact Us
//                     </Link>
//                 </li>
//                 <li>
                    
                    
//                      <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
//                         Sign In
//                     </Link>
//                 </li>
//             </ul>
//             {button && <Button link="/sign-in" buttonStyle='btn--outline'>Sign In</Button>}
            
//         </div>
//     </nav>

//     </>
//   )
// }

// export default Navbar
