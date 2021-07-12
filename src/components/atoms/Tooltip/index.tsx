import React from 'react';
import { Tooltip as MuiTooltip } from '@material-ui/core';
import useStyles from './styles';

interface TooltipProps {
  children: React.ReactElement;
  title: string;
}
const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  ...rest
}: TooltipProps) => {
  const classes = useStyles();

  return (
    <MuiTooltip
      {...rest}
      title={title}
      classes={{
        tooltip: classes.tooltip,
        tooltipPlacementBottom: classes.tooltipPlacementBottom,
      }}
      placement="bottom"
    >
      {children}
    </MuiTooltip>
  );
};
export default Tooltip;
