import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import colors from '../../../styles/colors';

export const useStyles = makeStyles({
  root: {
    color: colors.white,
  },
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
