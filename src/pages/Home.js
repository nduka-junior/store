import React from 'react'
import Category from "../components/Category";
import Nav from '../components/Nav';
import Products from "../components/Products";
import useContext from "../data/useContext";
import Loading from "../components/Loading";
function Home() {
  const { loading } = useContext();
  return loading ? (
    <Loading />
  ) : (
      <div>
        <Nav />
      <Products />
    </div>
  );
}

export default Home