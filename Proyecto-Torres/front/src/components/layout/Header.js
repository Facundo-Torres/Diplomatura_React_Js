import React from 'react';
import "../styles/components/layout/Header.css"

const Header = (props) => {
   return (
      <header class="p-3 bg-danger text-white">

         <div className="container">
            <div className="container-fluid">
               <div className="container">
                  
                     <img src={'https://facundo-torres.github.io/Diplomatura-Reactjs/Git-5-Proyecto-1/img/logosoybnb.png'} alt="logo" width="auto" height="auto" />
                   
               </div>
            </div>
         </div>
      </header>

   );
}

export default Header;