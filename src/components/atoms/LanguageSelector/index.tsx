import React, { useCallback } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import { useDispatch } from 'react-redux';
import { Container, useStyles } from './styles';
import Tooltip from '../Tooltip';
import Translate from '../../../utils/translate';
import { changeLanguage } from '../../../store/Preferences.store';

type Languages = 'portuguese' | 'english' | 'spanish';
const options: Array<Languages> = ['portuguese', 'english', 'spanish'];

const LanguageSelector: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguage = useCallback(
    value => {
      dispatch(changeLanguage(value));
      handleClose();
    },
    [dispatch],
  );

  return (
    <Container>
      <Tooltip title={Translate('language')}>
        <IconButton onClick={handleClick}>
          <TranslateIcon classes={{ root: classes.root }} color="inherit" />
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
          <MenuItem key={option} onClick={() => handleLanguage(option)}>
            {Translate(option)}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default LanguageSelector;
