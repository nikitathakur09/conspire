import React from 'react';
import "./App.css";
import Header from "./Header";


import Login from './Login';
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import { useStateValue } from './StateProvider';
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
    {!user ? (
      <Login />
    ) : (
      <>
        <Header />

        <div className="app__body">
        
          <Sidebar/>
          <Feed />
          
        </div>
      </>
    )}
  </div>
  );
}

export default App;
