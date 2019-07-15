import React, { useState, useContext } from 'react'
import { DoitContext } from '../context/DoitContext';

const NewDoitForm = () => {

  const { dispatch } = useContext(DoitContext);

  const [title, setTitle] = useState('');
  const [coment, setComent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD', doit: {title, coment}})
    setTitle('');
    setComent('');
  }


  return ( 
    <form className="card-panel blue lighten-5" onSubmit={handleSubmit}>
      <div class="input-field">
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      </div>  
      <div class="input-field">
        <input type="text" placeholder="Comment" value={coment} onChange={e => setComent(e.target.value)} />
      </div>

      <button className="btn" type="submit" value="Add Doit">Add Doit</button>
    </form>
   );

}
 
export default NewDoitForm;
