import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '../Tooltip';
import { RootState } from '../../../store';
import { changeTheme } from '../../../store/Preferences.store';
import { MuiSwitch, Container } from './styles';
import Translate from '../../../utils/translate';

const ThemeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.preferences);
  return (
    <Tooltip title={Translate('dark mode')}>
      <Container>
        <MuiSwitch
          checked={theme === 'dark'}
          onChange={() =>
            dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'))
          }
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Container>
    </Tooltip>
  );
};

export default ThemeSwitch;
