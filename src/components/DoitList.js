import React, { useContext } from 'react';
import Doit from './Doit';
import { DoitContext } from '../context/DoitContext';


const DoitList = () => {

  const { doits } = useContext(DoitContext);

  return doits.length ? (
    <div>
      <ul className="collapsible"> 
        { doits.map(doit => {
          return <Doit key={doit.id} doit={doit} />
        })}
      </ul>
    </div>
    ) : (
      <div>
        <h3>No pending tasks <i className="material-icons medium">sentiment_satisfied</i></h3>
      </div>
    );

}
 
export default DoitList;
