import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { FaTrash } from "react-icons/fa";
import styled from 'styled-components';

function Cart({ removeFromCart, cart }) {
    const handleRemove = (item) => {
      removeFromCart(item);
    };
  
    return (
      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cart?.map((item) => (
          <Card >
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="" />
            </Link>
            <h4>{item.title}</h4>
            <FaTrash onClick={() => handleRemove()} />
          </Card>
        ))}
      </Grid>
    );
  }

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
`


export default Cart