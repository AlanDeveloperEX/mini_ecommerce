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

export const TotalContainer = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.default_gray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 20px;

    p {
      color: ${theme.colors.default_text};
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 24px;
      margin-right: 20px;

      span {
        color: ${theme.colors.default_gray};
        font-size: 14px;
        margin-right: 20px;
      }
    }

    button {
      max-width: 235px;
    }
  `}
`;
