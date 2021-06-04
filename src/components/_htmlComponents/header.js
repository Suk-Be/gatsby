import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Burger } from '../allPages/BurgerMenu/burger';
import { Menu } from '../allPages/BurgerMenu/menu';
import { Headlines } from './headlines';
import { colors } from '../../utils/css/cssColors';
import { measurements } from '../../utils/css/cssMeasurements';
import { fluidCSS } from '../../utils/css/cssUtils';

const fluidHeaderHeight = fluidCSS(
  'height',
  measurements.header.baseHeightMin,
  measurements.header.baseHeightMax
);

const Header = styled.header`
  background: ${colors.background.linearGradient};
  width: ${measurements.header.width};
  ${fluidHeaderHeight}
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  border-bottom: ${measurements.gridEmUnits.bottom} solid
    ${colors.text.secondary};
`;

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = 'main-menu';
  return (
    <Header>
      <Headlines isLogo content="Arbeitsplatzausstattung" />
      <nav ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </nav>
    </Header>
  );
};
