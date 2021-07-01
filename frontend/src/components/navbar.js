import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #bdadff;
  padding: 20px 30px;
  margin: 8px;
  border-radius: 10px;
  color: white;
  font-weight: 900;
`;

const Navbar = () => {
  return (
    <Container>
      <div>*Локация*</div>
      <div>Магазины</div>
      <div>Профиль</div>
      <div>Корзина</div>
    </Container>
  );
};
export default Navbar;
