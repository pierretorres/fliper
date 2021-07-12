import React, { useCallback } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useDispatch } from 'react-redux';
import { Container, useStyles } from './styles';
import Tooltip from '../Tooltip';
import { changeCurrency } from '../../../store/Preferences.store';
import Translate from '../../../utils/translate';

interface Options {
  title: 'brazilian real' | 'american dollar' | 'euro';
  value: string;
}

const options: Array<Options> = [
  { title: 'brazilian real', value: 'BRL' },
  { title: 'american dollar', value: 'USD' },
  { title: 'euro', value: 'EUR' },
];

const CurrencySelector: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCurrency = useCallback(
    value => {
      dispatch(changeCurrency(value));
      handleClose();
    },
    [dispatch],
  );

  return (
    <Container>
      <Tooltip title={Translate('currency')}>
        <IconButton onClick={handleClick}>
          <MonetizationOnIcon
            classes={{ root: classes.root }}
            color="inherit"
          />
        </IconButton>
      </Tooltip>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: 16,
          },
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option.value}
            onClick={() => handleCurrency(option.value)}
          >
            {Translate(option.title)}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default CurrencySelector;
