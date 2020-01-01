import React from 'react';
const Header =(props) =>{
    return(
        <React.Fragment>
        <div class="header">
         <div class="nav">
            Product Hunt

         </div>
         <div class="login">
             <button class="btn">Login</button>
             <button class="btn">Enroll</button>

         </div>
        </div>
        </React.Fragment>
    )
}

export default Header;