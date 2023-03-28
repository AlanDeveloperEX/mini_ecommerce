import styled, { css } from "styled-components";

export const MainContainer = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.default_background};

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 16px;
    width: 100%;

    @media (max-width: ${theme.breakpoints.xs}px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;

export const ContainerLoading = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.default_background};
    min-height: calc(100vh - 100px);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `}
`;
