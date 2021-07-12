import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import colors from '../../../styles/colors';

interface ITheme {
  theme: {
    main: 'light' | 'dark';
  };
}

export const useStyles = makeStyles({
  root: {
    color: colors.white,
  },
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  padding: 20px 0;
`;

export const Image = styled.img`
  width: 230px;
  height: auto;
`;
export const Message = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${(props: ITheme) => colors[props.theme.main].textSecondary};
  transition: color 0.3s ease-out;
  text-align: center;
`;
