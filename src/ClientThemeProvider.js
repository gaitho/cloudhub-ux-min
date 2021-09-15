import React from 'react';
import Loadable from '@react-loadable/revised';
import Box from '@mui/material/Box';

import MuiThemeProvider from './theme';
import ThemeContext from '@cloudhub-ux/core/theme/ThemeContext';
import { Loading } from '@cloudhub-ux/core';
import localsizes from '@cloudhub-ux/core/theme/Sizes';
import localcolors from '@cloudhub-ux/core/theme/Colors';
import localfonts from '@cloudhub-ux/core/theme/Fonts';
import { ToastContainer } from '@cloudhub-ux/core/toastr';

const BaseTheme = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "BaseTheme" */ '@cloudhub-ux/core/baseweb/theme/BaseTheme'
    ),
  loading: () => (
    <Box justifyContent="center" alignItems="center">
      <Loading />
    </Box>
  ),
});

const ThemeProvider = ({
  children,
  fonts = {},
  colors = {},
  sizes = {},
  theme,
  addBaseWeb = true,
  ...props
}) => {
  const newfonts = { ...localfonts, ...fonts };
  const newcolors = { ...localcolors, ...colors };
  const newsizes = { ...localsizes, ...sizes };

  return (
    // Apply theme for designs (Premium themes)
    <MuiThemeProvider fonts={newfonts} colors={newcolors} sizes={newsizes}>
      {addBaseWeb ? (
        <BaseTheme fonts={newfonts} colors={newcolors} sizes={newsizes}>
          <ThemeContext.Provider
            value={{
              fonts: newfonts,
              colors: newcolors,
              sizes: newsizes,
              CONFIG: props.CONFIG || {},
              ...props,
            }}
          >
            {children}
            <div style={{ flex: 0, zIndex: 9999 }}>
              <ToastContainer />
            </div>
          </ThemeContext.Provider>
        </BaseTheme>
      ) : (
        <ThemeContext.Provider
          value={{
            fonts: newfonts,
            colors: newcolors,
            sizes: newsizes,
            CONFIG: props.CONFIG || {},
            ...props,
          }}
        >
          {children}
          <div style={{ flex: 0, zIndex: 9999 }}>
            <ToastContainer />
          </div>
        </ThemeContext.Provider>
      )}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
