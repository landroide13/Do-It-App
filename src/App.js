import React from 'react';
import DoitContextProvider from './context/DoitContext';
import Nav from './components/Nav';
import NewDoitForm from './components/NewDoitForm';
import DoitList from './components/DoitList';

// npm add @babel/runtime

function App() {
  return (
    <div className="App">
      <DoitContextProvider>
        <Nav />
        <div className="row container">
          <div className="col s6 top50">
            <NewDoitForm />
          </div>
          <div className="col s6 top50">
          <DoitList />
          </div>
        </div>  
      </DoitContextProvider>
    </div>
  );
}

export default App;
