import React from 'react'
import Category from "../components/Category";
import Nav from '../components/Nav';
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <Nav />
      <Category />
      <Products />
    </div>
  );
}

export default Home