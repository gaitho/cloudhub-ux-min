import React from 'react';
import { YAxis } from 'recharts';
import { useTheme } from 'cloudhub-components/dist/mui/styles';

// ----------------------------------------------------------------------

function YAxisRecharts({ ...other }) {
  const theme = useTheme();

  return (
    <YAxis
      axisLine={false}
      tickLine={false}
      tickSize={16}
      tick={{
        fill: theme.palette.text.disabled,
        fontSize: 12
      }}
      {...other}
    />
  );
}

export default YAxisRecharts;
