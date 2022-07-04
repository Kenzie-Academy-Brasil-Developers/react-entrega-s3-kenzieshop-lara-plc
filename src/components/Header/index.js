import React from 'react';
import Logo from '../../images/ButterWide.png'

import { Container } from './styles';

function Header() {
  return (
    <Container>
        <img src={Logo}/>
    </Container>

  );
}

export default Header;