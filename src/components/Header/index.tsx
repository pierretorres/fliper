import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../styles/assets/images/loading.gif';
import { Container, Logo, Preferences, EmptyComponent } from './styles';
import ThemeSwitch from '../atoms/ThemeSwitch';
import LanguageSelector from '../atoms/LanguageSelector';
import CurrencySelector from '../atoms/CurrencySelector';
import { RootState } from '../../store';
import { changeLoadingEffect } from '../../store/Preferences.store';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { loadingEffect } = useSelector(
    (state: RootState) => state.preferences,
  );
  const [activeEffect, setActiveEffect] = useState(!loadingEffect);

  if (loadingEffect)
    setInterval(() => {
      setActiveEffect(true);
      dispatch(changeLoadingEffect(false));
    }, 3000);

  return (
    <Container effect={activeEffect}>
      <EmptyComponent />
      <Logo src={logo} />

      <Preferences>
        {loadingEffect || (
          <>
            <LanguageSelector />
            <CurrencySelector />
            <ThemeSwitch />
          </>
        )}
      </Preferences>
    </Container>
  );
};

export default Header;
