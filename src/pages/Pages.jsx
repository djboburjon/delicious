import React from 'react'
import Home from './Home'
import { Route, Routes, useParams } from "react-router-dom"
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe';
import Cart from './Cart';
import { useEffect, useState } from 'react';


function Pages({cart, setCart}) {

  const api_link = '836f51b217084c66b63592e0f5ed6c27';
    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_link}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results);
        
    };

    useEffect(()=>{ 
      getCuisine(params.type)
    }, [params.type])



    const removeFromCart = (index) => {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    };
  return (
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine cart={cart} setCart={setCart}/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
        <Route path='/cart' element={<Cart removeFromCart={removeFromCart} cart={cart}/>}/>
      </Routes>
  )
}

export default Pages