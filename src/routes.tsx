import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';

import { useSelector } from 'react-redux';
import Summary from './pages/summary';
import Details from './pages/details';
import { RootState } from './store';
import colors from './styles/colors';

const Routes: React.FC = () => {
  type ITheme = 'dark' | 'light';

  const preferences = useSelector(
    (state: RootState) => state.preferences.theme,
  ) as ITheme;

  const theme = {
    main: preferences,
  };

  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme
        color={colors[preferences].backgroundCard}
        highlightColor={colors[preferences].background}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Summary} />
            <Route
              path="/details"
              component={() => <Details theme={preferences} />}
            />
          </Switch>
        </BrowserRouter>
      </SkeletonTheme>
    </ThemeProvider>
  );
};

export default Routes;
