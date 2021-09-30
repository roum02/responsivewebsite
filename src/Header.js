import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    justify-content: center;
    height: 4rem;
  }
`;

const Logo = styled.button`
  display: flex;
  font-weight: 600;
  font-size: 3rem;
  align-items: center;
  margin-left: 2rem;
  outline: none;
  background: none;
  border: none;
`;

const Button = styled.button`
  display: flex;
  font-size: 1.1rem;
  margin-right: 2rem;
  align-items: center;
  outline: none;
  background: none;
  border: none;
  &:hover {
    background: lightgrey;
    border-radius: 5px;
  }
`;

const Menu = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <div>
      <Box>
        <Logo>EFUB</Logo>
        <Menu>
          <Button>About</Button>
          <Button>Contents</Button>
          <Button>Contact</Button>
        </Menu>
      </Box>
    </div>
  );
};

export default Header;
