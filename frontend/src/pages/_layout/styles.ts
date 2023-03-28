import styled, { css } from "styled-components";

export const DefaultContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 0 20px 20px;

    width: 100%;
    max-width: ${theme.breakpoints.sm}px;
  `}
`;
