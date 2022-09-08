import {Link} from 'react-router-dom';
import React from 'react';

const Navbar = () => {

    return ( 

<div className="navbar">
      <nav  class="shadow p-3 mb-5 bg-body rounded">
      
         <img src="anime.png" alt="not found" className='logo' />

         <input type="search"  placeholder='seach...' class="border border-danger"/>
         <button id="search"><img src="search2.png" alt="not found" class="btn btn-primary" height={53}/></button>
          <Link to="/"><h1 id='home'>Home</h1></Link>
         
         <Link to="/wishlist"><h1 id='whishlist'>Wishlist</h1></Link>
         
      </nav>
</div>

     );
}
 
export default Navbar;