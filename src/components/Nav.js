import React, { useContext, } from 'react';
import { DoitContext } from '../context/DoitContext';

const Nav = (props) => {

  const { doits } = useContext(DoitContext);

  return (

    <nav className="blue lighten-3">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo left">Do-IT's List</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">You have <span class="new badge">{doits.length}</span> unaccomplished tasks</a></li>
        </ul>
      </div>
    </nav> 
   );

}
 
export default Nav;
