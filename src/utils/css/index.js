import { createGlobalStyle } from 'styled-components';
import { reset } from './cssReset';
import { gatsbyReset } from './cssGatsbyReset';
import { typo } from './cssTypo';
import { ownReset } from './cssOwnResets';

// creates all styles in style header
export const CSSGlobalStyle = createGlobalStyle`
  ${reset}
  ${gatsbyReset}
  ${ownReset}
  ${typo}
`;
