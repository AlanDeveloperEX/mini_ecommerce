import styled, { css } from "styled-components";

interface ContainerProps {}

export const Container = styled.div<ContainerProps>`
  ${({ theme }) => css`
    background: ${theme.colors.default_white};
    color: ${theme.colors.default_text};

    ${theme.shape.cards.default};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    width: 100%;
    height: fit-content;
  `}
`;

export const ImgCard = styled.img`
  ${({ theme }) => css`
    width: 150px;
  `}
`;

export const TitleCard = styled.h3`
  ${({ theme }) => css`
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  `}
`;

export const PriceCard = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  `}
`;
