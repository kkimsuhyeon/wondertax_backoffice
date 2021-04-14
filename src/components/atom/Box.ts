import styled, { css, CSSProperties } from 'styled-components/macro';
import { Palette } from 'globals/theme';

interface Div {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  flex?: CSSProperties['flex'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  backgroundColor?: keyof Palette;
}

export const Div = styled.div<Div>`
  ${({ theme, width, height, flex, margin, padding, backgroundColor }) => css`
    ${width && `width: ${width};`}
    ${height && `height: ${height};`}
    ${flex && `flex: ${flex};`}
    ${margin && `margin: ${margin};`}
    ${padding && `padding: ${padding};`}
    ${backgroundColor && `background: ${theme[backgroundColor]};`}
  `}
`;
