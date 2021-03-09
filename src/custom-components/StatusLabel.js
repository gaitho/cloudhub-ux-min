import React from 'react';
import { MLabel } from '../theme';

const StatusLabel = ({ children, ...props }) => {
  return (
    <MLabel color="primary" variant="filled" {...props}>
      {children}
    </MLabel>
  );
};

export default StatusLabel;
