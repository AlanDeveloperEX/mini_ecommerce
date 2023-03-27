import styled, { css } from "styled-components";

interface ContainerProps {
  enabled?: boolean;
  customStyle?: string;
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, customStyle }) => css`
    background: ${theme.colors.background_btn};
    color: ${theme.colors.default_white};

    &:hover {
      background: ${theme.colors.background_btn_act};
      cursor: pointer;
    }

    ${customStyle === "green" &&
    css`
      background: #039b00;
    `}
  `}

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;

  height: 40px;
  width: 100%;

  padding: 0 16px;
  margin-top: 16px;
  transition: background-color 0.2s;

  font-size: 14px;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  ${(props) =>
    props.enabled === false &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}

  ${(props) =>
    props.customStyle === "green" &&
    css`
      background: #039b00;
    `}
`;
