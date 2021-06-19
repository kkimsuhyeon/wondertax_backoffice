import styled, { css, CSSProperties } from 'styled-components/macro';

export type ButtonStatus = 'active' | 'disabled' | 'normal';

interface ButtonType {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  weight?: CSSProperties['fontWeight'];
  display?: CSSProperties['display'];
}

const CommonButton = styled.button.attrs<{ status: ButtonStatus }>(({ status, type = 'button' }) => ({
  type: type,
  disabled: status === 'disabled',
}))<ButtonType>`
  ${({ width, height, margin, padding, weight, display }) => css`
    border-radius: 0.36rem;
    width: ${width ?? '100%'};
    height: ${height ?? '2rem'};
    ${margin && `margin: ${margin}`};
    ${padding && `padding: ${padding}`};
    ${weight && `font-weight: ${weight}`};
    display: ${display ?? 'inline-block'};
  `}
`;

export const Button = styled(CommonButton)<{ status?: ButtonStatus }>`
  ${({ status = 'normal', theme }) => {
    if (status === 'active')
      return css`
        color: ${theme.black};
        background-color: ${theme.yellow};
        border: ${theme.yellow};
      `;
    if (status === 'disabled')
      return css`
        color: ${theme.blackGray};
        background-color: ${theme.whiteGray};
        border: ${theme.whiteGray};
      `;
    return css`
      color: ${theme.black};
      background-color: ${theme.white};
      border: ${theme.lemon};
    `;
  }}
`;
