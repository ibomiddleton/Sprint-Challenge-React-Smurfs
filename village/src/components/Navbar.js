import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{backgroundColor:'rgb(30,30,30)', display:'flex', flexDirection:'row', alignItems:'center', height:'2rem', color:'white', width:'100%'}}>
        <div style={{flex:1}}>
          <Link to="/" style={{color:'dodgerblue', textDecoration:'none', padding:'10px'}}> Smurfs </Link>
        </div>
        <div style={{flex:1}}> 
           <Link style={{color:'dodgerblue', textDecoration:'none', padding:'10px'}} to="/smurf-form"> Form </Link>
        </div>
    </div>
  );
};

export default Navbar;
