import React from 'react'
import { styled } from 'styled-components'
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { useState } from 'react';


function Card_heart({ item, cart, setCart, cuisine }) {
    const [like, setLike] = useState(false);
    const [isThere, setIsThere] = useState(false);
    
    const addToCart = (productId) => {
      const oneData = cuisine.filter((item)=>{
        return item.id == productId;
      })

      cart.forEach((item)=>{
        if(item.id == productId){
          setIsThere(true)
        }
      })

      const isObjectInArray = cart.some((obj)=>{
        return Object.keys(obj).every((key) => obj[key] === oneData[0][key])
      })

      if(!isObjectInArray){
        setCart([...cart, oneData[0]])
      }else {
        const newData = cart.filter((item) => {
          return item.id != productId;
        })
        setCart(newData)
      }

      // setCart([...cart, oneData[0]])
      // const selectedProduct = cuisine.find((product) => product.id === productId);
      // setCart([...cart, selectedProduct]);
    };
    return (
      <Card_title>
        <h4 >{item.title}</h4>
        <span
          onClick={() => {
            setLike(!like);
            addToCart(item.id)
          }}
          className="like"
        >
          {like ? <FaHeart /> : <FaRegHeart />}
        </span>
      </Card_title>
    );
  }
const Card_title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    h4{
        text-align: center;
        padding: 1px;
    }
`

export default Card_heart