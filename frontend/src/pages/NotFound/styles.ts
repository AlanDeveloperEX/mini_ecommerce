import styled, { css } from "styled-components";

export const MainContainer = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.default_background};
    min-height: 250px;
    padding: 20px;
    ${theme.shape.cards.default};
  `}
`;
