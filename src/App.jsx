import { useState } from "react";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Nav>
          <Nav_left>
            <GiKnifeFork />
            <Logo to={"/"}>deliciousss</Logo>
          </Nav_left>
          <Nav_right>
            <Link to={"/cart"}>
              <FaHeart />
              <span className="span">{cart.length}</span>
            </Link>
          </Nav_right>
        </Nav>
        <Search />
        <Category />
        <Pages cart={cart} setCart={setCart} />
      </BrowserRouter>
    </>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav_left = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
const Nav_right = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

export default App;
