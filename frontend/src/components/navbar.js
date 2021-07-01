import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #bdadff;
  padding: 20px 30px;
  margin: 10px;
  border-radius: 20px;
  color: white;
  font-weight: 900;
`;

const Navbar = () => {
  return (
    <Container>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>Вход</div>
    </Container>
  );
};
export default Navbar;
