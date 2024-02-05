import React from 'react'
import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'
import Card_heart from '../components/Card_heart'


function Cuisine({cart, setCart}) {
    const api_link = '902e0faee42e445e81d3d3f6fdfa4c7b';
    const [cuisine, setCuisine] = useState([])
    let {type} = useParams()

    const getCuisine = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_link}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results);
    };

    useEffect(()=>{ 
        getCuisine([type])
    }, [type])

    

    return (
        <Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cuisine.map((item) => (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt="" />
              </Link>
              <Card_heart cart={cart} setCart={setCart} cuisine={cuisine} item={item} />
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


export default Cuisine