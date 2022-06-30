import React from 'react'
import logo from './logo.png';
import Contact from './contact';
function Topbar ()  {

  return (
    <div className='Site-header'>

        <h3 className='intro'>The Merlin Group</h3>
    <Contact />
       <div><img src={logo} className="merlin-logo" alt="logo" />
            <p className='help'>Donate to our BTC Address: bc1qctwhe9n35k0wctdu2mhm27wep7erexfefxzfl8</p>
       </div>

       
    </div>

  )
}
export default Topbar;
