import styled from "styled-components";
import { useState } from "react";

function TopBar() {
    const[burgerStatus , setburgerStatus] = useState(false);
  return (
    <Container>
      <a href="/">
        <img src="images/logo.svg" alt="tesla-logo"></img>
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <i className="bi bi-list" onClick={()=> setburgerStatus(true)}></i>
      </RightMenu>
      <BurgerNavMenu show={burgerStatus}>
        <CloseWrapper>
          <i className="bi bi-x" onClick={()=> setburgerStatus(false)}></i>
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Use Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">CyperTruck</a>
        </li>
        <li>
          <a href="#">Roaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNavMenu>
    </Container>
  );
}

export default TopBar;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const BurgerNavMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform : ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`;
