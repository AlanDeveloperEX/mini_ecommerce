import styled, { css } from "styled-components";

export const MainContainer = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.default_white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 64px;
    gap: 30px;

    p {
      color: ${theme.colors.default_text};
      font-weight: 700;
      font-size: 20px;
    }
  `}
`;

export const WrapBtnContainer = styled.div`
  ${({ theme }) => css`
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 180px;
  `}
`;

export const ImgCard = styled.img`
  ${({ theme }) => css`
    width: 350px;
    height: 240px;
  `}
`;
