import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const TableStyled = styled.table`
  ${({ theme }) => css`
    width: 100%;

    tr,
    th {
      text-align: start;
    }

    th {
      margin-bottom: 20px;
    }

    tr {
      display: grid;
      grid-template-columns: 2.5fr 1.5fr 2fr;
      width: 100%;
    }
  `}
`;

export const TdProductItem = styled.td`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      gap: 8px;

      &.subtotal {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
      }

      span {
        font-weight: 700;
        font-size: 14px;
        color: ${theme.colors.default_text};

        &.price {
          font-size: 16px;
        }
      }
    }

    svg {
      font-size: 20px;
      color: ${theme.colors.default_blue};

      &:hover {
        cursor: pointer;
      }
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

export const ImgColumn = styled.img`
  ${({ theme }) => css`
    width: 90px;
    margin-right: 50px;
  `}
`;

export const InputColumn = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 14px;
    margin: 0 10px 0 10px;

    width: 62px;
    height: 26px;

    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  `}
`;
