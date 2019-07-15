import React, { createContext, useEffect, useReducer } from 'react';
import { DoitReducer } from '../reducers/DoitReducer';

export const DoitContext = createContext();

const DoitContextProvider = (props) => {

  const [doits, dispatch] = useReducer(DoitReducer, [], () => {
    const data = localStorage.getItem('doits');
    return data ? JSON.parse(data) : []
  })

  useEffect(() => {
    localStorage.setItem('doits', JSON.stringify(doits))
  }, [doits])

  return (

    <DoitContext.Provider value={{ doits, dispatch }}>
      { props.children }
    </DoitContext.Provider>

    );

}
 
export default DoitContextProvider;











