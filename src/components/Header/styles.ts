import { Switch, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import colors from '../../styles/colors';

interface IStyled {
  effect?: boolean;
}

export const ThemeSwitch = withStyles({
  switchBase: {
    color: colors.white,
    '&$checked': {
      color: colors.dark.buttonBackground,
    },
    '&$checked + $track': {
      backgroundColor: colors.yellow,
    },
    '& +$track': {
      backgroundColor: colors.grayLight,
    },
  },
  checked: {},
  track: {},
})(Switch);

export const Container = styled.div<IStyled>`
  position: absolute;
  width: 100vw;
  height: ${props => (props.effect ? '80px' : '100vh')};
  background-color: #202146;
  transition: height 0.8s ease-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 230px;
  height: auto;
`;

export const Preferences = styled.div<IStyled>`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  padding: 0 30px;
  width: 33.3%;
  justify-content: flex-end;
`;

export const EmptyComponent = styled.div`
  width: 33.3%;
`;
