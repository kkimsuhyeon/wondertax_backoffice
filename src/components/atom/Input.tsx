import styled, { css, CSSProperties } from 'styled-components';

export interface Input {
  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
  size?: string;
  align?: CSSProperties['textAlign'];
}

export const Input = styled.input.attrs(() => ({
  autoComplete: 'off',
  spellCheck: false,
}))<Input>`
  ${({ height, width, margin, padding, size, align }) => css`
    border-radius: 0.18rem;
    width: ${width ?? '100%'};
    height: ${height ?? '2rem'};
    ${margin && `margin: ${margin};`}
    ${padding && `padding: ${padding};`}
    font-size: ${size ?? '0.9rem'};
    ${align && `text-align:${align};`}
  `}
`;
