import { makeStyles } from '@material-ui/core';
import colors from '../../../styles/colors';

const useStyles = makeStyles({
  root: {
    color: colors.white,
  },
  tooltip: {
    background: colors.white,
    color: colors.dark.backgroundCard,
  },
  tooltipPlacementBottom: {
    marginTop: 2,
  },
});

export default useStyles;
