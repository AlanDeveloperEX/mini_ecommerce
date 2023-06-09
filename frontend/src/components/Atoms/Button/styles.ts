import styled, { css } from "styled-components";

interface ContainerProps {
  enabled?: boolean;
  customStyle?: string;
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, customStyle, enabled }) => css`
    background: ${theme.colors.background_btn};
    color: ${theme.colors.default_white};

    ${theme.shape.buttons.default};

    opacity: 1;
    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 6px;

    width: 100%;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }

    &:disabled {
      opacity: 0.7;
      pointer-events: none;
    }

    ${enabled === false &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}

    ${customStyle === "green" &&
    css`
      background: ${theme.colors.background_btn_act};
    `}
  `}
`;
