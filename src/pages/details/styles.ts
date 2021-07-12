import styled from 'styled-components';
import colors from '../../styles/colors';

interface IStyled {
  size?: number;
  effect?: boolean;
}

interface ITheme {
  theme: {
    main: 'light' | 'dark';
  };
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Body = styled.div<IStyled>`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ITheme) => colors[props.theme.main].background};
  transition: 0.3s ease-out;
  grid-gap: 30px;
  padding-right: 78px;
`;