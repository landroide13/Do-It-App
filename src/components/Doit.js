import React, { useContext } from 'react';
import { DoitContext } from '../context/DoitContext';


const Doit = ({ doit }) => {

  const { dispatch } = useContext(DoitContext);

  return ( 
    <li>
      <div className="collapsible-header">
        <i className="material-icons">filter_drama</i>{ doit.title }: { doit.coment }
      <span className="badge red new" data-badge-caption="Remove" onClick={() => dispatch({ type: 'REMOVE', id: doit.id })} ></span></div>
    </li>
   );

}
 
export default Doit;
