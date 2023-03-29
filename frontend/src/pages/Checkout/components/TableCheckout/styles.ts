import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    @media (max-width: ${theme.breakpoints.sm}px) {
      overflow-x: hidden;
      overflow-y: auto;
    }
  `}
`;

export const TableStyled = styled.table`
  ${({ theme }) => css`
    width: 100%;

    tr,
    th {
      text-align: start;
    }

    tr {
      display: grid;
      grid-template-columns: 2.5fr 1.5fr 2fr;
      width: 100%;
      margin-bottom: 20px;
    }
  `}
`;

export const TitleColumn = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.default_gray};
    font-weight: 700;
    font-size: 14px;
  `}
`;
