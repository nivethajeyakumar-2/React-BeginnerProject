// import * as React from 'react';
import * as React from 'react'; // ✅ Added to fix useState error
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Linebar() {
  const [connectNulls, setConnectNulls] = React.useState(true);

  return (
    <Stack sx={{ width: '100%' }}>
      <FormControlLabel
        checked={connectNulls}
        control={
          <Checkbox onChange={(event) => setConnectNulls(event.target.checked)} />
        }
        label="connectNulls"
        labelPlacement="end"
      />
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
        series={[
          {
            data: [2, 5, 6.5, 3, 8, 10, 9.5, 2.5, 6, 10, 8],
            color: '#000000', 
          },
          {
            data: [null, null, 5.5, 2, null, null, 8.5, 1.5, 5],
            connectNulls,
            area: true,
            color: '#1976d2', 
          },
        ]}
        height={200}
        margin={{ bottom: 10 }}
        skipAnimation
      />
    </Stack>
  );
}
