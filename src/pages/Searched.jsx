import React from 'react'
import {useEffect, useState} from 'react'
import { styled } from 'styled-components'
import { useParams, Link } from 'react-router-dom';

function Searched() {
    const api_link = '902e0faee42e445e81d3d3f6fdfa4c7b';
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()
    const getSearched = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_link}&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results);
    };

    useEffect(()=>{
        getSearched(params.search);
    }, [params.search])
  return (
    <Grid>
        {searchedRecipes.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
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
    h4{
        text-align: center;
        padding: 1px;
    }
`

export default Searched