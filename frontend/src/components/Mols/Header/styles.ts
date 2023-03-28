import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 10px;

    padding: 18px 10px;

    height: 74px;
    width: 100%;
    color: ${theme.colors.default_white};
  `}
`;

export const Logo = styled.p`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: 20px;

    color: ${theme.colors.default_white};
  `}
`;

export const CartIconContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    &:hover {
      cursor: pointer;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    p {
      font-size: 14px;
      color: ${theme.colors.default_white};
    }

    span {
      font-size: 12px;
      color: ${theme.colors.default_gray};
    }

    svg {
      color: ${theme.colors.default_white};
      font-size: 28px;
    }
  `}
`;
