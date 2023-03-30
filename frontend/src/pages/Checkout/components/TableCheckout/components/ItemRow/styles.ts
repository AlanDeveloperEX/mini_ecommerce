import styled, { css } from "styled-components";

export const TrProductItem = styled.tr`
  position: relative;
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

        span.subtotal-mobile {
          display: none;
        }
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

    @media (max-width: ${theme.breakpoints.sm}px) {
      &.col-product {
        width: 100%;
        align-items: flex-start;
        div {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          span.price {
            margin-right: -30px;
          }
        }
      }
      &.col-qty {
        position: absolute;
        position: absolute;
        bottom: 6px;
        left: 78px;
      }
      &.col-subtotal {
        align-items: flex-start;
        div.subtotal {
          flex-direction: column-reverse;
          align-items: flex-end;
          gap: 16px;

          div.sub-wrap {
            font-weight: 700;
            font-size: 14px;

            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }

          span.subtotal-mobile {
            display: flex;
            color: ${theme.colors.default_gray};
          }
        }
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

    @media (max-width: ${theme.breakpoints.sm}px) {
      width: 62px;
      margin-right: 16px;
    }
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
