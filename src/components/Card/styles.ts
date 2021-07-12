import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

interface IStyled {
  size?: number;
  effect?: boolean;
  cardEffect?: boolean;
}
interface ITheme {
  theme: {
    main: 'light' | 'dark';
  };
}

export const Container = styled.div<IStyled>`
  width: 344.5px;
  border-radius: 20px;
  background-color: ${(props: ITheme) =>
    colors[props.theme.main].backgroundCard};
  box-shadow: rgb(0 0 0 / 16%) 3px 3px 3px 0px;
  padding: 25px 24px 14px;
  transition: position 4s linear;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 800;
  color: ${(props: ITheme) => colors[props.theme.main].titleText};
  transition: color 0.3s ease-out;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-gap: 7px;
  padding: 35px 0 34px;
`;

export const TextPrimary = styled.h1<IStyled>`
  font-size: ${props =>
    props.size
      ? css`
          ${props.size}px
        `
      : '22px'};
  font-weight: 800;
  color: ${(props: ITheme) => colors[props.theme.main].textPrimary};
  transition: color 0.3s ease-out;
`;

export const TextSecondary = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: ${(props: ITheme) => colors[props.theme.main].textSecondary};
  transition: color 0.3s ease-out;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 7px;
  margin-bottom: 25px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 18px;
  border-top: 1px solid ${(props: ITheme) => colors[props.theme.main].icon};
  transition: border-top 0.3s ease-out;
`;

export const Button = styled.button`
  border: 1px solid ${(props: ITheme) => colors[props.theme.main].buttonBorder};
  background-color: ${(props: ITheme) =>
    colors[props.theme.main].buttonBackground};
  padding: 6px 13px;
  border-radius: 100px;
  font-size: 16px;
  color: ${(props: ITheme) => colors[props.theme.main].buttonText};
  font-weight: 700;
  transition: 0.28s ease-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props: ITheme) =>
      colors[props.theme.main].buttonHoverBackground};
    color: ${(props: ITheme) => colors[props.theme.main].buttonHoverColor};
    border-color: ${(props: ITheme) =>
      colors[props.theme.main].buttonHoverBorder};
  }
`;
