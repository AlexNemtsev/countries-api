import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';
import { useEffect, useState } from 'react';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div``;

const Title = styled.a.attrs({
  href: '/',
})``;

const ModeSwitcher = styled.div``;

export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher>
            <IoMoon /> Light theme
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
}
