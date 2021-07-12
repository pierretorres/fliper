import React, { useCallback } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Container, useStyles } from './styles';
import Translate from '../../../utils/translate';

interface About {
  onSelect: () => void;
  state: boolean;
}

const AboutSelector: React.FC<About> = ({ onSelect, state }: About) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const option = Translate('about');

  const classes = useStyles();

  const handleClick = (event: any) => {
    if (state) onSelect();
    else setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAbout = useCallback(() => {
    onSelect();
    handleClose();
  }, [onSelect]);

  return (
    <Container>
      <IconButton onClick={handleClick}>
        {state ? (
          <ArrowBackIcon classes={{ root: classes.root }} />
        ) : (
          <MoreVertIcon classes={{ root: classes.root }} />
        )}
      </IconButton>
      {state || (
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
          <MenuItem onClick={handleAbout}>{option}</MenuItem>
        </Menu>
      )}
    </Container>
  );
};

export default AboutSelector;
