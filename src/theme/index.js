import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '@cloudhub-ux/core/theme/ThemeProvider';
import componentsOverride from './overrides';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};

export default function ThemeConfig({ children, ...props }) {
  return (
    <ThemeProvider componentsOverride={componentsOverride} {...props}>
      {children}
    </ThemeProvider>
  );
}
