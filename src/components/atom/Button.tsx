import styled, { css, CSSProperties } from 'styled-components/macro';

export type ButtonStatus = 'active' | 'disabled' | 'normal';

interface ButtonType {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
}

const CommonButton = styled.button.attrs<{ status: ButtonStatus }>(({ status }) => ({
  type: 'button',
  disabled: status === 'disabled',
}))<ButtonType>`
  ${({ width, height, margin, padding }) => css`
    border-radius: 0.18rem;
    width: ${width && '100%'};
    height: ${height && '2rem'};
    ${margin && `margin: ${margin}`};
    ${padding && `padding: ${padding}`};
  `}
`;

export const Button = styled(CommonButton)<{ status?: ButtonStatus }>`
  ${({ status = 'normal', theme }) => {
    if (status === 'active')
      return css`
        color: ${theme.black};
        background-color: ${theme.lemon};
        border: ${theme.lemon};
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
