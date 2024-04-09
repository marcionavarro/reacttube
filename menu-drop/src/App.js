import logo from './logo.svg';
import porttrait from '../src/img/perfil.jpg';
import user from '../src/img/user.png';
import edit from '../src/img/003-edit.png';
import mail from '../src/img/002-email.png';
import settings from '../src/img/004-settings.png';
import help from '../src/img/005-sos.png';
import logout from '../src/img/001-log-out.png';
import './App.css';

import { useState, useEffect, useRef } from 'react';


function App() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }
    }

    document.addEventListener("mousedown", handler);

    return() => {
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={() => {setOpen(!open)}}>
          <img src={porttrait}></img>
        </div>
        
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <h3>the kiet <br /> Website Designer</h3>
          <ul>
            <DropdwnItem img={user} text={"My Profile"}/>
            <DropdwnItem img={edit} text={"Edit Profile"}/>
            <DropdwnItem img={mail} text={"Inbox"}/>
            <DropdwnItem img={settings} text={"Settings"}/>
            <DropdwnItem img={help} text={"Help"}/>
            <DropdwnItem img={logout} text={"Logout"}/>
          </ul>
        </div>

      </div>
    </div>
  );
}

function DropdwnItem(props){
  return(
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
}

export default App;
