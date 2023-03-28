import styled, { css } from "styled-components";

export const MainContainer = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.default_white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;

    border-radius: 4px;
  `}
`;
