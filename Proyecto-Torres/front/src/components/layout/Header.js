import React from 'react';

const Header = (props) => {
   return (
      <header class="p-3 bg-danger text-white">

         <div className="container">
            <div className="container-fluid">
               <div className="container">
                  
                     <img src={'/public/logosoybnb.png'} alt="logo" width="auto" height="auto" />
                  
               </div>
            </div>
         </div>
      </header>

   );
}

export default Header;