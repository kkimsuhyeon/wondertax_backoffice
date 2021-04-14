import styled, { css, CSSProperties } from 'styled-components/macro';
import { Palette } from 'globals/theme';

export type ButtonStatus = 'active' | 'disabled' | 'normal';

interface ButtonType {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
}

const CommonButton = styled.button.attrs<{status: ButtonStatus}>(() => ())<ButtonType>`
  ${({ width, height, margin, padding }) => css`
    width: ${width && '100%'};
    height: ${height && '2rem'};
    ${margin && `margin: ${margin}`};
    ${padding && `padding: ${padding}`};
  `}
`;

export const Button = styled(CommonButton)``;
