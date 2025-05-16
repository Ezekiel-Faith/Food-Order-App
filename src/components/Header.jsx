import React from 'react';
import foodLogo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={foodLogo} alt='Food Logo' />
        <h1>Food-Order</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
