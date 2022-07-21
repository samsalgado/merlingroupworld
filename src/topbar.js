import React from 'react'
import logo from './logo.png';
import Contact from './contact';
function Topbar ()  {

  return (
    <div className='Site-header'>
      
        

        <h3 className='intro'>The Merlin Group</h3>
    <Contact />
       <div><img src={logo} className="merlin-logo" alt="logo" />
       <p className='ss'>The Merlin Group Needs Your Support!</p>

       </div>

       
    </div>

  )
}
export default Topbar;
