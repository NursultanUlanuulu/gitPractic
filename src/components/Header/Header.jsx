import React from 'react'
import './style.scss'
function Header() {
  return (
    <header>
     <div className='header'>
   <div>
     <h1>ЛОГО</h1>
   </div>
    <ul>
        <li>text1</li>
        <li>text2</li>
        <li>text3</li>
        <li>text4</li>
        <li>text5</li>
    </ul>
    <div>
        <button>Логин</button>
        <button>Регистер</button>
    </div>
     </div>
    </header>
  )
}

export default Header
