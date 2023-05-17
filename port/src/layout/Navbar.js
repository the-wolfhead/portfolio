import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
const Navbar = () =>{
    return (
        <div className="w3-top">
            <div id='nav' className="">
                <Link to='/' className="brand-logo"><img src="./image/untitled-4.png" alt="" /></Link>
                    <a><NavLink to='/' className='w3-bar-item w3-button w3-hover-black w3-right'>ABOUT</NavLink></a>
                    <a><NavLink to='/code' className='w3-bar-item w3-button w3-hover-black w3-right'>CODE</NavLink></a>
                    <a><NavLink to='/design' className='w3-bar-item w3-button w3-hover-black w3-right'>DESIGN</NavLink></a>
                    <a><NavLink to='/blog' className='w3-bar-item w3-button w3-hover-black w3-right'>BLOG</NavLink></a>
            </div>
        </div>
    )
}

export default Navbar