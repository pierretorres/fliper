import { Switch, withStyles } from '@material-ui/core';
import styled from 'styled-components';
import colors from '../../../styles/colors';

export const MuiSwitch = withStyles({
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

export const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
`;
